import Link from "next/link";
import { Leaf, Heart, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-purple-wamiti rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-lg leading-tight">
                Wamiti Foundation
              </p>
              <p className="text-xs text-primary-light leading-tight">
                Touching Lives, Growing Hope
              </p>
            </div>
          </div>
          <p className="font-body text-white/70 text-sm leading-relaxed max-w-sm mt-4">
            Rooted in the heart of Shinoyi Shikomari, we are committed to
            uplifting communities through sustainable projects, environmental
            conservation, youth empowerment, and grassroots development across
            Kakamega County.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-primary-light">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Our History", href: "/history" },
              { label: "Projects", href: "/projects" },
              { label: "Gallery", href: "/gallery" },
              { label: "Volunteer", href: "/volunteer" },
              { label: "Contribute", href: "/contribute" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-white/70 hover:text-primary-light transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base font-semibold mb-4 text-primary-light">
            Find Us
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
              <span className="font-body text-sm text-white/70">
                Shinoyi Shikomari Ward,
                <br />
                Kakamega County, Kenya
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-light shrink-0" />
              <span className="font-body text-sm text-white/70">
                info@wamitifoundation.org
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-light shrink-0" />
              <span className="font-body text-sm text-white/70">
                +254 700 000 000
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/50">
            © {new Date().getFullYear()} Wamiti Foundation. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://facebook.com/wamitifoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com/wamitifoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/wamitifoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          <p className="font-body text-xs text-white/50 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary-light fill-primary-light" />{" "}
            for the community
          </p>
        </div>
      </div>
    </footer>
  );
}