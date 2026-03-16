import { motion } from "framer-motion";
import { useState } from "react";
import { Moon, Sparkles, Zap, Leaf } from "lucide-react";
import productOil from "@/assets/product-oil.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productCandle from "@/assets/product-candle.jpg";
import productBalm from "@/assets/product-balm.jpg";
import productMist from "@/assets/product-mist.jpg";
import productCream from "@/assets/product-cream.jpg";
import productBathsalt from "@/assets/product-bathsalt.jpg";
import productPillowmist from "@/assets/product-pillowmist.jpg";
import productScrub from "@/assets/product-scrub.jpg";
import productEyecream from "@/assets/product-eyecream.jpg";
import productShoweroil from "@/assets/product-showeroil.jpg";
import productTea from "@/assets/product-tea.jpg";
import productMicellar from "@/assets/product-micellar.jpg";
import productHairoil from "@/assets/product-hairoil.jpg";
import ProductDetailModal from "./ProductDetailModal";

const categories = [
  {
    name: "Sommeil",
    slug: "sommeil",
    icon: Moon,
    subtitle: "Rituels du soir",
    description: "Des soins précieux formulés pour accompagner votre rituel nocturne. Laissez-vous envelopper par des textures fondantes et des parfums apaisants qui préparent au sommeil réparateur.",
    products: [
      {
        name: "Huile Rituelle Nuit",
        category: "Sommeil",
        price: "68 €",
        ingredients: "Lavande, Camomille, Jojoba",
        image: productOil,
        volume: "30 ml",
        description: "Une huile précieuse aux vertus apaisantes, formulée pour accompagner votre rituel du soir. Sa texture soyeuse fond sur la peau et libère un parfum enveloppant de lavande et camomille.",
        details: ["100% naturel", "Fabrication française", "Flacon en verre recyclable"],
      },
      {
        name: "Crème Nuit Réparatrice",
        category: "Sommeil",
        price: "72 €",
        ingredients: "Rétinol végétal, Beurre de Mangue, Peptides",
        image: productCream,
        volume: "50 ml",
        description: "Un soin de nuit riche qui travaille pendant votre sommeil pour régénérer la peau et atténuer les premiers signes de l'âge.",
        details: ["Anti-âge naturel", "Texture fondante", "Pot en verre rechargeable"],
      },
      {
        name: "Sels de Bain Lavande",
        category: "Sommeil",
        price: "32 €",
        ingredients: "Sel de la Mer Morte, Lavande, Magnésium",
        image: productBathsalt,
        volume: "400 g",
        description: "Des sels de bain aux cristaux purs de la Mer Morte, infusés de lavande de Haute-Provence pour un bain profondément relaxant.",
        details: ["Détente musculaire", "Favorise l'endormissement", "6 à 8 bains par pot"],
      },
      {
        name: "Brume d'Oreiller",
        category: "Sommeil",
        price: "28 €",
        ingredients: "Lavande, Néroli, Marjolaine",
        image: productPillowmist,
        volume: "75 ml",
        description: "Vaporisez sur votre oreiller pour créer un cocon de sérénité. Un mélange d'huiles essentielles soigneusement dosé pour favoriser un sommeil réparateur.",
        details: ["100% huiles essentielles", "Environ 200 utilisations", "Formule sans alcool"],
      },
    ],
  },
  {
    name: "Pureté",
    slug: "purete",
    icon: Sparkles,
    subtitle: "Éclat & soin visage",
    description: "Une collection dédiée à la beauté naturelle de votre peau. Des formules concentrées en actifs précieux pour révéler votre éclat intérieur, matin et soir.",
    products: [
      {
        name: "Sérum Éclat Doré",
        category: "Pureté",
        price: "89 €",
        ingredients: "Vitamine C, Or 24k, Acide Hyaluronique",
        image: productSerum,
        volume: "30 ml",
        description: "Un sérum luxueux infusé de particules d'or 24 carats et de vitamine C pure pour un teint lumineux et unifié dès le matin.",
        details: ["Résultats visibles en 14 jours", "Convient aux peaux sensibles", "Sans parfum synthétique"],
      },
      {
        name: "Brume Visage à la Rose",
        category: "Pureté",
        price: "38 €",
        ingredients: "Eau de Rose de Damas, Glycérine, Aloe Vera",
        image: productMist,
        volume: "100 ml",
        description: "Une brume fraîche et délicate à l'eau de rose de Damas pour hydrater et rafraîchir la peau à tout moment de la journée.",
        details: ["Hydratation instantanée", "Fixe le maquillage", "Sans alcool"],
      },
      {
        name: "Gommage Doux Éclat",
        category: "Pureté",
        price: "42 €",
        ingredients: "Poudre de Riz, Enzyme de Papaye, Kaolin",
        image: productScrub,
        volume: "75 ml",
        description: "Un gommage enzymatique ultra-doux qui affine le grain de peau sans l'agresser. Les micro-particules de riz polissent en douceur pour un teint net et lumineux.",
        details: ["Exfoliation douce", "2 à 3 fois par semaine", "Convient aux peaux sensibles"],
      },
      {
        name: "Soin Contour des Yeux",
        category: "Pureté",
        price: "65 €",
        ingredients: "Caféine, Peptides de Soie, Vitamine K",
        image: productEyecream,
        volume: "15 ml",
        description: "Un soin ciblé pour le contour des yeux qui atténue cernes, poches et ridules. Sa texture gel-crème fond instantanément pour un regard reposé et lumineux.",
        details: ["Anti-cernes naturel", "Applicateur en zamac froid", "Résultats dès 7 jours"],
      },
      {
        name: "Eau Micellaire Purifiante",
        category: "Pureté",
        price: "29 €",
        ingredients: "Eau de Bleuet, Micelles douces, Zinc PCA",
        image: productMicellar,
        volume: "200 ml",
        description: "Une eau micellaire douce qui démaquille, nettoie et purifie en un seul geste. Sa formule respecte l'équilibre naturel de la peau.",
        details: ["Sans rinçage", "Yeux sensibles", "Flacon en verre recyclé"],
      },
    ],
  },
  {
    name: "Énergie",
    slug: "energie",
    icon: Zap,
    subtitle: "Vitalité & bien-être",
    description: "Des rituels revitalisants pour le corps et l'esprit. Des textures enveloppantes et des senteurs vivifiantes pour recharger votre énergie au quotidien.",
    products: [
      {
        name: "Bougie Sauge & Cèdre",
        category: "Énergie",
        price: "45 €",
        ingredients: "Cire de Soja, Sauge, Bois de Cèdre",
        image: productCandle,
        volume: "180 g — 45h de combustion",
        description: "Créez une atmosphère ressourçante grâce à cette bougie artisanale aux notes boisées et herbacées. Coulée à la main en Provence.",
        details: ["Cire de soja 100% naturelle", "Mèche en coton", "Pot réutilisable"],
      },
      {
        name: "Baume Corps Velouté",
        category: "Énergie",
        price: "54 €",
        ingredients: "Karité, Amande douce, Vanille",
        image: productBalm,
        volume: "200 ml",
        description: "Un baume onctueux qui nourrit intensément la peau et laisse un voile satiné délicatement parfumé à la vanille de Madagascar.",
        details: ["Hydratation 24h", "Texture non grasse", "Testé dermatologiquement"],
      },
      {
        name: "Huile Douche Dynamisante",
        category: "Énergie",
        price: "36 €",
        ingredients: "Gingembre, Citrus, Huile d'Argan",
        image: productShoweroil,
        volume: "250 ml",
        description: "Une huile de douche qui se transforme en mousse onctueuse au contact de l'eau. Ses notes épicées et agrumes réveillent les sens dès le matin.",
        details: ["Nettoyage sans dessécher", "Parfum longue tenue", "Flacon pompe en verre"],
      },
      {
        name: "Infusion Énergie Sacrée",
        category: "Énergie",
        price: "24 €",
        ingredients: "Maté, Ginseng, Citronnelle, Guarana",
        image: productTea,
        volume: "80 g — environ 30 tasses",
        description: "Un blend d'herbes et de plantes soigneusement sélectionnées pour booster votre énergie naturellement, sans excitant artificiel.",
        details: ["100% bio", "Énergie naturelle sans crash", "Boîte métal réutilisable"],
      },
      {
        name: "Huile Capillaire Soie",
        category: "Énergie",
        price: "48 €",
        ingredients: "Huile de Camélia, Kératine végétale, Ylang-Ylang",
        image: productHairoil,
        volume: "50 ml",
        description: "Une huile sèche qui nourrit, protège et sublime les cheveux. Quelques gouttes suffisent pour une chevelure soyeuse et brillante.",
        details: ["Toucher non gras", "Protection thermique", "Convient à tous types de cheveux"],
      },
    ],
  },
];

const BestSellers = () => {
  const [selectedProduct, setSelectedProduct] = useState<(typeof categories)[0]["products"][0] | null>(null);

  return (
    <section id="collections" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Nos Collections
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light">
            Les plus <span className="italic">convoités</span>
          </h2>
        </motion.div>

        {categories.map((cat, catIndex) => (
          <div key={cat.slug} className={catIndex < categories.length - 1 ? "mb-28" : ""}>
            {/* Category header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4 mb-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <cat.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-body font-semibold tracking-[0.3em] uppercase text-primary mb-1">
                  {cat.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-display font-light mb-2">{cat.name}</h3>
                <p className="text-sand-muted font-body font-light text-sm leading-relaxed max-w-2xl">
                  {cat.description}
                </p>
              </div>
            </motion.div>

            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative overflow-hidden rounded-3xl mb-5 bg-muted aspect-[4/5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                      <p className="text-[10px] font-body tracking-[0.3em] uppercase text-primary mb-3">Ingrédients clés</p>
                      <p className="font-body font-light text-sm text-foreground text-center">{product.ingredients}</p>
                      <button className="mt-6 px-6 py-3 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity">
                        Voir le détail
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
        ))}
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default BestSellers;
