import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";

const navLinks = ["Collections", "Rituels", "À propos"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12"
    >
      <div className="glass-card px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="font-display text-2xl font-semibold tracking-wider text-foreground">
          Airabeauty
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-body font-light tracking-widest uppercase text-sand-muted hover:text-foreground transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="relative text-foreground hover:text-primary transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-body font-semibold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <a
            href="#collections"
            className="hidden md:inline-flex px-5 py-2 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity"
          >
            Découvrir
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card mt-2 p-6 md:hidden max-w-7xl mx-auto"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-body font-light tracking-widest uppercase text-sand-muted hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#collections"
              className="mt-2 px-5 py-3 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-widest uppercase rounded-full text-center"
            >
              Découvrir le Coffret
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
