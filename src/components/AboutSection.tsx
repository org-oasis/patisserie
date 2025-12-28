import { useLanguage } from "@/i18n/LanguageContext";

const chefImage = "/assets/chef-portrait.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-cream">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-elevated">
              <img
                src={chefImage}
                alt="Portrait of the pastry chef"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-accent" />
              <span className="text-accent font-serif italic">{t.about.subtitle}</span>
            </div>

            <h2 className="heading-section text-foreground mb-6">
              {t.about.title}
              <span className="text-accent italic block">{t.about.titleAccent}</span>
            </h2>

            <div className="space-y-6 text-elegant text-muted-foreground">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-serif italic text-2xl text-foreground">
                Marie-Claire Dubois
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Maître Pâtissière
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
