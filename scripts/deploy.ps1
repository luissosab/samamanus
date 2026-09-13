$ErrorActionPreference = "Stop"

$RemoteHost = "ecngx303.inmotionhosting.com"
$RemoteUser = "theand15"
$RemotePath = "/home/theand15/samaknitwear.com"

Write-Host "Building production website..."
npm run build

if ($LASTEXITCODE -ne 0) {
    throw "Build failed. Nothing was deployed."
}

Write-Host "Uploading production website..."
Push-Location "dist\public"

try {
    scp -P 2222 -r . "$RemoteUser@$RemoteHost`:$RemotePath/"
    if ($LASTEXITCODE -ne 0) {
        throw "Upload failed. Existing live files were not intentionally deleted."
    }
}
finally {
    Pop-Location
}

Write-Host ""
Write-Host "Deployment complete: https://samaknitwear.com"

