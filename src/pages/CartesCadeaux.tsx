import PageLayout from "@/components/PageLayout";
import { Gift } from "lucide-react";
import { useState } from "react";

const amounts = [30, 50, 75, 100, 150, 200];

const CartesCadeaux = () => {
  const [selected, setSelected] = useState(75);

  return (
    <PageLayout>
      <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">Offrir</p>
      <h1 className="text-4xl md:text-5xl font-display font-light mb-6">Cartes Cadeaux</h1>
      <p className="text-sand-muted font-body font-light text-base leading-relaxed mb-12">
        Offrez un moment de bien-être avec une carte cadeau Airabeauty. Le destinataire choisira lui-même son rituel parmi toutes nos collections.
      </p>

      <div className="glass-card p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Gift size={24} className="text-primary" />
          <h3 className="font-display text-2xl font-light">Choisissez un montant</h3>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelected(amount)}
              className={`py-4 rounded-2xl font-body text-sm font-semibold transition-all ${
                selected === amount
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-sand-muted hover:text-foreground border border-border"
              }`}
            >
              {amount} €
            </button>
          ))}
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">Message personnalisé</label>
            <textarea
              rows={3}
              className="w-full px-5 py-3 bg-muted border border-border rounded-2xl font-body text-sm text-foreground placeholder:text-sand-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="Un petit mot pour accompagner votre cadeau..."
            />
          </div>
          <button className="w-full px-8 py-4 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity">
            Offrir {selected} €
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Envoi immédiat", desc: "La carte cadeau est envoyée par email directement au destinataire." },
          { title: "Valable 1 an", desc: "Utilisable sur l'ensemble de nos collections et coffrets pendant 12 mois." },
          { title: "Cumulable", desc: "Combinable avec d'autres cartes cadeaux et nos offres en cours." },
        ].map((info) => (
          <div key={info.title} className="glass-card p-6 text-center">
            <h4 className="font-display text-lg font-light mb-2">{info.title}</h4>
            <p className="text-sand-muted font-body font-light text-sm">{info.desc}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default CartesCadeaux;
