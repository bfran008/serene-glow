import { motion } from "framer-motion";
import productOil from "@/assets/product-oil.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productCandle from "@/assets/product-candle.jpg";
import productBalm from "@/assets/product-balm.jpg";

const products = [
  {
    name: "Huile Rituelle Nuit",
    category: "Sommeil",
    price: "68 €",
    ingredients: "Lavande, Camomille, Jojoba",
    image: productOil,
  },
  {
    name: "Sérum Éclat Doré",
    category: "Pureté",
    price: "89 €",
    ingredients: "Vitamine C, Or 24k, Acide Hyaluronique",
    image: productSerum,
  },
  {
    name: "Bougie Sauge & Cèdre",
    category: "Énergie",
    price: "45 €",
    ingredients: "Cire de Soja, Sauge, Bois de Cèdre",
    image: productCandle,
  },
  {
    name: "Baume Corps Velouté",
    category: "Pureté",
    price: "54 €",
    ingredients: "Karité, Amande douce, Vanille",
    image: productBalm,
  },
];

const BestSellers = () => {
  return (
    <section id="collections" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Best-Sellers
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light">
            Les plus <span className="italic">convoités</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-5 bg-muted aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                  <p className="text-[10px] font-body tracking-[0.3em] uppercase text-primary mb-3">Ingrédients clés</p>
                  <p className="font-body font-light text-sm text-foreground text-center">{product.ingredients}</p>
                  <button className="mt-6 px-6 py-3 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity">
                    Ajouter au rituel
                  </button>
                </div>
              </div>
              <div className="px-1">
                <p className="text-[10px] font-body tracking-[0.2em] uppercase text-primary mb-1">{product.category}</p>
                <h3 className="font-display text-xl font-light mb-1">{product.name}</h3>
                <p className="font-body text-sm text-sand-muted">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
