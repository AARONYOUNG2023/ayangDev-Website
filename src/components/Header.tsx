"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/softwares", label: "Softwares" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-border bg-card/95 backdrop-blur-sm"
          : "bg-card"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold text-foreground">
          Aaron Yang
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                pathname === link.href
                  ? "font-medium text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md bg-accent px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Resume
          </a>
        </nav>

        <button
          className="p-1 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-card px-6 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  pathname === link.href
                    ? "font-medium text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-md bg-accent px-3.5 py-2 text-center text-sm font-medium text-white"
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
