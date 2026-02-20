import { motion } from "framer-motion";
import { useState } from "react";

const footerLinks = {
  boutique: ["Collections", "Best-Sellers", "Coffrets", "Cartes Cadeaux"],
  aide: ["Livraison", "Retours", "FAQ", "Contact"],
  marque: ["Notre Histoire", "Ingrédients", "Engagements", "Presse"],
};

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative border-t border-border/50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-3xl font-light mb-2">Rejoignez le rituel</h3>
              <p className="font-body font-light text-sm text-sand-muted mb-6">
                Recevez en avant-première nos nouveautés et conseils bien-être.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 bg-muted border border-border rounded-full font-body text-sm text-foreground placeholder:text-sand-muted focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity"
                >
                  S'inscrire
                </button>
              </form>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body font-light text-sm text-sand-muted hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 py-8 border-t border-b border-border/30">
          {["Livraison offerte dès 50€", "Paiement sécurisé", "Ingrédients naturels", "Satisfait ou remboursé"].map(
            (item) => (
              <span
                key={item}
                className="font-body text-xs tracking-widest uppercase text-sand-muted"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl tracking-wider text-foreground">Airabeauty</span>
          <p className="font-body text-xs text-sand-muted">
            © 2026 Airabeauty. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
