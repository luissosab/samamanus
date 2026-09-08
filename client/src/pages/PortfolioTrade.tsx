/**
 * SAMA — LIMA MATERIAL HOUSE / COLLABORATE
 * Wholesale and private-label information stays complete while routes and inquiries remain unambiguous.
 */
import { ArrowUpRight } from "lucide-react";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";

const image = "/media/collaborate-1_881a3a6e.webp";

export default function PortfolioTrade() {
  return <div className="sama-site"><PortfolioHeader /><main>
    <section className="sama-page-hero sama-page-hero--cobalt"><div><p className="sama-label">Collaborate</p><h1>Wholesale &<br /><em>private label.</em></h1><p>For stores interested in Sama wholesale and brands developing their own knitwear label.</p></div><img src={image} alt="Model wearing a long light-grey knit cardigan outdoors" /></section>
    <section className="sama-offerings"><article id="wholesale"><p className="sama-label">01 / Wholesale</p><h2>Wholesale<br /><em>inquiries.</em></h2><p>Are you interested in purchasing Sama wholesale for your store or website? For a wholesale catalogue, please contact Eunice Moran. Wholesale orders ship from the United States.</p><a href="mailto:eunice.moran@innovativeknitwear.com?subject=Sama%20wholesale%20catalogue%20request">Request the wholesale catalogue <ArrowUpRight size={17} aria-hidden="true" /></a></article><article id="private-label"><p className="sama-label">02 / Private label</p><h2>Private label<br /><em>opportunities.</em></h2><p>Work with a knit producer in Peru. Our experienced staff provide attentive service for private-label clients.</p><a href="mailto:eunice.moran@innovativeknitwear.com?subject=Sama%20private%20label%20inquiry">Discuss a private-label project <ArrowUpRight size={17} aria-hidden="true" /></a></article></section>
    <section className="sama-contact-band"><p className="sama-label">Private label</p><h2>Have your<br /><em>own brand?</em></h2><p>For private-label inquiries, contact Eunice Moran directly.</p><a href="mailto:eunice.moran@innovativeknitwear.com?subject=Private%20label%20inquiry">Email Eunice Moran <ArrowUpRight size={18} aria-hidden="true" /></a></section>
  </main><PortfolioFooter /></div>;
}
