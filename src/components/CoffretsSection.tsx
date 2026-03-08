import { motion } from "framer-motion";
import { Gift, Star, Heart } from "lucide-react";
import productOil from "@/assets/product-oil.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productCandle from "@/assets/product-candle.jpg";

const coffrets = [
  {
    name: "Coffret Sérénité",
    description: "L'essentiel pour des nuits paisibles. Huile rituelle, bougie apaisante et brume d'oreiller.",
    price: "129 €",
    originalPrice: "157 €",
    image: productOil,
    icon: Star,
    badge: "Best-seller",
  },
  {
    name: "Coffret Éclat Divin",
    description: "Votre routine visage complète. Sérum doré, crème hydratante et masque éclat.",
    price: "159 €",
    originalPrice: "198 €",
    image: productSerum,
    icon: Heart,
    badge: "Nouveau",
  },
  {
    name: "Coffret Cocooning",
    description: "Un moment rien qu'à vous. Bougie, baume corps et sel de bain aux huiles essentielles.",
    price: "109 €",
    originalPrice: "144 €",
    image: productCandle,
    icon: Gift,
    badge: "Idée cadeau",
  },
];

const CoffretsSection = () => {
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
                    Ajouter
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffretsSection;
