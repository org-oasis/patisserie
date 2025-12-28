import { Instagram, Facebook, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-chocolate text-cream py-16">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <img
              src="/assets/logo.avif"
              alt="La Pâtisserie Parisienne logo"
              className="h-20 w-20 object-contain mx-auto mb-2"
            />
            <p className="text-champagne italic font-serif">
              {t.footer.tagline}
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-champagne to-transparent mb-8" />

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:bg-champagne/30 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:bg-champagne/30 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@lapatisserieparisienne.fr"
              aria-label="Email"
              className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:bg-champagne/30 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="#about" className="hover:text-champagne transition-colors">
              {t.nav.about}
            </a>
            <a href="#creations" className="hover:text-champagne transition-colors">
              {t.nav.creations}
            </a>
            <a href="#services" className="hover:text-champagne transition-colors">
              {t.nav.services}
            </a>
            <a href="#contact" className="hover:text-champagne transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          {/* Legal */}
          <div className="text-sm opacity-60 space-y-2">
            <p>© 2026 La Pâtisserie Parisienne. {t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
