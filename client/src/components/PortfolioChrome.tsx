/**
 * SAMA — LIMA MATERIAL HOUSE / SHARED NAVIGATION
 * Explicit visitor paths, intact supplied logo, and calm editorial hierarchy.
 */
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const logo = "/media/sama-logo_d6646823.png";

const primaryLinks = [
  { label: "Collections", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Studio", href: "/house" },
  { label: "Collaborate", href: "/trade" },
] as const;

function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  return path.startsWith(href);
}

export function PortfolioHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <header className="sama-header">
        <a href="/" className="sama-header__logo" aria-label="Sama Knitwear collections home">
          <img src={logo} alt="Sama Knitwear" />
        </a>
        <nav className="sama-header__nav" aria-label="Primary navigation">
          {primaryLinks.map((link) => (
            <a href={link.href} key={link.href} aria-current={isActive(location, link.href) ? "page" : undefined}>
              {link.label}
            </a>
          ))}
          <a className="sama-header__inquiry" href="mailto:eunice@iknitwear.com?subject=Sama%20wholesale%20inquiry">Wholesale inquiries</a>
        </nav>
        <button className="sama-header__menu" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </header>
      {open && (
        <aside className="sama-mobile-menu" aria-label="Mobile navigation">
          <p className="sama-label">Sama Knitwear / Navigation</p>
          <nav>
            {primaryLinks.map((link, index) => (
              <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{link.label}<ArrowUpRight size={20} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="sama-mobile-menu__service">
            <a href="mailto:eunice@iknitwear.com?subject=Sama%20wholesale%20inquiry" onClick={() => setOpen(false)}>Wholesale inquiries</a>
          </div>
        </aside>
      )}
    </>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="sama-footer">
      <div className="sama-footer__top">
        <img src={logo} alt="Sama Knitwear" loading="lazy" />
        <p>Specialty knitwear produced and exported from Peru.</p>
      </div>
        <div className="sama-footer__grid">
        <div><span>Portfolio</span><a href="/portfolio">Selected pieces</a></div>
        <div><span>Studio</span><a href="/house">Our story</a><a href="/house#mission">Mission + craft</a><a href="/house#founder">Founder + CEO</a></div>
        <div><span>Collaborate</span><a href="/trade#wholesale">Wholesale</a><a href="/trade#private-label">Private label</a><a href="mailto:eunice@iknitwear.com?subject=Sama%20wholesale%20inquiry">Wholesale inquiries</a></div>
        <div><span>Contact</span><a href="mailto:eunice@iknitwear.com">Customer service</a></div>
      </div>
      <div className="sama-footer__bottom"><span>© {new Date().getFullYear()} Sama Knitwear</span><span>Peru / Specialty Knitwear</span></div>
    </footer>
  );
}
