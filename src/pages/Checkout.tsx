import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShoppingBag, CreditCard, Truck, MapPin, ChevronRight,
  Minus, Plus, Trash2, ArrowLeft, Check, Package
} from "lucide-react";

const paymentMethods = [
  { id: "card", label: "Carte bancaire", icon: CreditCard, desc: "Visa, Mastercard, CB" },
  { id: "paypal", label: "PayPal", icon: null, desc: "Paiement sécurisé PayPal" },
  { id: "applepay", label: "Apple Pay", icon: null, desc: "Paiement express" },
  { id: "klarna", label: "Klarna", icon: null, desc: "Payer en 3x sans frais" },
];

const relayPoints = [
  { id: 1, name: "Relais Colis — Tabac Le Central", address: "12 Rue de la République, 75003 Paris", distance: "350m" },
  { id: 2, name: "Mondial Relay — Pressing du Marais", address: "45 Rue des Francs-Bourgeois, 75004 Paris", distance: "600m" },
  { id: 3, name: "Point Relais — Librairie Pages", address: "8 Boulevard Beaumarchais, 75011 Paris", distance: "850m" },
  { id: 4, name: "Relais Pickup — Fleuriste Bloom", address: "22 Rue Oberkampf, 75011 Paris", distance: "1,2km" },
  { id: 5, name: "Mondial Relay — Epicerie Bio", address: "67 Rue de Turenne, 75003 Paris", distance: "1,5km" },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();
  const [step, setStep] = useState<"recap" | "shipping">("recap");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [deliveryMode, setDeliveryMode] = useState<"home" | "relay">("home");
  const [selectedRelay, setSelectedRelay] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", zip: "", country: "France",
  });

  const shippingCost = totalPrice >= 50 ? 0 : 4.90;
  const finalTotal = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag size={64} className="text-muted-foreground/30 mx-auto mb-6" />
            <h1 className="font-display text-3xl font-light mb-3">Votre rituel est vide</h1>
            <p className="font-body text-muted-foreground mb-8">Découvrez nos collections pour composer votre routine beauté</p>
            <button onClick={() => navigate("/")} className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity">
              Retour à la boutique
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mb-10 font-body text-sm">
            <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> Boutique
            </button>
            <ChevronRight size={14} className="text-muted-foreground/50" />
            <button onClick={() => setStep("recap")} className={`transition-colors ${step === "recap" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              Récapitulatif
            </button>
            <ChevronRight size={14} className="text-muted-foreground/50" />
            <span className={`transition-colors ${step === "shipping" ? "text-primary" : "text-muted-foreground"}`}>
              Livraison & Paiement
            </span>
          </motion.div>

          {step === "recap" ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                <h1 className="font-display text-3xl font-light mb-6">Mon Rituel <span className="text-primary text-lg">({totalItems})</span></h1>
                {items.map((item) => (
                  <div key={item.name} className="flex gap-4 p-4 rounded-2xl bg-card border border-border/50">
                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-body tracking-[0.2em] uppercase text-primary mb-0.5">{item.category}</p>
                      <p className="font-display text-base font-light truncate">{item.name}</p>
                      <p className="font-body text-sm font-semibold text-foreground mt-1">{item.price}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 border border-border rounded-full px-3 py-1">
                          <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="text-foreground hover:text-primary transition-colors"><Minus size={12} /></button>
                          <span className="font-body text-xs w-5 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="text-foreground hover:text-primary transition-colors"><Plus size={12} /></button>
                        </div>
                        <button onClick={() => removeItem(item.name)} className="text-muted-foreground hover:text-destructive transition-colors"><Trash2 size={14} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary sidebar */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <h3 className="font-display text-lg font-light mb-4">Résumé</h3>
                  <div className="space-y-3 font-body text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Sous-total</span><span>{totalPrice.toFixed(2).replace(".", ",")} €</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Livraison</span><span className={shippingCost === 0 ? "text-secondary" : ""}>{shippingCost === 0 ? "Offerte" : `${shippingCost.toFixed(2).replace(".", ",")} €`}</span></div>
                    <div className="border-t border-border pt-3 flex justify-between font-semibold text-base"><span>Total</span><span>{finalTotal.toFixed(2).replace(".", ",")} €</span></div>
                  </div>
                  {totalPrice < 50 && (
                    <p className="text-[10px] font-body text-primary mt-3">Plus que {(50 - totalPrice).toFixed(2).replace(".", ",")} € pour la livraison offerte !</p>
                  )}
                </div>
                <button onClick={() => setStep("shipping")} className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity glow-gold">
                  Continuer <ChevronRight size={16} />
                </button>
                <button onClick={() => navigate("/")} className="w-full text-center text-xs font-body text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase">
                  Continuer mes achats
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Shipping address */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><MapPin size={16} className="text-primary" /></div>
                    <h2 className="font-display text-xl font-light">Adresse de livraison</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: "firstName", label: "Prénom", placeholder: "Marie" },
                      { key: "lastName", label: "Nom", placeholder: "Dupont" },
                      { key: "email", label: "Email", placeholder: "marie@exemple.fr", full: true },
                      { key: "phone", label: "Téléphone", placeholder: "06 12 34 56 78" },
                      { key: "address", label: "Adresse", placeholder: "12 Rue de la Paix", full: true },
                      { key: "city", label: "Ville", placeholder: "Paris" },
                      { key: "zip", label: "Code postal", placeholder: "75001" },
                    ].map((field) => (
                      <div key={field.key} className={field.full ? "md:col-span-2" : ""}>
                        <label className="block text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-1.5">{field.label}</label>
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Delivery mode */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><Truck size={16} className="text-primary" /></div>
                    <h2 className="font-display text-xl font-light">Mode de livraison</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button onClick={() => setDeliveryMode("home")} className={`p-4 rounded-2xl border text-left transition-all ${deliveryMode === "home" ? "border-primary bg-primary/5" : "border-border bg-card hover:border-muted-foreground/30"}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-body text-sm font-semibold">À domicile</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${deliveryMode === "home" ? "border-primary bg-primary" : "border-muted-foreground/30"}`}>
                          {deliveryMode === "home" && <Check size={12} className="text-primary-foreground" />}
                        </div>
                      </div>
                      <p className="text-xs font-body text-muted-foreground">Livraison en 2-4 jours ouvrés</p>
                      <p className="text-xs font-body text-primary mt-1">{shippingCost === 0 ? "Gratuit" : `${shippingCost.toFixed(2).replace(".", ",")} €`}</p>
                    </button>
                    <button onClick={() => setDeliveryMode("relay")} className={`p-4 rounded-2xl border text-left transition-all ${deliveryMode === "relay" ? "border-primary bg-primary/5" : "border-border bg-card hover:border-muted-foreground/30"}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-body text-sm font-semibold">Point relais</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${deliveryMode === "relay" ? "border-primary bg-primary" : "border-muted-foreground/30"}`}>
                          {deliveryMode === "relay" && <Check size={12} className="text-primary-foreground" />}
                        </div>
                      </div>
                      <p className="text-xs font-body text-muted-foreground">Retrait en 3-5 jours ouvrés</p>
                      <p className="text-xs font-body text-primary mt-1">Gratuit</p>
                    </button>
                  </div>

                  {/* Relay points list */}
                  {deliveryMode === "relay" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-6 space-y-4">
                      {/* Map placeholder */}
                      <div className="w-full h-52 rounded-2xl bg-muted border border-border overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
                          <div className="text-center">
                            <MapPin size={32} className="text-primary mx-auto mb-2" />
                            <p className="font-body text-xs text-muted-foreground">Carte des points relais</p>
                            <p className="font-body text-[10px] text-muted-foreground/60">Paris & Île-de-France</p>
                          </div>
                          {/* Decorative dots for relay points on map */}
                          {[
                            { top: "30%", left: "40%" }, { top: "45%", left: "55%" },
                            { top: "60%", left: "35%" }, { top: "35%", left: "65%" },
                            { top: "55%", left: "50%" },
                          ].map((pos, i) => (
                            <div key={i} className={`absolute w-3 h-3 rounded-full border-2 border-primary cursor-pointer transition-all ${selectedRelay === i + 1 ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/60"}`} style={pos} onClick={() => setSelectedRelay(i + 1)} />
                          ))}
                        </div>
                      </div>

                      {/* Relay list */}
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {relayPoints.map((point) => (
                          <button key={point.id} onClick={() => setSelectedRelay(point.id)} className={`w-full p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${selectedRelay === point.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-muted-foreground/30"}`}>
                            <Package size={16} className={`mt-0.5 flex-shrink-0 ${selectedRelay === point.id ? "text-primary" : "text-muted-foreground"}`} />
                            <div className="flex-1 min-w-0">
                              <p className="font-body text-sm font-medium truncate">{point.name}</p>
                              <p className="font-body text-xs text-muted-foreground truncate">{point.address}</p>
                            </div>
                            <span className="font-body text-[10px] text-primary tracking-wider flex-shrink-0">{point.distance}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </section>

                {/* Payment */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><CreditCard size={16} className="text-primary" /></div>
                    <h2 className="font-display text-xl font-light">Moyen de paiement</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {paymentMethods.map((method) => (
                      <button key={method.id} onClick={() => setSelectedPayment(method.id)} className={`p-4 rounded-2xl border text-left transition-all ${selectedPayment === method.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-muted-foreground/30"}`}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-body text-sm font-semibold">{method.label}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === method.id ? "border-primary bg-primary" : "border-muted-foreground/30"}`}>
                            {selectedPayment === method.id && <Check size={12} className="text-primary-foreground" />}
                          </div>
                        </div>
                        <p className="text-xs font-body text-muted-foreground">{method.desc}</p>
                      </button>
                    ))}
                  </div>

                  {/* Card fields (shown when card is selected) */}
                  {selectedPayment === "card" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-3">
                      <div>
                        <label className="block text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-1.5">Numéro de carte</label>
                        <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-1.5">Expiration</label>
                          <input type="text" placeholder="MM/AA" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-1.5">CVV</label>
                          <input type="text" placeholder="123" className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </section>
              </div>

              {/* Order summary sticky sidebar */}
              <div className="lg:sticky lg:top-32 space-y-6 h-fit">
                <div className="p-6 rounded-2xl bg-card border border-border/50">
                  <h3 className="font-display text-lg font-light mb-4">Votre commande</h3>
                  <div className="space-y-3 mb-4">
                    {items.map((item) => (
                      <div key={item.name} className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="font-body text-xs truncate">{item.name}</p>
                          <p className="font-body text-[10px] text-muted-foreground">x{item.quantity}</p>
                        </div>
                        <p className="font-body text-xs font-semibold">{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 font-body text-sm border-t border-border pt-3">
                    <div className="flex justify-between"><span className="text-muted-foreground">Sous-total</span><span>{totalPrice.toFixed(2).replace(".", ",")} €</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Livraison</span><span className={shippingCost === 0 ? "text-secondary" : ""}>{shippingCost === 0 ? "Offerte" : `${shippingCost.toFixed(2).replace(".", ",")} €`}</span></div>
                    <div className="border-t border-border pt-2 flex justify-between font-semibold text-base"><span>Total</span><span>{finalTotal.toFixed(2).replace(".", ",")} €</span></div>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity glow-gold">
                  <CreditCard size={16} /> Confirmer la commande
                </button>
                <p className="text-center text-[10px] font-body text-muted-foreground">
                  🔒 Paiement 100% sécurisé • Données chiffrées SSL
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
