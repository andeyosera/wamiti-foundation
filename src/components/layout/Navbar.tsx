"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our History", href: "/history" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-neutral-border shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-primary flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">W</span>
          </div>
          <div>
            <p className="font-display font-bold text-base leading-tight text-neutral-dark">
              Wamiti Foundation
            </p>
            <p className="text-xs font-body leading-tight text-neutral-gray">
              Shinoyi Shikomari Ward
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-neutral-dark hover:text-blue-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contribute"
            className="btn-primary text-sm py-2 px-6"
          >
            Contribute
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-dark"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-border">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-neutral-dark py-3 border-b border-neutral-border text-sm hover:text-blue-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contribute"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center text-sm mt-4"
            >
              Contribute Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}