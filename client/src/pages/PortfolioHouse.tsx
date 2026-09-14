/**
 * SAMA — LIMA MATERIAL HOUSE / STUDIO
 * Complete studio, mission, and founder copy arranged as a readable editorial story with original collection imagery and a specific Sama Knitwear voice.
 */
import { ArrowUpRight } from "lucide-react";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";

const founderPortrait = "/media/Eunice-1200.webp";
const studioImage = "/media/studio-hero-reading-original_6a27e1b2.webp";

export default function PortfolioHouse() {
  return <div className="sama-site"><PortfolioHeader /><main>
    <section className="sama-studio-hero"><div className="sama-studio-hero__copy"><p className="sama-label">Studio</p><h1>Who<br /><em>we are.</em></h1><p>Sama Knitwear approaches knitwear as a conversation between fiber, hand, and form. In Peru, each style is developed through close exchange with makers, technicians, and clients—from the first swatch and silhouette to the finishing details that determine how a garment drapes, wears, and lasts. We bring together local skill, careful sampling, and an exacting eye for color, texture, and proportion, creating specialty pieces that carry the character of their making without losing the clarity required for modern wardrobes.</p></div><figure className="sama-studio-hero__portrait"><img src={studioImage} alt="Woman reading while wearing a red knit cardigan" /></figure></section>
    <section className="sama-founder" id="founder"><figure className="sama-founder__portrait"><img src={founderPortrait} alt="Eunice Moran, founder and CEO of Sama Knitwear" loading="lazy" /><figcaption>Founder and CEO / Eunice Moran</figcaption></figure><div><p className="sama-label">01 / Women owned</p><h2>Founder and CEO<br /><em>Eunice Moran.</em></h2><p>Learning from the women leaders in her life and from years of dedicated work, Eunice Moran built her career around trust, communication, service, and attention to quality. While studying accounting at the Peruvian Adventist University Union, she started work at Artesanias Mon Repos—then one of Peru’s important exporters of alpaca garments.</p><p>There, mentors opened up the many areas of an apparel company and set the course for her life in Peruvian clothing. After years of helping give Peruvian textiles a global stage, Eunice founded Innovative Knitwear, which grew through relationships, recommendations, high-quality products, and personal attention to clients.</p><a className="sama-inline-link" href="/trade">Work with Sama <ArrowUpRight size={17} aria-hidden="true" /></a></div></section>
    <section className="sama-reading-section" id="mission"><div><p className="sama-label">02 / Our mission</p><h2>Dedicated to improving<br /><em>women’s lives.</em></h2></div><div className="sama-reading-section__columns"><p>Our hand-knit and embroidery groups empower women to generate income and economic independence while working from or near home so that they can maintain work-life balance and be with their children.</p><p>Training helps groups expand their skill sets and achieve quality control. These skills are passed on to women in their families, friends, neighbors, and the surrounding community.</p><p>Fair-trade practices are at the heart of Sama. We draw from alpaca, highland wool, and Peruvian Pima cotton, alongside other natural fibers available in the region.</p></div></section>
  </main><PortfolioFooter /></div>;
}
