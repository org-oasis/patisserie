import { Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-8 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent font-serif italic">{t.testimonials.subtitle}</span>
            <span className="w-12 h-px bg-accent" />
          </div>
          <h2 className="heading-section text-foreground mb-4">
            {t.testimonials.title} <span className="text-accent italic">{t.testimonials.titleAccent}</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {t.testimonials.items.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-1">
                    <article className="bg-card p-8 rounded-lg shadow-soft hover-lift text-center h-full flex flex-col">
                      <Quote className="w-10 h-10 text-champagne mx-auto mb-6 flex-shrink-0" />
                      <blockquote className="text-foreground text-lg leading-relaxed mb-6 font-serif italic flex-grow">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="pt-4 border-t border-border mt-auto">
                        <p className="font-serif text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </article>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
