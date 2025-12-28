import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhyChooseSection = () => {
  const { t } = useLanguage();

  const values = [
    { key: "handmade" as const },
    { key: "ingredients" as const },
    { key: "recipes" as const },
    { key: "custom" as const },
    { key: "detail" as const },
    { key: "delivery" as const },
  ];

  return (
    <section className="py-8 bg-chocolate text-cream">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-champagne" />
            <span className="text-champagne font-serif italic">{t.why.subtitle}</span>
            <span className="w-12 h-px bg-champagne" />
          </div>
          <h2 className="heading-section mb-4">
            {t.why.title} <span className="text-champagne italic">{t.why.titleAccent}</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const item = t.why.items[value.key];
            return (
              <div
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-champagne/20 flex items-center justify-center flex-shrink-0 group-hover:bg-champagne/30 transition-colors duration-300">
                  <Check className="w-5 h-5 text-champagne" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
