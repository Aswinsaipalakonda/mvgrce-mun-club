import { Link } from "react-router-dom";
import { Mail, MapPin, Globe } from "lucide-react";
import munLogo from "@/assets/mun-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={munLogo}
                alt="MVGRCE MUN Logo"
                className="h-12 w-auto"
              />
              <div>
                <p className="font-heading text-lg font-semibold">
                  Model United Nations
                </p>
                <p className="text-accent text-sm">MVGR College of Engineering</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              Empowering future leaders through diplomatic simulations, fostering 
              global awareness, and developing essential skills for tomorrow's changemakers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-accent font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About MUN", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Register", path: "/register" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-accent font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  MVGR College of Engineering, Vizianagaram, Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:mun@mvgrce.edu.in"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  mun@mvgrce.edu.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="https://www.mvgrce.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  www.mvgrce.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-light">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} MVGRCE MUN Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
