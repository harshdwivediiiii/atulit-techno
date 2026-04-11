"use client";

import { useState, useEffect } from "react";
import { navItems, company } from "@/app/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* Hamburger button — visible only on mobile */}
      <button
        className="mobile-menu-btn"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`hamburger-bar bar-1${open ? " open" : ""}`} />
        <span className={`hamburger-bar bar-2${open ? " open" : ""}`} />
        <span className={`hamburger-bar bar-3${open ? " open" : ""}`} />
      </button>

      {/* Backdrop */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={`mobile-backdrop${open ? " active" : ""}`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <nav
        id="mobile-drawer"
        className={`mobile-drawer${open ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="mobile-drawer-header">
          <a className="brand" href="#top" onClick={handleNavClick} aria-label="Atulit Technology homepage">
            <span className="brand-mark">AT</span>
            <span>
              <strong>{company.shortName}</strong>
              <span className="brand-subtitle">Steel fabrication partner</span>
            </span>
          </a>
          <button
            className="mobile-close-btn"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <ul className="mobile-nav-list">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className="mobile-nav-item"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={handleNavClick}
              >
                <span className="mobile-nav-number">0{index + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA at bottom */}
        <div className="mobile-drawer-footer">
          <a
            className="button button-primary mobile-cta"
            href={`mailto:${company.emailPrimary}`}
            onClick={handleNavClick}
          >
            Email us
          </a>
          <p className="mobile-footer-note">{company.location}</p>
        </div>
      </nav>
    </>
  );
}
