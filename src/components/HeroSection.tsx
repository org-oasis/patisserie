import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const heroImage = "/assets/hero-patisserie.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Artisanal French pastries arrangement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-20">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-delay-1">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent font-serif italic text-lg">Paris</span>
            <span className="w-12 h-px bg-accent" />
          </div>

          {/* Main Headline */}
          <h1 className="heading-display text-foreground mb-6 animate-fade-in-delay-1">
            {t.hero.title}
            <span className="block text-caramel italic font-normal mt-2">
              {t.hero.titleAccent}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-elegant text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay-2">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#creations">{t.hero.viewCreations}</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">{t.hero.contactMe}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-delay-3">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-body tracking-wide">Discover</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
