$ErrorActionPreference = "Stop"

$RemoteHost = "ecngx303.inmotionhosting.com"
$RemoteUser = "theand15"
$RemotePort = 2222
$RemotePath = "/home/theand15/samaknitwear.com"
$ReleasePath = "/home/theand15/.samaknitwear-release-$([DateTime]::UtcNow.ToString('yyyyMMddHHmmss'))"

Write-Host "Checking repository state..."

$branch = (git branch --show-current).Trim()

if ($LASTEXITCODE -ne 0 -or $branch -ne "main") {
    throw "Deployment refused: you must be on the main branch."
}

$status = git status --porcelain

if ($status) {
    throw "Deployment refused: local changes have not been committed."
}

git fetch origin

if ($LASTEXITCODE -ne 0) {
    throw "Deployment refused: could not update GitHub status."
}

$localHead = (git rev-parse HEAD).Trim()
$remoteHead = (git rev-parse origin/main).Trim()

if ($localHead -ne $remoteHead) {
    throw "Deployment refused: local main is not synchronized with GitHub main."
}

Write-Host "Repository verified."

Write-Host "Building production website..."
npm run build

if ($LASTEXITCODE -ne 0) {
    throw "Build failed. Nothing was deployed."
}

Write-Host "Creating temporary release directory..."
ssh -p $RemotePort "$RemoteUser@$RemoteHost" "mkdir -p '$ReleasePath'"

if ($LASTEXITCODE -ne 0) {
    throw "Could not create temporary release directory."
}

Write-Host "Uploading release..."
Push-Location "dist\public"

try {
    scp -P $RemotePort -r . "$RemoteUser@$RemoteHost`:$ReleasePath/"
    if ($LASTEXITCODE -ne 0) {
        throw "Upload failed. Live website was not intentionally modified."
    }
}
finally {
    Pop-Location
}

Write-Host "Promoting release to live website..."

$promoteCommand = "rsync -a --delay-updates --delete-delay --exclude='.well-known/' --exclude='cgi-bin/' '$ReleasePath/' '$RemotePath/' && chmod u+w '$ReleasePath' && rm -rf '$ReleasePath'"

ssh -p $RemotePort "$RemoteUser@$RemoteHost" $promoteCommand

if ($LASTEXITCODE -ne 0) {
    throw "Promotion failed. Temporary release was preserved for inspection."
}

Write-Host ""
Write-Host "Deployment complete: https://samaknitwear.com"
