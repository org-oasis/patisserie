import { Cake, Gift, Building2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cake,
      key: "custom" as const,
    },
    {
      icon: Gift,
      key: "boxes" as const,
    },
    {
      icon: Building2,
      key: "corporate" as const,
    },
    {
      icon: Calendar,
      key: "seasonal" as const,
    },
  ];

  return (
    <section id="services" className="py-8 bg-gradient-cream">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent font-serif italic">{t.services.subtitle}</span>
            <span className="w-12 h-px bg-accent" />
          </div>
          <h2 className="heading-section text-foreground mb-4">
            {t.services.title} <span className="text-accent italic">{t.services.titleAccent}</span>
          </h2>
        </div>

        {/* Services Carousel */}
        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => {
                const item = t.services.items[service.key];
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    <div className="h-full p-1">
                      <div
                        className="bg-card p-8 rounded-lg shadow-soft hover-lift group h-full"
                      >
                        <div className="flex items-start gap-6">
                          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-champagne/30 transition-colors duration-300">
                            <service.icon className="w-6 h-6 text-chocolate" />
                          </div>
                          <div className="flex-1">
                            <h3 className="heading-card text-foreground mb-3">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                              {item.description}
                            </p>
                            <p className="font-serif text-accent italic">{item.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="lg" asChild>
            <a href="#contact">{t.services.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
