import PageLayout from "@/components/PageLayout";
import { Leaf, Droplets, Sun, Heart } from "lucide-react";

const ingredients = [
  { icon: Leaf, name: "Lavande de Haute-Provence", origin: "France", desc: "Récoltée à la main dans les champs de Haute-Provence, notre lavande apaise l'esprit et prépare au sommeil. Certifiée bio." },
  { icon: Sun, name: "Or 24 Carats", origin: "Éthique", desc: "Des micro-particules d'or pur qui illuminent le teint et stimulent la régénération cellulaire. Sourcing éthique certifié." },
  { icon: Droplets, name: "Eau de Rose de Damas", origin: "Bulgarie", desc: "Distillée à partir de roses cueillies à l'aube dans la Vallée des Roses. Hydratante et tonifiante pour tous les types de peau." },
  { icon: Heart, name: "Beurre de Karité", origin: "Burkina Faso", desc: "Issu du commerce équitable, notre karité est pressé à froid pour conserver toutes ses propriétés nourrissantes et réparatrices." },
  { icon: Leaf, name: "Huile de Jojoba", origin: "Argentine", desc: "Une huile sèche biomimétique qui régule le sébum naturellement. Sa composition proche du film hydrolipidique de la peau en fait un allié universel." },
  { icon: Droplets, name: "Acide Hyaluronique", origin: "Biotechnologie", desc: "De poids moléculaire variable pour une hydratation à tous les niveaux de l'épiderme. D'origine végétale, obtenu par bio-fermentation." },
  { icon: Sun, name: "Vitamine C Pure", origin: "Naturelle", desc: "Un antioxydant puissant qui unifie le teint, booste la production de collagène et protège des agressions environnementales." },
  { icon: Heart, name: "Cire de Soja", origin: "France", desc: "100% naturelle et biodégradable, notre cire de soja est cultivée en France sans OGM pour nos bougies artisanales." },
];

const Ingredients = () => (
  <PageLayout>
    <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">Transparence</p>
    <h1 className="text-4xl md:text-5xl font-display font-light mb-6">Nos Ingrédients</h1>
    <p className="text-sand-muted font-body font-light text-base leading-relaxed mb-4">
      Chez Airabeauty, chaque ingrédient est sélectionné pour sa pureté, son efficacité et son origine éthique. Nous croyons que la beauté commence par la transparence.
    </p>
    <p className="text-sand-muted font-body font-light text-base leading-relaxed mb-12">
      <strong className="text-foreground">Notre engagement :</strong> 0% parabènes, 0% silicones, 0% phtalates, 0% tests sur les animaux.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ingredients.map((ing) => (
        <div key={ing.name} className="glass-card p-8">
          <div className="flex items-center gap-3 mb-3">
            <ing.icon size={20} className="text-primary" />
            <div>
              <h3 className="font-display text-lg font-light">{ing.name}</h3>
              <p className="text-[10px] font-body tracking-[0.2em] uppercase text-primary">{ing.origin}</p>
            </div>
          </div>
          <p className="text-sand-muted font-body font-light text-sm leading-relaxed">{ing.desc}</p>
        </div>
      ))}
    </div>
  </PageLayout>
);

export default Ingredients;
