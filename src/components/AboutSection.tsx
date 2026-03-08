import { motion } from "framer-motion";
import { Leaf, Award, Recycle, Heart } from "lucide-react";
import logo from "@/assets/logo-airabeauty.png";

const values = [
  {
    icon: Leaf,
    title: "100% Naturel",
    description: "Chaque ingrédient est sourcé avec soin, privilégiant le bio et les circuits courts.",
  },
  {
    icon: Award,
    title: "Savoir-faire français",
    description: "Formulés et fabriqués en France, dans notre atelier en Provence.",
  },
  {
    icon: Recycle,
    title: "Éco-responsable",
    description: "Emballages recyclables, recharges disponibles, zéro test sur les animaux.",
  },
  {
    icon: Heart,
    title: "Bien-être holistique",
    description: "Des soins qui prennent soin du corps et de l'esprit, pour un rituel complet.",
  },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">
              Notre Histoire
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6 leading-tight">
              Née d'une passion pour <span className="italic">l'essentiel</span>
            </h2>
            <div className="space-y-4 text-sand-muted font-body font-light text-sm leading-relaxed">
              <p>
                Airabeauty est née de la conviction que le bien-être ne devrait jamais être un luxe inaccessible. 
                Fondée en 2023, notre maison puise son inspiration dans les rituels ancestraux de beauté, 
                réinterprétés avec l'exigence du luxe contemporain.
              </p>
              <p>
                Chaque formule est le fruit de mois de recherche, alliant des actifs naturels puissants 
                à des textures sensorielles uniques. Nous croyons que prendre soin de soi est un art — 
                un moment sacré dans le tumulte du quotidien.
              </p>
              <p>
                Depuis notre atelier en Provence, nous travaillons main dans la main avec des producteurs 
                locaux pour sélectionner les meilleurs ingrédients : lavande de Haute-Provence, huile d'olive 
                de la Vallée des Baux, cire d'abeille de nos ruchers partenaires.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <img
                src={logo}
                alt="Airabeauty"
                className="w-64 h-64 opacity-20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display text-5xl font-light text-foreground">Airabeauty</span>
                  <p className="text-xs font-body tracking-[0.4em] uppercase text-primary mt-2">
                    L'art du rituel
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Nos Engagements
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-light">
            Ce en quoi nous <span className="italic">croyons</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 text-center hover-lift"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <value.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-light mb-3">{value.title}</h3>
              <p className="text-sand-muted font-body font-light text-xs leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
