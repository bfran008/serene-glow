import PageLayout from "@/components/PageLayout";
import { Truck, Clock, MapPin, ShieldCheck } from "lucide-react";

const infos = [
  { icon: Truck, title: "Livraison Standard", desc: "Colissimo sous 3-5 jours ouvrés. Offerte dès 50 € d'achat, sinon 4,90 €." },
  { icon: Clock, title: "Livraison Express", desc: "Chronopost en 24-48h. Disponible pour 9,90 € sur toute la France métropolitaine." },
  { icon: MapPin, title: "Point Relais", desc: "Mondial Relay sous 4-6 jours ouvrés. 3,90 € ou offert dès 50 € d'achat." },
  { icon: ShieldCheck, title: "Suivi & Sécurité", desc: "Chaque commande est suivie et assurée. Vous recevez un email de confirmation avec votre numéro de suivi." },
];

const Livraison = () => (
  <PageLayout>
    <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">Informations</p>
    <h1 className="text-4xl md:text-5xl font-display font-light mb-6">Livraison</h1>
    <p className="text-sand-muted font-body font-light text-base leading-relaxed mb-12">
      Nous apportons le plus grand soin à l'expédition de vos commandes. Chaque produit est emballé dans un écrin recyclable, prêt à être offert ou à sublimer votre rituel.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {infos.map((info) => (
        <div key={info.title} className="glass-card p-8">
          <info.icon size={24} className="text-primary mb-4" />
          <h3 className="font-display text-xl font-light mb-2">{info.title}</h3>
          <p className="text-sand-muted font-body font-light text-sm leading-relaxed">{info.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-12 glass-card p-8">
      <h3 className="font-display text-xl font-light mb-4">Zones de livraison</h3>
      <p className="text-sand-muted font-body font-light text-sm leading-relaxed">
        Nous livrons en France métropolitaine, en Belgique, en Suisse et au Luxembourg. Pour toute autre destination, veuillez nous contacter directement.
      </p>
    </div>
  </PageLayout>
);

export default Livraison;
