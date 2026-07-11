"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-purple-wamiti rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-display font-bold text-lg leading-tight text-navy">
              Wamiti
            </p>
            <p className="text-xs font-body leading-tight text-primary">
              Foundation
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-navy hover:text-primary transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-wamiti group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link href="/contribute" className="btn-primary text-sm py-2 px-6">
            Contribute
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-lavender hover:bg-lavender-dark transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-navy" />
          ) : (
            <Menu className="w-5 h-5 text-navy" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-lavender-dark shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-navy font-medium py-3 px-4 rounded-xl hover:bg-lavender hover:text-primary transition-all duration-200 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-purple-wamiti" />
                {link.label}
              </Link>
            ))}
            <Link
              href="/contribute"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center text-sm mt-3"
            >
              Contribute Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}