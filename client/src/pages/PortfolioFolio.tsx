/**
 * SAMA — LIMA MATERIAL HOUSE / SEASONAL COLLECTIONS
 * Original garment-story folders are represented with one curated image per folder.
 * Original imagery is shown at native ratio without public frame, file, or source metadata.
 */
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRoute } from "wouter";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";
import { folioFrames } from "@/data/collectionAssets";

const collections = {
  aw23: {
    title: <>Selected<br /><em>pieces.</em></>,
    intro: "Original Sama garment photography.",
    cover: "/media/sama-aw23-a1_453725df.webp", coverAlt: "Model wearing a cream textured knit", coverPosition: "center",
    notes: [["Portfolio", "Original garment photography"]],
    frames: folioFrames.aw23,
    next: { label: "More selected pieces", href: "/folio/aw22" },
  },
  aw22: {
    title: <>Selected<br /><em>pieces.</em></>,
    intro: "Original Sama garment photography.",
    cover: "/media/aw22-dress-5-772_3f07089e.jpg", coverAlt: "Model wearing a pale alpaca knit dress", coverPosition: "center 34%",
    notes: [["Portfolio", "Original garment photography"]],
    frames: folioFrames.aw22,
    next: { label: "More selected pieces", href: "/folio/aw21" },
  },
  aw21: {
    title: <>Selected<br /><em>pieces.</em></>,
    intro: "Original Sama garment photography.",
    cover: "/media/aw21-inca-5-6_b9c364a3.jpg", coverAlt: "Close detail of a grey and brown patterned Inca Spun Sweater", coverPosition: "center",
    notes: [["Portfolio", "Original garment photography"]],
    frames: folioFrames.aw21,
    next: { label: "Meet the studio", href: "/house" },
  },
} as const;

export default function PortfolioFolio() {
  const [, params] = useRoute("/folio/:season");
  const key = (params?.season || "aw23") as keyof typeof collections;
  const collection = collections[key] || collections.aw23;
  return (
    <div className="sama-site">
      <PortfolioHeader />
      <main>
        <section className="sama-collection-hero">
          <div className="sama-collection-hero__copy"><a href="/portfolio" className="sama-back"><ArrowLeft size={16} aria-hidden="true" /> Portfolio</a><p className="sama-label">Sama Knitwear</p><h1>{collection.title}</h1><p>{collection.intro}</p></div>
          <div className="sama-collection-hero__image"><img src={collection.cover} alt={collection.coverAlt} style={{ objectPosition: collection.coverPosition }} /></div>
        </section>
        <section className="sama-collection-notes"><p className="sama-label">Collection notes</p><dl>{collection.notes.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl></section>
        <section className="sama-image-rail sama-image-rail--deep" aria-label="Sama garment photography">{collection.frames.map((frame) => <figure key={frame.src}><img src={frame.src} alt={frame.alt} /></figure>)}</section>
        <section className="sama-collection-next"><p className="sama-label">Portfolio</p><h2>Explore more<br /><em>pieces.</em></h2><a href={collection.next.href}>{collection.next.label} <ArrowRight size={18} aria-hidden="true" /></a></section>
      </main>
      <PortfolioFooter />
    </div>
  );
}
