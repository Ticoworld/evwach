"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "#why-evwach", label: "Why EVWACH" },
  { href: "#about", label: "What we do" },
  { href: "#programs", label: "Our focus areas" },
  { href: "#how-we-work", label: "How it works" },
  { href: "#involved", label: "Get involved" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    closeOnDesktop();
    window.addEventListener("resize", closeOnDesktop);

    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <div className="page-container">
        <div className="site-nav">
          <Link
            href="#top"
            className="brand-link"
            onClick={closeMenu}
            aria-label="EVWACH International"
            style={{
              backgroundColor: "transparent",
              border: 0,
              boxShadow: "none",
              padding: 0,
            }}
          >
            <Image
              src="/logo.png"
              alt=""
              width={611}
              height={351}
              priority
              sizes="(max-width: 767px) 92px, 112px"
              className="brand-logo"
              style={{
                backgroundColor: "transparent",
                border: 0,
                boxShadow: "none",
                borderRadius: 0,
              }}
            />
          </Link>

          <nav className="site-nav-desktop" aria-label="Site">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="#involved" className="button-link header-cta">
                  Partner with EVWACH
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Hide navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-toggle-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className="mobile-menu"
          data-open={open ? "true" : "false"}
          aria-hidden={!open}
        >
          <div className="mobile-menu-panel" hidden={!open}>
            <nav aria-label="Mobile">
              <ul className="mobile-nav-links">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#involved"
                className="button-link header-cta mobile-cta"
                onClick={closeMenu}
              >
                Partner with EVWACH
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
