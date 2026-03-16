import PageLayout from "@/components/PageLayout";
import { RotateCcw, PackageCheck, MessageCircle } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "1. Contactez-nous", desc: "Envoyez-nous un email à retours@airabeauty.com avec votre numéro de commande et le motif du retour." },
  { icon: PackageCheck, title: "2. Préparez votre colis", desc: "Replacez le produit dans son emballage d'origine. Nous vous envoyons une étiquette de retour prépayée." },
  { icon: RotateCcw, title: "3. Remboursement", desc: "Dès réception et vérification, votre remboursement est effectué sous 5-7 jours ouvrés sur votre moyen de paiement initial." },
];

const Retours = () => (
  <PageLayout>
    <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">Politique</p>
    <h1 className="text-4xl md:text-5xl font-display font-light mb-6">Retours & Échanges</h1>
    <p className="text-sand-muted font-body font-light text-base leading-relaxed mb-12">
      Votre satisfaction est notre priorité. Si un produit ne vous convient pas, vous disposez de <strong className="text-foreground">30 jours</strong> pour nous le retourner gratuitement.
    </p>
    <div className="space-y-6 mb-12">
      {steps.map((step) => (
        <div key={step.title} className="glass-card p-8 flex items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <step.icon size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-display text-xl font-light mb-2">{step.title}</h3>
            <p className="text-sand-muted font-body font-light text-sm leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="glass-card p-8">
      <h3 className="font-display text-xl font-light mb-4">Conditions</h3>
      <ul className="space-y-3">
        {["Les produits doivent être non ouverts et dans leur emballage d'origine", "Les bougies entamées ne peuvent être retournées pour des raisons d'hygiène", "Les coffrets personnalisés ne sont ni repris ni échangés", "Les frais de retour sont pris en charge par Airabeauty"].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm font-body font-light text-sand-muted">
            <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </PageLayout>
);

export default Retours;
