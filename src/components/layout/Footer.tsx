import Link from "next/link";
import { Leaf, Heart, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-lg leading-tight">Wamiti Foundation</p>
              <p className="text-xs text-primary-light leading-tight">Touching Lives, Growing Hope</p>
            </div>
          </div>
          <p className="font-body text-white/70 text-sm leading-relaxed max-w-sm mt-4">
            Rooted in the heart of Shinoyi Shikomari, we are committed to
            uplifting communities through sustainable projects, environmental
            conservation, and grassroots development across Kakamega County.
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
              { label: "Projects", href: "/projects" },
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
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="font-body text-sm text-white/70">
                Shinoyi Shikomari Ward,<br />Kakamega County, Kenya
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="font-body text-sm text-white/70">
                info@wamitifoundation.org
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span className="font-body text-sm text-white/70">
                +254 700 000 000
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-white/50">
            © {new Date().getFullYear()} Wamiti Foundation. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/50 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
}