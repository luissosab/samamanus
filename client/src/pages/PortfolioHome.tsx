/**
 * SAMA — LIMA MATERIAL HOUSE / COLLECTIONS HOME
 * Original OneDrive photography establishes the collection sequence; no screenshot-derived visuals are used.
 */
import { ArrowUpRight } from "lucide-react";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";

const images = {
  hero: "/media/aw23-g5_3e23af42.jpg",
  aw22Fisherman: "/media/aw22-fisherman-sweater-1p9a6059_32d7a999.jpg",
  aw22Poncho: "/media/aw22-turtleneck-poncho-5-473-1_41215052.jpg",
};

export default function PortfolioHome() {
  return (
    <div className="sama-site">
      <PortfolioHeader />
      <main>
        <section className="sama-hero">
          <div className="sama-hero__copy"><p className="sama-label">Sama Knitwear / Peru</p><h1>Sama<br /><em>Knitwear.</em></h1><p>Innovative Knitwear, doing business as Sama Knitwear, has produced and exported specialty knitwear from Peru for more than a decade.</p><a href="/portfolio">View the portfolio <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="sama-hero__image"><img src={images.hero} alt="Sama Knitwear garment photograph" /></div>
        </section>

        <section className="sama-statement"><div className="sama-statement__lead"><p className="sama-label">Who we are</p><h2>Specialty knitwear<br />from <em>Peru.</em></h2></div><div className="sama-statement__body"><p>We work with highly skilled artisan groups in and around Lima, as well as in Cuzco and Puno. Our hand-knit and embroidery groups support women earning income while working from or near home.</p><a className="sama-inline-link" href="/house">Read our story <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>

        <section className="sama-portfolio-entry"><div className="sama-portfolio-entry__image"><img src={images.aw22Fisherman} alt="Model wearing a cream fisherman sweater outdoors" /></div><div className="sama-portfolio-entry__copy"><p className="sama-label">Portfolio</p><h2>Selected<br /><em>pieces.</em></h2><p>Browse original Sama garment photography, arranged by silhouette and image orientation.</p><a href="/portfolio">View the portfolio <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>

        <section className="sama-partner-callout"><div><p className="sama-label">Wholesale & private label</p><h2>Work with<br /><em>Sama.</em></h2><p>For wholesale catalogues and private-label inquiries, contact the Sama team directly.</p><a href="/trade">Wholesale & private label <ArrowUpRight size={17} aria-hidden="true" /></a></div><img src={images.aw22Poncho} alt="Model wearing a light grey knit poncho" /></section>
      </main>
      <PortfolioFooter />
    </div>
  );
}
