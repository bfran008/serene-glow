import { motion } from "framer-motion";
import { Gift, Star, Heart } from "lucide-react";
import { useState } from "react";
import coffretSerenite from "@/assets/coffret-serenite.jpg";
import coffretEclat from "@/assets/coffret-eclat.jpg";
import coffretCocooning from "@/assets/coffret-cocooning.jpg";
import ProductDetailModal from "./ProductDetailModal";

const coffrets = [
  {
    name: "Coffret Sérénité",
    category: "Coffret",
    description: "L'essentiel pour des nuits paisibles. Huile rituelle, bougie apaisante et brume d'oreiller — le trio parfait pour un sommeil réparateur.",
    price: "129 €",
    originalPrice: "157 €",
    image: coffretSerenite,
    icon: Star,
    badge: "Best-seller",
    ingredients: "Lavande, Camomille, Cire de Soja, Néroli",
    volume: "3 produits — Huile 30ml + Bougie 180g + Brume 75ml",
    details: [
      "Économisez 28 € par rapport à l'achat séparé",
      "Emballage cadeau inclus",
      "Livraison offerte",
      "Carte personnalisable incluse",
    ],
  },
  {
    name: "Coffret Éclat Divin",
    category: "Coffret",
    description: "Votre routine visage complète. Sérum doré, crème hydratante et masque éclat pour une peau lumineuse au quotidien.",
    price: "159 €",
    originalPrice: "198 €",
    image: coffretEclat,
    icon: Heart,
    badge: "Nouveau",
    ingredients: "Vitamine C, Or 24k, Acide Hyaluronique, Rétinol végétal",
    volume: "3 produits — Sérum 30ml + Crème 50ml + Masque 75ml",
    details: [
      "Économisez 39 € par rapport à l'achat séparé",
      "Routine complète matin & soir",
      "Résultats visibles en 14 jours",
      "Pochette en lin offerte",
    ],
  },
  {
    name: "Coffret Cocooning",
    category: "Coffret",
    description: "Un moment rien qu'à vous. Bougie, baume corps et sel de bain aux huiles essentielles pour une parenthèse bien-être absolue.",
    price: "109 €",
    originalPrice: "144 €",
    image: coffretCocooning,
    icon: Gift,
    badge: "Idée cadeau",
    ingredients: "Karité, Sauge, Sel de la Mer Morte, Vanille",
    volume: "3 produits — Bougie 180g + Baume 200ml + Sels 400g",
    details: [
      "Économisez 35 € par rapport à l'achat séparé",
      "Le cadeau idéal pour toutes les occasions",
      "Emballage cadeau premium inclus",
      "Parfum signature exclusif",
    ],
  },
];

const CoffretsSection = () => {
  const [selectedCoffret, setSelectedCoffret] = useState<typeof coffrets[0] | null>(null);

  return (
    <section id="coffrets" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Coffrets Exclusifs
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light">
            L'art d'<span className="italic">offrir</span>
          </h2>
          <p className="text-sand-muted font-body font-light text-base mt-4 max-w-xl mx-auto">
            Nos coffrets soigneusement composés pour offrir ou s'offrir une expérience bien-être complète.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coffrets.map((coffret, index) => (
            <motion.div
              key={coffret.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card overflow-hidden hover-lift group cursor-pointer"
              onClick={() => setSelectedCoffret(coffret)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={coffret.image}
                  alt={coffret.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-body font-semibold tracking-widest uppercase rounded-full">
                    {coffret.badge}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <coffret.icon size={16} className="text-primary" />
                  <h3 className="text-2xl font-display font-light">{coffret.name}</h3>
                </div>
                <p className="text-sand-muted font-body font-light text-sm leading-relaxed mb-6">
                  {coffret.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-body font-semibold text-lg text-foreground">{coffret.price}</span>
                    <span className="font-body text-sm text-sand-muted line-through">{coffret.originalPrice}</span>
                  </div>
                  <button className="px-5 py-2.5 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity">
                    Détails
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProductDetailModal
        product={selectedCoffret}
        isOpen={!!selectedCoffret}
        onClose={() => setSelectedCoffret(null)}
      />
    </section>
  );
};

export default CoffretsSection;
