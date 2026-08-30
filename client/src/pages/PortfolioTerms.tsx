/**
 * SAMA — LIMA MATERIAL HOUSE / TERMS AND CONDITIONS
 * The complete retained terms body is displayed in a readable, unabridged legal-document format.
 */
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";
import { termsSections } from "@/pages/Terms";

export default function PortfolioTerms() {
  return <div className="sama-site"><PortfolioHeader /><main><section className="sama-information-hero sama-terms-hero"><h1>Terms + <em>conditions.</em></h1><p>Innovative Knitwear, doing business as Sama Knitwear</p></section><article className="sama-terms-document">{termsSections.map((section, index) => <section key={section.title}><div><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.title}</h2></div><div>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</article></main><PortfolioFooter /></div>;
}
