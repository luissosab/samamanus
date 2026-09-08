/**
 * SAMA — LIMA MATERIAL HOUSE / COLLECTIONS HOME
 * Original OneDrive photography establishes the collection sequence; no screenshot-derived visuals are used.
 */
import { ArrowUpRight } from "lucide-react";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";

const images = {
  collections1: "/media/collections-1_8a1aa10e.webp",
  collections2: "/media/collections-2_51ee5ea8.webp",
  collections3: "/media/collections-3_bb489036.webp",
};

export default function PortfolioHome() {
  return (
    <div className="sama-site">
      <PortfolioHeader />
      <main>
        <section className="sama-hero">
          <div className="sama-hero__copy"><p className="sama-label">Sama Knitwear / Peru</p><h1>Sama<br /><em>Knitwear.</em></h1><p>Innovative Knitwear, doing business as Sama Knitwear, has produced and exported specialty knitwear from Peru for more than a decade.</p><a href="/portfolio">View the portfolio <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="sama-hero__image"><img src={images.collections1} alt="Model wearing a white open-knit sweater against a red backdrop" /></div>
        </section>

        <section className="sama-statement"><div className="sama-statement__lead"><p className="sama-label">Who we are</p><h2>Specialty knitwear<br />from <em>Peru.</em></h2></div><div className="sama-statement__body"><p>We work with highly skilled artisan groups in and around Lima, as well as in Cuzco and Puno. Our hand-knit and embroidery groups support women earning income while working from or near home.</p><a className="sama-inline-link" href="/house">Read our story <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>

        <section className="sama-portfolio-entry"><div className="sama-portfolio-entry__image"><img src={images.collections2} alt="Model wearing a textured white sweater beside a fern" /></div><div className="sama-portfolio-entry__copy"><p className="sama-label">Portfolio</p><h2>Selected<br /><em>pieces.</em></h2><p>Discover a selection of specialty knitwear designed and produced in Peru.</p><a href="/portfolio">View the portfolio <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>

        <section className="sama-partner-callout"><div><p className="sama-label">Wholesale & private label</p><h2>Work with<br /><em>Sama.</em></h2><p>For wholesale catalogues and private-label inquiries, contact the Sama team directly.</p><a href="/trade">Wholesale & private label <ArrowUpRight size={17} aria-hidden="true" /></a></div><img src={images.collections3} alt="Model wearing a rust open-knit dress beside water" /></section>
      </main>
      <PortfolioFooter />
    </div>
  );
}
