/**
 * SAMA — LIMA MATERIAL HOUSE / FOLDER-FIRST PORTFOLIO
 * A substantially expanded original OneDrive image library, organized into alternating same-orientation rows.
 * The Portfolio remains image-only while every source keeps its complete native framing.
 */
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";
import { portfolioTriples } from "@/data/collectionAssets";

export default function PortfolioGrid() {
  return <div className="sama-site"><PortfolioHeader /><main>
    <section className="sama-portfolio-simple" id="portfolio-grids"><header><p className="sama-label">Portfolio</p><h1>Selected pieces.</h1></header><div className="sama-portfolio-simple__rows">{portfolioTriples.map((triple, index) => <div className={`sama-portfolio-simple__row sama-portfolio-simple__row--${triple.orientation}`} key={`${triple.orientation}-${index}`}>{triple.pieces.map((piece) => <article className="sama-portfolio-simple__card" key={piece.src}><figure><img src={piece.src} alt={piece.alt} /></figure></article>)}</div>)}</div></section>
  </main><PortfolioFooter /></div>;
}
