import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

interface Product {
  name: string;
  category: string;
  price: string;
  ingredients: string;
  image: string;
  description?: string;
  volume?: string;
  details?: string[];
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Details */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="text-[10px] font-body tracking-[0.3em] uppercase text-primary mb-2">
                  {product.category}
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-light mb-2">
                  {product.name}
                </h2>
                {product.volume && (
                  <p className="text-xs font-body text-sand-muted mb-4">{product.volume}</p>
                )}
                <p className="text-2xl font-body font-semibold text-foreground mb-6">
                  {product.price}
                </p>

                {product.description && (
                  <p className="text-sand-muted font-body font-light text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                )}

                {/* Ingredients */}
                <div className="mb-6">
                  <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2">
                    Ingrédients clés
                  </p>
                  <p className="font-body font-light text-sm text-sand-muted">
                    {product.ingredients}
                  </p>
                </div>

                {/* Details list */}
                {product.details && product.details.length > 0 && (
                  <div className="mb-8">
                    <ul className="space-y-2">
                      {product.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-body font-light text-sand-muted">
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-body tracking-widest uppercase text-sand-muted">Quantité</span>
                  <div className="flex items-center gap-3 border border-border rounded-full px-3 py-1.5">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-body text-sm w-6 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => { addToCart(product, quantity); onClose(); setQuantity(1); }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity glow-gold"
                >
                  <ShoppingBag size={16} />
                  Ajouter au rituel
                </button>

                <p className="text-center text-[10px] font-body text-sand-muted mt-3 tracking-wider">
                  Livraison offerte dès 50€ • Retours gratuits sous 30 jours
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
