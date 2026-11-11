import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav, profile } from "../data/content";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const sectionUrl = (href) => `/${href}`;

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/#top" className="navbar__logo" onClick={() => setOpen(false)}>
          {profile.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} to={sectionUrl(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/#contact" className="navbar__cta">
          Get in touch
        </Link>

        <button
          type="button"
          className="navbar__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile" id="mobile-navigation" aria-label="Mobile">
          {nav.map((item) => (
            <Link key={item.href} to={sectionUrl(item.href)} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link to="/#contact" className="navbar__mobile-cta" onClick={() => setOpen(false)}>
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
