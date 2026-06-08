import { useEffect, useState } from "react";
import { ArrowUpRight, Download, FileText, Images, Instagram, Mail, Package, Play, Youtube, Menu, X } from "lucide-react";
import { I18nProvider, useI18n, type Lang } from "./i18n";

const ASSETS = {
  hero: "./media/hero.jpg",
  about: "./media/about.jpg",
  g1: "./media/gallery1.jpg",
  g2: "./media/gallery2.jpg",
  g3: "./media/gallery3.jpg",
  g4: "./media/gallery4.jpg",
  bioEs: "./press/biografia.pdf",
  bioEn: "./press/biography.pdf",
  fotosZip: "./press/almendr4c4rlos-fotos.zip",
  kitZip: "./press/almendr4c4rlos-press-kit.zip",
};

const VIDEOS = [
  { id: "1qYVX839a6Q", title: "Melodic V2" },
  { id: "Dw0bT-CDHZ4", title: "Melodic V3" },
  { id: "_lUKGxllpBo", title: "Melodic V4" },
];

const EMAIL = "almendra.carlos.92@gmail.com";
const WHATSAPP_DISPLAY = "+54 9 362 529-0364";
const WHATSAPP_LINK = "https://wa.me/5493625290364";
const INSTAGRAM = "https://instagram.com/almendr4c4rlos";
const YOUTUBE = "https://youtube.com/@almendr4c4rlos";

function LangSwitch() {
  const { lang, setLang } = useI18n();
  const next: Lang = lang === "es" ? "en" : "es";
  return (
    <button
      onClick={() => setLang(next)}
      className="font-mono text-[11px] tracking-widest uppercase border border-border px-3 py-1.5 hover:bg-foreground hover:text-background transition-colors"
      aria-label={`Switch language to ${next}`}
    >
      {lang.toUpperCase()} / {next.toUpperCase()}
    </button>
  );
}

function Nav() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: "#about", label: t("nav.about") },
    { href: "#sets", label: t("nav.sets") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#press", label: t("nav.press") },
    { href: "#booking", label: t("nav.booking") },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""}`}>
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-sm tracking-tight">
          ALMENDR4C4RLOS<span className="text-muted-foreground">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              {i.label}
            </a>
          ))}
          <LangSwitch />
        </div>
        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {items.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
                {i.label}
              </a>
            ))}
            <LangSwitch />
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative min-h-screen overflow-hidden grain">
      <div className="absolute inset-0">
        <img src={ASSETS.hero} alt="ALMENDR4C4RLOS performing live" className="w-full h-full object-cover object-center opacity-50" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 min-h-screen flex flex-col justify-end pb-20 pt-32">
        <div className="fade-up">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">◉ {t("hero.tag")}</div>
          <h1 className="font-display font-bold text-[clamp(2.75rem,9vw,9rem)] leading-[0.9] text-balance max-w-5xl">{t("hero.title")}</h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">{t("hero.subtitle")}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#booking" className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors">
              {t("hero.cta")}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#sets" className="inline-flex items-center gap-3 border border-border px-6 py-3.5 text-sm font-medium hover:bg-accent transition-colors">
              <Play size={14} /> {t("hero.cta2")}
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 lg:right-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground rotate-90 origin-bottom-right hidden md:block">
          ↓ {t("hero.scroll")}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const { t } = useI18n();
  const text = t("marquee");
  const block = (text + text + text + text).repeat(2);
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-card">
      <div className="flex whitespace-nowrap marquee font-display font-bold text-3xl md:text-5xl tracking-tight">
        <span className="pr-8">{block}</span>
        <span className="pr-8">{block}</span>
      </div>
    </div>
  );
}

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 md:py-36 max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">{kicker}</div>
      <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-14 max-w-3xl text-balance">{title}</h2>
      {children}
    </section>
  );
}

function About() {
  const { t } = useI18n();
  const stats = [
    { k: t("stats.style"), v: t("stats.styleVal") },
    { k: t("stats.base"), v: t("stats.baseVal") },
    { k: t("stats.format"), v: t("stats.formatVal") },
    { k: t("stats.duration"), v: t("stats.durationVal") },
  ];
  return (
    <Section id="about" kicker={t("about.kicker")} title={t("about.title")}>
      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        <div className="md:col-span-2">
          <div className="aspect-[3/4] overflow-hidden bg-card">
            <img src={ASSETS.about} alt="ALMENDR4C4RLOS portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
          </div>
        </div>
        <div className="md:col-span-3 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <dl className="grid grid-cols-2 gap-px bg-border mt-12 border border-border">
            {stats.map((s) => (
              <div key={s.k} className="bg-background p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{s.k}</dt>
                <dd className="font-display font-medium text-foreground text-base">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

function Sets() {
  const { t } = useI18n();
  return (
    <Section id="sets" kicker={t("sets.kicker")} title={t("sets.title")}>
      <p className="max-w-2xl text-muted-foreground mb-12 -mt-8 text-base md:text-lg">{t("sets.subtitle")}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {VIDEOS.map((v) => (
          <div key={v.id} className="group">
            <div className="aspect-video bg-card overflow-hidden border border-border">
              <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" loading="lazy" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-display font-medium text-lg">{v.title}</h3>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">DJ Set</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <a href={YOUTUBE} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 border border-border px-6 py-3.5 text-sm font-medium hover:bg-accent transition-colors">
          <Youtube size={16} /> {t("sets.watchAll")}
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </Section>
  );
}

function Gallery() {
  const { t } = useI18n();
  const imgs = [ASSETS.g1, ASSETS.g2, ASSETS.g3, ASSETS.g4];
  return (
    <Section id="gallery" kicker={t("gallery.kicker")} title={t("gallery.title")}>
      <p className="max-w-2xl text-muted-foreground mb-12 -mt-8 text-base md:text-lg">{t("gallery.subtitle")}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {imgs.map((im, i) => (
          <div key={i} className={`overflow-hidden bg-card ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[3/4]"}`}>
            <img src={im} alt={`Live performance ${i + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700" loading="lazy" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Press() {
  const { t, lang } = useI18n();
  const items = [
    {
      icon: FileText,
      title: t("press.bio.title"),
      desc: t("press.bio.desc"),
      meta: "PDF",
      href: lang === "es" ? ASSETS.bioEs : ASSETS.bioEn,
      filename: lang === "es" ? "ALMENDR4C4RLOS-biografia.pdf" : "ALMENDR4C4RLOS-biography.pdf",
    },
    {
      icon: Images,
      title: t("press.photos.title"),
      desc: t("press.photos.desc"),
      meta: "ZIP",
      href: ASSETS.fotosZip,
      filename: "ALMENDR4C4RLOS-fotos.zip",
    },
    {
      icon: Package,
      title: t("press.kit.title"),
      desc: t("press.kit.desc"),
      meta: "ZIP",
      href: ASSETS.kitZip,
      filename: "ALMENDR4C4RLOS-press-kit.zip",
    },
  ];
  return (
    <Section id="press" kicker={t("press.kicker")} title={t("press.title")}>
      <p className="max-w-2xl text-muted-foreground mb-12 -mt-8 text-base md:text-lg">{t("press.subtitle")}</p>
      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <a key={it.title} href={it.href} download={it.filename} className="group bg-background hover:bg-card transition-colors p-6 md:p-8 flex flex-col justify-between min-h-[240px]">
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 flex items-center justify-center border border-border"><Icon size={18} /></div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{it.meta}</span>
              </div>
              <div className="mt-10">
                <h3 className="font-display font-medium text-xl mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{it.desc}</p>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground">
                  <Download size={13} />
                  {t("press.download")}
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}

function Booking() {
  const { t } = useI18n();
  const channels = [
    { icon: Mail, label: t("booking.email"), value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: () => <span className="font-mono text-xs font-bold">WA</span>, label: t("booking.whatsapp"), value: WHATSAPP_DISPLAY, href: WHATSAPP_LINK },
    { icon: Instagram, label: t("booking.instagram"), value: "@almendr4c4rlos", href: INSTAGRAM },
    { icon: Youtube, label: t("booking.youtube"), value: "@almendr4c4rlos", href: YOUTUBE },
  ];
  return (
    <section id="booking" className="border-t border-border bg-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-36">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">{t("booking.kicker")}</div>
        <h2 className="font-display font-bold text-4xl md:text-7xl tracking-tight mb-8 max-w-4xl text-balance">{t("booking.title")}</h2>
        <p className="max-w-2xl text-muted-foreground text-base md:text-lg mb-16">{t("booking.subtitle")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {channels.map((c) => {
            const Icon = c.icon as React.ComponentType<{ size?: number }>;
            return (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group bg-card hover:bg-background transition-colors p-6 flex flex-col justify-between min-h-[180px]">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 flex items-center justify-center border border-border"><Icon size={16} /></div>
                  <ArrowUpRight size={16} className="text-muted-foreground transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{c.label}</div>
                  <div className="font-display font-medium text-sm md:text-base break-all">{c.value}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <div className="font-display font-bold text-sm">ALMENDR4C4RLOS</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t("footer.role")}</div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} ALMENDR4C4RLOS · {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

function Site() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Sets />
      <Gallery />
      <Press />
      <Booking />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Site />
    </I18nProvider>
  );
}
