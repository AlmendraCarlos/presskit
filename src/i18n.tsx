import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, string>;

const es: Dict = {
  "nav.about": "Sobre mí",
  "nav.sets": "Sets",
  "nav.gallery": "Galería",
  "nav.press": "Prensa",
  "nav.booking": "Contrataciones",
  "nav.contact": "Contacto",

  "hero.tag": "Techno · Melodic Techno",
  "hero.title": "Sonido oscuro. Pulso melódico.",
  "hero.subtitle": "DJ y selector argentino. Sets construidos como viajes: textura, tensión y liberación en pista.",
  "hero.cta": "Contratar",
  "hero.cta2": "Escuchar sets",
  "hero.scroll": "Desplazar",
  "marquee": "TECHNO · MELODIC TECHNO · UNDERGROUND · ALMENDR4C4RLOS · ",
  "about.kicker": "01 — Biografía",
  "about.title": "Sobre el artista",
  "about.p1": "ALMENDR4C4RLOS es un DJ y productor enfocado en el Techno y Melodic Techno. Su búsqueda sonora combina la potencia hipnótica del techno con la profundidad emocional de las melodías subterráneas, creando experiencias que llevan al oyente a través de paisajes sonoros envolventes.",
  "about.p2": "Cada set es una construcción meticulosa: tensión, progresión y momentos de catarsis en pista. Influenciado por artistas como Tale Of Us, Mind Against, Adriatique y Massano, su estética se mueve entre lo cinematográfico y lo crudo del club underground.",
  "about.p3": "Con base en Argentina, ha llevado su propuesta a clubes y eventos de la escena local, consolidando una identidad sólida dentro del movimiento techno contemporáneo.",
  "stats.style": "Estilo",
  "stats.styleVal": "Techno / Melodic",
  "stats.base": "Base",
  "stats.baseVal": "Argentina",
  "stats.format": "Formato",
  "stats.formatVal": "DJ Set",
  "stats.duration": "Duración",
  "stats.durationVal": "60–180 min",
  "sets.kicker": "02 — Sets destacados",
  "sets.title": "Selecciones recientes",
  "sets.subtitle": "Una muestra del enfoque sonoro: melódico, profundo, hipnótico.",
  "sets.watchAll": "Ver canal completo",
  "gallery.kicker": "03 — En vivo",
  "gallery.title": "Presencia en pista",
  "gallery.subtitle": "Capturas de presentaciones recientes.",
  "press.kicker": "04 — Material de prensa",
  "press.title": "Press kit",
  "press.subtitle": "Recursos oficiales para medios, promotores y bookers. Descarga directa.",
  "press.bio.title": "Biografía oficial",
  "press.bio.desc": "PDF — biografía, estilo, datos técnicos y contacto.",
  "press.photos.title": "Fotos promocionales",
  "press.photos.desc": "ZIP — pack de fotos en alta resolución.",
  "press.kit.title": "Press kit completo",
  "press.kit.desc": "ZIP — biografía (ES + EN) + fotos en un solo archivo.",
  "press.download": "Descargar",
  "booking.kicker": "05 — Contrataciones",
  "booking.title": "Llevemos el set a tu evento",
  "booking.subtitle": "Disponible para clubes, festivales, marcas y eventos privados. Contacto directo, sin intermediarios.",
  "booking.email": "Email",
  "booking.whatsapp": "WhatsApp",
  "booking.instagram": "Instagram",
  "booking.youtube": "YouTube",
  "footer.rights": "Todos los derechos reservados.",
  "footer.role": "DJ · Techno & Melodic Techno",
  "lang.switch": "EN",

};

const en: Dict = {
  "nav.about": "About",
  "nav.sets": "Sets",
  "nav.gallery": "Gallery",
  "nav.press": "Press",
  "nav.booking": "Bookings",
  "nav.contact": "Contact",

  "hero.tag": "Techno · Melodic Techno",
  "hero.title": "Dark sound. Melodic pulse.",
  "hero.subtitle": "Argentine DJ and selector. Sets built as journeys: texture, tension and release on the dancefloor.",
  "hero.cta": "Book now",
  "hero.cta2": "Listen to sets",
  "hero.scroll": "Scroll",
  "marquee": "TECHNO · MELODIC TECHNO · UNDERGROUND · ALMENDR4C4RLOS · ",
  "about.kicker": "01 — Biography",
  "about.title": "About the artist",
  "about.p1": "ALMENDR4C4RLOS is a DJ and producer focused on Techno and Melodic Techno. His sonic search combines the hypnotic power of techno with the emotional depth of underground melodies, crafting immersive sound experiences.",
  "about.p2": "Every set is a meticulous build: tension, progression and moments of catharsis on the floor. Influenced by artists like Tale Of Us, Mind Against, Adriatique and Massano, his aesthetic moves between the cinematic and the raw underground club.",
  "about.p3": "Based in Argentina, he has brought his proposal to clubs and events in the local scene, consolidating a solid identity within contemporary techno.",
  "stats.style": "Style",
  "stats.styleVal": "Techno / Melodic",
  "stats.base": "Based in",
  "stats.baseVal": "Argentina",
  "stats.format": "Format",
  "stats.formatVal": "DJ Set",
  "stats.duration": "Duration",
  "stats.durationVal": "60–180 min",
  "sets.kicker": "02 — Featured sets",
  "sets.title": "Recent selections",
  "sets.subtitle": "A sample of the sonic direction: melodic, deep, hypnotic.",
  "sets.watchAll": "Visit full channel",
  "gallery.kicker": "03 — Live",
  "gallery.title": "On the floor",
  "gallery.subtitle": "Snapshots from recent performances.",
  "press.kicker": "04 — Press material",
  "press.title": "Press kit",
  "press.subtitle": "Official resources for media, promoters and bookers. Direct download.",
  "press.bio.title": "Official biography",
  "press.bio.desc": "PDF — biography, style, technical info and contact.",
  "press.photos.title": "Promotional photos",
  "press.photos.desc": "ZIP — high-resolution photo pack.",
  "press.kit.title": "Full press kit",
  "press.kit.desc": "ZIP — biography (ES + EN) + photos in one archive.",
  "press.download": "Download",
  "booking.kicker": "05 — Bookings",
  "booking.title": "Let's bring the set to your event",
  "booking.subtitle": "Available for clubs, festivals, brands and private events. Direct contact, no intermediaries.",
  "booking.email": "Email",
  "booking.whatsapp": "WhatsApp",
  "booking.instagram": "Instagram",
  "booking.youtube": "YouTube",
  "footer.rights": "All rights reserved.",
  "footer.role": "DJ · Techno & Melodic Techno",
  "lang.switch": "ES",
};

const dicts: Record<Lang, Dict> = { es, en };

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "es",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || null;
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dicts[lang][k] ?? k;
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
