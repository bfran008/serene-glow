import { motion } from "framer-motion";
import { Sparkles, Zap, Moon } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Pureté",
    description: "Des formules minimalistes aux ingrédients nobles, sans compromis sur la qualité.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Zap,
    title: "Énergie",
    description: "Réveillez votre vitalité avec des soins dynamisants aux actifs naturels puissants.",
    accent: "from-sage/30 to-sage/5",
  },
  {
    icon: Moon,
    title: "Sommeil",
    description: "Rituels apaisants du soir pour un repos profond et réparateur, nuit après nuit.",
    accent: "from-primary/15 to-sage/10",
  },
];

const PillarsSection = () => {
  return (
    <section id="rituels" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Nos Piliers
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light">
            Trois chemins vers <span className="italic">l'harmonie</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-10 hover-lift group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.accent} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <pillar.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-3xl font-display font-light mb-4">{pillar.title}</h3>
              <p className="text-sand-muted font-body font-light leading-relaxed text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
