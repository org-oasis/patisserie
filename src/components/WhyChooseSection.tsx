import { Hand, Wheat, BookOpen, PenTool, Search, Truck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhyChooseSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Hand, key: "handmade" as const },
    { icon: Wheat, key: "ingredients" as const },
    { icon: BookOpen, key: "recipes" as const },
    { icon: PenTool, key: "custom" as const },
    { icon: Search, key: "detail" as const },
    { icon: Truck, key: "delivery" as const },
  ];

  return (
    <section className="py-8 bg-chocolate text-cream">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent font-serif italic text-sm">{t.why.subtitle}</span>
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="heading-section  mb-2">
            {t.why.title} <span className="text-accent italic">{t.why.titleAccent}</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const item = t.why.items[feature.key];
            return (
              <div
                key={index}
                className="bg-card p-5 rounded-lg shadow-soft hover-lift text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3 group-hover:bg-champagne/30 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-chocolate" />
                </div>
                <h3 className="font-serif text-foreground mb-1 text-lg">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
