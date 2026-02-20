import { motion } from "framer-motion";
import heroImage from "@/assets/hero-product.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-sage/10 blur-[80px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 lg:pt-0">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-6">
            Rituel bien-être premium
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[0.95] mb-8">
            L'art du
            <br />
            <span className="text-gradient-gold italic font-light">rituel</span>,
            <br />
            chez vous.
          </h1>
          <p className="text-sand-muted font-body font-light text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
            Des soins d'exception, formulés avec les plus nobles ingrédients naturels pour sublimer chaque instant de votre quotidien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#collections"
              className="px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity glow-gold"
            >
              Découvrir le Coffret
            </a>
            <a
              href="#rituels"
              className="px-8 py-4 border border-foreground/20 text-foreground font-body text-sm font-light tracking-widest uppercase rounded-full hover:border-foreground/40 transition-colors"
            >
              Nos Rituels
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative animate-float">
            <img
              src={heroImage}
              alt="Huile essentielle premium Airabeauty"
              className="w-full max-w-lg rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-body tracking-[0.3em] uppercase text-sand-muted">Défiler</span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
