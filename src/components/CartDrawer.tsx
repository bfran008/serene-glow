import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalItems, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[201] w-full max-w-md bg-card border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-primary" />
                <h2 className="font-display text-xl font-light">Mon Rituel</h2>
                <span className="px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-body font-semibold rounded-full">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:text-primary transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} className="text-muted-foreground/30 mb-4" />
                  <p className="font-display text-lg text-foreground mb-1">Votre rituel est vide</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Découvrez nos soins et composez votre routine beauté
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="flex gap-4 p-3 rounded-2xl bg-muted/30 border border-border/50"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-body tracking-[0.2em] uppercase text-primary mb-0.5">
                        {item.category}
                      </p>
                      <p className="font-display text-sm font-light truncate">{item.name}</p>
                      <p className="font-body text-sm font-semibold text-foreground mt-1">{item.price}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 border border-border rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-body text-xs w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.name)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-muted-foreground">Sous-total</span>
                  <span className="font-body text-lg font-semibold text-foreground">
                    {totalPrice.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
                <p className="text-[10px] font-body text-muted-foreground text-center">
                  Livraison offerte dès 50€ • Retours gratuits sous 30 jours
                </p>
                <button className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity glow-gold">
                  <ShoppingBag size={16} />
                  Valider le rituel
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs font-body text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
                >
                  Vider le panier
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
