/**
 * SAMA — LIMA MATERIAL HOUSE / FOLDER-FIRST PORTFOLIO
 * Continuous mosaic of original photography with a full-catalog responsive viewer and a quiet lookbook-download callout.
 * Every source retains its viewer framing; only placement changes inside the approved cluster ranges.
 */
import { useCallback, useEffect, useMemo, useRef, useState, type TouchEvent } from "react";
import { ArrowDownToLine, ChevronLeft, ChevronRight, X } from "lucide-react";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";
import { portfolioTriples } from "@/data/collectionAssets";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

type MosaicTile = {
  index: number;
  type: "standard" | "feature-portrait-tall" | "feature-portrait-wide" | "feature-landscape-low" | "feature-landscape-extended";
  row: number;
  column: number;
  rowSpan: number;
  columnSpan: number;
};

// Eight construction tracks resolve as a maximum four-column visual field.
// The five approved groups remain consecutive; only the requested local swaps alter their visual order.
const mosaicOrder = [
  0, 1, 2, 3, 4, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14,
  15, 23, 19, 17, 18, 16, 20, 21, 22, 24, 25, 27, 26, 28, 29, 30, 31, 32,
  33, 37, 35, 39, 36, 34, 38, 40, 41,
  42, 44, 43, 45, 46, 48, 47, 49, 50, 51, 52, 53,
] as const;
const featureTiles: MosaicTile[] = [
  { index: 1, type: "feature-portrait-tall", row: 1, column: 2, rowSpan: 2, columnSpan: 1 },
  { index: 8, type: "feature-landscape-low", row: 3, column: 2, rowSpan: 1, columnSpan: 2 },
  { index: 9, type: "feature-landscape-low", row: 4, column: 1, rowSpan: 1, columnSpan: 2 },
  { index: 13, type: "feature-portrait-wide", row: 5, column: 1, rowSpan: 3, columnSpan: 2 },
  { index: 15, type: "feature-landscape-low", row: 6, column: 3, rowSpan: 1, columnSpan: 2 },
  { index: 19, type: "standard", row: 8, column: 1, rowSpan: 1, columnSpan: 1 },
  { index: 16, type: "feature-landscape-extended", row: 8, column: 2, rowSpan: 1, columnSpan: 3 },
  { index: 26, type: "standard", row: 10, column: 1, rowSpan: 1, columnSpan: 1 },
  { index: 27, type: "feature-landscape-low", row: 10, column: 2, rowSpan: 1, columnSpan: 2 },
  { index: 25, type: "standard", row: 10, column: 4, rowSpan: 1, columnSpan: 1 },
  { index: 28, type: "feature-landscape-low", row: 11, column: 1, rowSpan: 1, columnSpan: 2 },
  { index: 29, type: "feature-landscape-low", row: 11, column: 3, rowSpan: 1, columnSpan: 2 },
  { index: 34, type: "feature-portrait-wide", row: 14, column: 2, rowSpan: 3, columnSpan: 2 },
  { index: 37, type: "feature-landscape-low", row: 13, column: 1, rowSpan: 1, columnSpan: 2 },
  { index: 40, type: "feature-portrait-tall", row: 15, column: 1, rowSpan: 2, columnSpan: 1 },
  { index: 53, type: "feature-landscape-extended", row: 18, column: 1, rowSpan: 2, columnSpan: 3 },
];
const terminalTiles: MosaicTile[] = [
  { index: 47, type: "standard", row: 20, column: 1, rowSpan: 1, columnSpan: 1 },
  { index: 49, type: "standard", row: 20, column: 2, rowSpan: 1, columnSpan: 1 },
  { index: 50, type: "standard", row: 20, column: 3, rowSpan: 1, columnSpan: 1 },
  { index: 51, type: "standard", row: 20, column: 4, rowSpan: 1, columnSpan: 1 },
];
const occupiedCells = new Set<string>();
for (const tile of [...featureTiles, ...terminalTiles]) {
  for (let row = tile.row; row < tile.row + tile.rowSpan; row += 1) {
    for (let column = tile.column; column < tile.column + tile.columnSpan; column += 1) occupiedCells.add(`${row}:${column}`);
  }
}
const openCells = Array.from({ length: 20 }, (_, rowOffset) => rowOffset + 1).flatMap((row) => Array.from({ length: 4 }, (_, columnOffset) => columnOffset + 1).map((column) => ({ row, column }))).filter(({ row, column }) => !occupiedCells.has(`${row}:${column}`));
const fixedIndices = new Set([...featureTiles, ...terminalTiles].map(({ index }) => index));
const standardTiles = mosaicOrder.filter((index) => !fixedIndices.has(index)).map((index, position) => ({ index, type: "standard" as const, row: openCells[position].row, column: openCells[position].column, rowSpan: 1, columnSpan: 1 }));
const mosaicTiles: MosaicTile[] = [...featureTiles, ...terminalTiles, ...standardTiles].sort((left, right) => left.row - right.row || left.column - right.column);

export default function PortfolioGrid() {
  const catalog = useMemo(() => portfolioTriples.flatMap((triple) => triple.pieces), []);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const activePiece = activeIndex === null ? null : catalog[activeIndex];

  const showPrevious = useCallback(() => setActiveIndex((current) => current === null ? current : (current - 1 + catalog.length) % catalog.length), [catalog.length]);
  const showNext = useCallback(() => setActiveIndex((current) => current === null ? current : (current + 1) % catalog.length), [catalog.length]);
  const beginSwipe = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
  };
  const endSwipe = (event: TouchEvent<HTMLDivElement>) => {
    const startingPoint = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!startingPoint || !touch) return;
    const horizontalDistance = touch.clientX - startingPoint.x;
    const verticalDistance = touch.clientY - startingPoint.y;
    if (Math.abs(horizontalDistance) < 48 || Math.abs(horizontalDistance) <= Math.abs(verticalDistance)) return;
    if (horizontalDistance > 0) showPrevious(); else showNext();
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); showPrevious(); }
      if (event.key === "ArrowRight") { event.preventDefault(); showNext(); }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeIndex, showNext, showPrevious]);

  return <div className="sama-site"><PortfolioHeader /><main>
    <section className="sama-portfolio-simple" id="portfolio-grids"><header><p className="sama-label">Portfolio</p><h1>Selected pieces.</h1></header><div className="sama-portfolio-mosaic">{mosaicTiles.map(({ index: catalogIndex, type, row, column, rowSpan, columnSpan }) => { const piece = catalog[catalogIndex]; return <article className={`sama-portfolio-mosaic__tile sama-portfolio-mosaic__tile--${type} sama-portfolio-mosaic__tile--image-${catalogIndex + 1}`} style={{ gridColumn: `${column} / span ${columnSpan}`, gridRow: `${row} / span ${rowSpan}` }} key={piece.src}><button className="sama-portfolio-mosaic__open" type="button" onClick={() => setActiveIndex(catalogIndex)} aria-label={`Open ${piece.alt}`}><figure><img src={piece.src} alt={piece.alt} /></figure></button></article>; })}</div></section>
    <section className="sama-lookbook-download" aria-labelledby="lookbook-heading"><div><p className="sama-label">Lookbooks</p><h2 id="lookbook-heading">The collection,<br /><em>in full.</em></h2></div><div className="sama-lookbook-download__detail"><p>A closer record of the silhouettes, textures, and details behind Sama Knitwear.</p><span className="sama-lookbook-download__action">Download lookbooks <ArrowDownToLine size={17} aria-hidden="true" /></span></div></section>
  </main><PortfolioFooter />
    <Dialog open={activeIndex !== null} onOpenChange={(open) => { if (!open) setActiveIndex(null); }}>
      {activePiece && <DialogContent className="sama-portfolio-lightbox" showCloseButton={false}>
        <DialogTitle className="sr-only">Portfolio image viewer</DialogTitle>
        <DialogDescription className="sr-only">Use the left and right arrow keys, the desktop controls, or a horizontal swipe on touch screens to browse the full Portfolio.</DialogDescription>
        <div className="sama-portfolio-lightbox__media" onTouchStart={beginSwipe} onTouchEnd={endSwipe} onTouchCancel={() => { touchStart.current = null; }}>
          <img className="sama-portfolio-lightbox__image" src={activePiece.src} alt={activePiece.alt} />
          <button className="sama-portfolio-lightbox__control sama-portfolio-lightbox__control--previous" type="button" onClick={showPrevious} aria-label="Previous portfolio image"><ChevronLeft aria-hidden="true" /></button>
          <button className="sama-portfolio-lightbox__control sama-portfolio-lightbox__control--next" type="button" onClick={showNext} aria-label="Next portfolio image"><ChevronRight aria-hidden="true" /></button>
          <button className="sama-portfolio-lightbox__close" type="button" onClick={() => setActiveIndex(null)} aria-label="Close portfolio image viewer"><X aria-hidden="true" /></button>
        </div>
      </DialogContent>}
    </Dialog>
  </div>;
}
