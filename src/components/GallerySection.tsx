import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const entremetImage = "/assets/pastry-entremet.jpg";
const tartImage = "/assets/pastry-tart.jpg";
const chouxImage = "/assets/pastry-choux.jpg";
const viennoiserieImage = "/assets/pastry-viennoiserie.jpg";
const weddingImage = "/assets/pastry-wedding.jpg";
const macaronsImage = "/assets/pastry-macarons.jpg";

const GallerySection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const pastries = [
    {
      id: "entremet",
      categoryKey: "entremet",
      image: entremetImage,
    },
    {
      id: "tart",
      categoryKey: "tart",
      image: tartImage,
    },
    {
      id: "choux",
      categoryKey: "choux",
      image: chouxImage,
    },
    {
      id: "viennoiserie",
      categoryKey: "viennoiserie",
      image: viennoiserieImage,
    },
    {
      id: "wedding",
      categoryKey: "wedding",
      image: weddingImage,
    },
    {
      id: "macarons",
      categoryKey: "macarons",
      image: macaronsImage,
    },
  ];

  const categories = [
    { key: "all", label: t.gallery.viewAll.includes("Toutes") ? "Toutes" : "All" },
    { key: "entremet", label: t.gallery.items.entremet.name },
    { key: "tart", label: t.gallery.items.tart.name },
    { key: "choux", label: t.gallery.items.choux.name },
    { key: "viennoiserie", label: t.gallery.items.viennoiserie.name },
    { key: "wedding", label: t.gallery.items.wedding.name },
    { key: "macarons", label: t.gallery.items.macarons.name },
  ];

  const filteredPastries =
    activeCategory === "all"
      ? pastries
      : pastries.filter((p) => p.categoryKey === activeCategory);

  return (
    <section id="creations" className="py-8 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent font-serif italic">{t.gallery.subtitle}</span>
            <span className="w-12 h-px bg-accent" />
          </div>
          <h2 className="heading-section text-foreground mb-4">
            {t.gallery.title} <span className="text-accent italic">{t.gallery.titleAccent}</span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-chocolate text-cream"
                  : "bg-secondary text-secondary-foreground hover:bg-champagne/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredPastries.map((pastry) => {
            const item = t.gallery.items[pastry.categoryKey as keyof typeof t.gallery.items];
            return (
              <article
                key={pastry.id}
                className="group bg-card rounded-lg overflow-hidden shadow-soft hover-lift"
              >
                <div className="aspect-square overflow-hidden image-shine">
                  <img
                    src={pastry.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 md:p-5">
                  <h3 className="heading-card text-base md:text-lg text-foreground mt-2 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
