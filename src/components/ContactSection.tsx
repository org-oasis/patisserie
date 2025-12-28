import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-8 bg-gradient-cream">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent font-serif italic text-sm">{t.contact.subtitle}</span>
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="heading-section text-foreground mb-2">
            {t.contact.title} <span className="text-accent italic">{t.contact.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-6 rounded-lg shadow-soft">
            <form className="space-y-4">
              <div className="space-y-3">
                <Input placeholder={t.contact.form.name} className="bg-background" />
                <Input type="email" placeholder={t.contact.form.email} className="bg-background" />
                <Input type="tel" placeholder={t.contact.form.phone} className="bg-background" />
                <Textarea
                  placeholder={t.contact.form.messagePlaceholder}
                  className="min-h-[120px] bg-background resize-none"
                />
              </div>
              <Button type="submit" variant="elegant" className="w-full">
                {t.contact.form.submit}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="heading-card mb-4">{t.contact.info.title}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-serif text-foreground">{t.contact.info.hours}</p>
                    <p className="text-sm text-muted-foreground">{t.contact.info.hoursValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-serif text-foreground">{t.contact.info.phone}</p>
                    <p className="text-sm text-muted-foreground">+33 7 66 56 95 41</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-serif text-foreground">E-mail</p>
                    <p className="text-sm text-muted-foreground">contact@lapatisserieparisienne.fr</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-serif text-foreground">{t.contact.info.location}</p>
                    <p className="text-sm text-muted-foreground">{t.contact.info.locationValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
