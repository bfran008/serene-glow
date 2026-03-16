import PageLayout from "@/components/PageLayout";
import { ExternalLink } from "lucide-react";

const pressItems = [
  { source: "Vogue France", date: "Février 2026", title: "Airabeauty, la marque qui réinvente le rituel beauté", quote: "Une approche holistique de la beauté qui marie luxe et naturalité avec une élégance rare." },
  { source: "Elle", date: "Janvier 2026", title: "Les 10 marques clean beauty à suivre en 2026", quote: "Airabeauty se distingue par ses formules minimalistes et ses packagings raffinés qui élèvent le geste beauté." },
  { source: "Marie Claire", date: "Décembre 2025", title: "Coffrets de Noël : notre sélection premium", quote: "Le Coffret Sérénité d'Airabeauty est sans conteste notre coup de cœur de cette saison." },
  { source: "Le Figaro Madame", date: "Novembre 2025", title: "Beauté engagée : ces marques qui changent la donne", quote: "Avec ses engagements forts en matière de développement durable, Airabeauty prouve que luxe et éthique sont compatibles." },
];

const Presse = () => (
  <PageLayout>
    <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">Médias</p>
    <h1 className="text-4xl md:text-5xl font-display font-light mb-6">Presse</h1>
    <p className="text-sand-muted font-body font-light text-base leading-relaxed mb-12">
      Ils parlent de nous. Retrouvez les dernières parutions et mentions d'Airabeauty dans les médias.
    </p>
    <div className="space-y-6 mb-12">
      {pressItems.map((item) => (
        <div key={item.title} className="glass-card p-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="font-body font-semibold text-sm text-foreground">{item.source}</span>
              <span className="text-[10px] font-body tracking-[0.2em] uppercase text-sand-muted">{item.date}</span>
            </div>
            <ExternalLink size={14} className="text-primary" />
          </div>
          <h3 className="font-display text-xl font-light mb-3">{item.title}</h3>
          <p className="text-sand-muted font-body font-light text-sm leading-relaxed italic">"{item.quote}"</p>
        </div>
      ))}
    </div>
    <div className="glass-card p-8 text-center">
      <h3 className="font-display text-xl font-light mb-3">Contact Presse</h3>
      <p className="text-sand-muted font-body font-light text-sm mb-2">Pour toute demande presse, interview ou partenariat :</p>
      <p className="text-primary font-body font-semibold text-sm">presse@airabeauty.com</p>
    </div>
  </PageLayout>
);

export default Presse;
