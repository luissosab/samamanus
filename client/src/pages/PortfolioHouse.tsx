/**
 * SAMA — LIMA MATERIAL HOUSE / STUDIO
 * Complete studio, mission, and founder copy arranged as a readable editorial story with original collection imagery.
 */
import { ArrowUpRight } from "lucide-react";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";

const founderPortrait = "/media/eunice-moran-founder_d113baa6.jpg";
const studioImage = "/media/aw22-dress-5-772_3f07089e.jpg";

export default function PortfolioHouse() {
  return <div className="sama-site"><PortfolioHeader /><main>
    <section className="sama-studio-hero"><div className="sama-studio-hero__copy"><p className="sama-label">Studio</p><h1>Who<br /><em>we are.</em></h1><p>Innovative Knitwear, doing business as Sama Knitwear, has produced and exported specialty knitwear from Peru for more than a decade. We work with highly skilled artisan groups in and around Lima, as well as in Cuzco and Puno.</p></div><figure className="sama-studio-hero__portrait"><img src={studioImage} alt="Sama Knitwear garment photograph" /></figure></section>
    <section className="sama-founder" id="founder"><figure className="sama-founder__portrait"><img src={founderPortrait} alt="Eunice Moran, founder and CEO of Sama Knitwear" /><figcaption>Founder and CEO / Eunice Moran</figcaption></figure><div><p className="sama-label">01 / Women owned</p><h2>Founder and CEO<br /><em>Eunice Moran.</em></h2><p>Learning from the women leaders in her life and from years of dedicated work, Eunice Moran built her career around trust, communication, service, and attention to quality. While studying accounting at the Peruvian Adventist University Union, she started work at Artesanias Mon Repos—then one of Peru’s important exporters of alpaca garments.</p><p>There, mentors opened up the many areas of an apparel company and set the course for her life in Peruvian clothing. After years of helping give Peruvian textiles a global stage, Eunice founded Innovative Knitwear, which grew through relationships, recommendations, high-quality products, and personal attention to clients.</p><a className="sama-inline-link" href="/trade">Work with Sama <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>
    <section className="sama-reading-section" id="mission"><div><p className="sama-label">02 / Our mission</p><h2>Dedicated to improving<br /><em>women’s lives.</em></h2></div><div className="sama-reading-section__columns"><p>Our hand-knit and embroidery groups empower women to generate income and economic independence while working from or near home so that they can maintain work-life balance and be with their children.</p><p>Training helps groups expand their skill sets and achieve quality control. These skills are passed on to women in their families, friends, neighbors, and the surrounding community.</p><p>Fair-trade practices are at the heart of Sama. We draw from alpaca, highland wool, and Peruvian Pima cotton, alongside other natural fibers available in the region.</p></div></section>
  </main><PortfolioFooter /></div>;
}
