import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => handleLanguageChange("fr")}
        className={`w-7 h-5 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
          language === "fr" 
            ? "border-accent shadow-sm scale-105" 
            : "border-transparent opacity-70 hover:opacity-100"
        }`}
        aria-label="Français"
      >
        <svg viewBox="0 0 900 600" className="w-full h-full">
          <rect width="300" height="600" fill="#002654"/>
          <rect x="300" width="300" height="600" fill="#fff"/>
          <rect x="600" width="300" height="600" fill="#CE1126"/>
        </svg>
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`w-7 h-5 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
          language === "en" 
            ? "border-accent shadow-sm scale-105" 
            : "border-transparent opacity-70 hover:opacity-100"
        }`}
        aria-label="English"
      >
        <svg viewBox="0 0 60 30" className="w-full h-full">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
