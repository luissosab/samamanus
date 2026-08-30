/**
 * SAMA — LIMA MATERIAL HOUSE / NOT FOUND
 * The fallback state is part of the same calm, clear public information system.
 */
import { ArrowLeft } from "lucide-react";
import { PortfolioFooter, PortfolioHeader } from "@/components/PortfolioChrome";

export default function NotFound() {
  return <div className="sama-site"><PortfolioHeader /><main><section className="sama-not-found"><p className="sama-label">404 / Page not found</p><h1>This page is not<br /><em>in the collection.</em></h1><p>The address may be incomplete or the page may have moved. Return to the Sama collections to continue browsing.</p><a href="/"><ArrowLeft size={17} aria-hidden="true" /> Back to collections</a></section></main><PortfolioFooter /></div>;
}
