import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, PhoneCall, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.contact.form.submit);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-cream">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent font-serif italic">{t.contact.subtitle}</span>
            <span className="w-12 h-px bg-accent" />
          </div>
          <h2 className="heading-section text-foreground mb-4">
            {t.contact.title} <span className="text-accent italic">{t.contact.titleAccent}</span>
          </h2>
          <p className="text-elegant text-muted-foreground">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-body text-foreground mb-2"
                >
                  {t.contact.form.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.form.name}
                  required
                  className="bg-card border-border focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-body text-foreground mb-2"
                >
                  {t.contact.form.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  className="bg-card border-border focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-body text-foreground mb-2"
              >
                {t.contact.form.phone}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+33 1 23 45 67 89"
                className="bg-card border-border focus:border-accent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-body text-foreground mb-2"
              >
                {t.contact.form.message}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.form.messagePlaceholder}
                rows={5}
                required
                className="bg-card border-border focus:border-accent resize-none"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              {t.contact.form.submit}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <div className="bg-card p-8 rounded-lg shadow-soft">
              <h3 className="heading-card text-foreground mb-6">
                {t.contact.info.title}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-chocolate" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t.contact.info.hours}</p>
                    <p className="text-foreground font-body">
                      {t.contact.info.hoursValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-5 h-5 text-chocolate" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t.contact.info.phone}</p>
                    <p className="text-foreground font-body">
                      {t.contact.info.phoneValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-chocolate" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground font-body">
                      contact@lapatisserieparisienne.fr
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-chocolate" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t.contact.info.location}</p>
                    <p className="text-foreground font-body">
                      {t.contact.info.locationValue}
                    </p>
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
