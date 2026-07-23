import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <span className="text-blue-primary font-display font-bold text-sm">W</span>
            </div>
            <div>
              <p className="font-display font-bold text-base leading-tight">
                Wamiti Foundation
              </p>
              <p className="text-xs text-white/60 leading-tight font-body">
                Touching Lives, Growing Hope
              </p>
            </div>
          </div>
          <p className="font-body text-white/70 text-sm leading-relaxed max-w-sm">
            Rooted in the heart of Shinoyi Shikomari, we are committed to
            uplifting communities through education, environmental conservation,
            youth empowerment, and agricultural development across Kakamega County.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-body text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">
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
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-body text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">
            Find Us
          </h4>
          <ul className="space-y-3 font-body text-sm text-white/70">
            <li>
              Shinoyi Shikomari Ward,<br />
              Kakamega County, Kenya
            </li>
            <li>info@wamitifoundation.org</li>
            <li>+254 700 000 000</li>
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6">
            {[
              { label: "FB", href: "https://facebook.com/wamitifoundation" },
              { label: "TW", href: "https://twitter.com/wamitifoundation" },
              { label: "IG", href: "https://instagram.com/wamitifoundation" },
              { label: "WA", href: "https://wa.me/254700000000" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/30 flex items-center justify-center text-white/70 hover:bg-white hover:text-blue-primary transition-all duration-200 text-xs font-body font-medium"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Wamiti Foundation. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/40">
            Built with purpose for the community of Shinoyi Shikomari
          </p>
        </div>
      </div>
    </footer>
  );
}