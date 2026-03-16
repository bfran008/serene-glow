import PageLayout from "@/components/PageLayout";
import { Recycle, Heart, TreePine, Globe } from "lucide-react";

const engagements = [
  {
    icon: Recycle,
    title: "Emballages Responsables",
    desc: "100% de nos emballages sont recyclables ou réutilisables. Nos flacons en verre sont consignés et nos coffrets sont en carton certifié FSC. D'ici 2027, nous visons le zéro plastique.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free & Vegan",
    desc: "Aucun de nos produits n'est testé sur les animaux. Nous sommes certifiés Leaping Bunny et PETA. La majorité de notre gamme est vegan, et nous travaillons à convertir l'intégralité.",
  },
  {
    icon: TreePine,
    title: "Neutralité Carbone",
    desc: "Nous compensons l'intégralité de nos émissions CO₂ via des projets de reforestation en France et à Madagascar. Notre atelier fonctionne à 100% aux énergies renouvelables.",
  },
  {
    icon: Globe,
    title: "Commerce Équitable",
    desc: "Nos matières premières sont sourcées en partenariat direct avec des coopératives locales. Nous garantissons des prix justes et contribuons au développement des communautés productrices.",
  },
];

const Engagements = () => (
  <PageLayout>
    <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">Nos Valeurs</p>
    <h1 className="text-4xl md:text-5xl font-display font-light mb-6">Engagements</h1>
    <p className="text-sand-muted font-body font-light text-base leading-relaxed mb-12">
      La beauté ne peut être vraie que si elle respecte le vivant. Chaque décision chez Airabeauty est guidée par notre responsabilité envers la planète et les communautés qui nous entourent.
    </p>
    <div className="space-y-6">
      {engagements.map((eng) => (
        <div key={eng.title} className="glass-card p-8 flex items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <eng.icon size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-light mb-3">{eng.title}</h3>
            <p className="text-sand-muted font-body font-light text-sm leading-relaxed">{eng.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </PageLayout>
);

export default Engagements;
