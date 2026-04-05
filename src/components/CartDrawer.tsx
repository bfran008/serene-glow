import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, totalItems, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-background border-border flex flex-col">
        <SheetHeader className="pb-4 border-b border-border">
          <SheetTitle className="font-display text-2xl font-light flex items-center gap-3">
            <ShoppingBag size={20} className="text-primary" />
            Mon Rituel
          </SheetTitle>
          <SheetDescription className="text-sand-muted font-body text-xs tracking-widest uppercase">
            {totalItems} {totalItems > 1 ? "articles" : "article"}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag size={32} className="text-sand-muted" />
            </div>
            <p className="font-display text-xl font-light">Votre rituel est vide</p>
            <p className="text-sand-muted font-body font-light text-sm">Explorez nos collections pour composer votre rituel beauté.</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity"
            >
              Découvrir
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-3 rounded-2xl bg-muted/30"
                  >
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-body tracking-[0.2em] uppercase text-primary">{item.category}</p>
                      <p className="font-display text-sm font-light truncate">{item.name}</p>
                      <p className="font-body text-sm font-semibold mt-1">{item.price}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 border border-border rounded-full px-2 py-1">
                          <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="text-foreground hover:text-primary transition-colors">
                            <Minus size={12} />
                          </button>
                          <span className="font-body text-xs w-5 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="text-foreground hover:text-primary transition-colors">
                            <Plus size={12} />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.name)} className="text-sand-muted hover:text-destructive transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-sand-muted">Sous-total</span>
                <span className="font-display text-xl">{totalPrice.toFixed(2)} €</span>
              </div>
              <p className="text-[10px] font-body text-sand-muted tracking-wider text-center">
                Livraison offerte dès 50€ • Retours gratuits sous 30 jours
              </p>
              <button className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity glow-gold">
                <ShoppingBag size={16} />
                Valider le rituel
              </button>
              <button onClick={clearCart} className="w-full text-center text-xs font-body text-sand-muted hover:text-foreground transition-colors tracking-wider uppercase">
                Vider le panier
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
