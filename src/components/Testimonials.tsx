import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    text: "Un rituel du soir qui a transformé mes nuits. La qualité des ingrédients se ressent dès la première utilisation.",
    author: "Camille L.",
    role: "Cliente depuis 2024",
  },
  {
    text: "L'huile rituelle est devenue indispensable. Mon moment de sérénité quotidien, un vrai luxe accessible.",
    author: "Sophie M.",
    role: "Abonnée Coffret",
  },
  {
    text: "Enfin une marque qui allie élégance et naturalité. Les bougies créent une atmosphère magique à la maison.",
    author: "Léa D.",
    role: "Cliente fidèle",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Témoignages
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light mb-16">
            Ce qu'elles en <span className="italic">disent</span>
          </h2>
        </motion.div>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 md:p-16"
        >
          <p className="font-display text-2xl md:text-3xl font-light italic leading-relaxed mb-8 text-foreground">
            "{testimonials[current].text}"
          </p>
          <p className="font-body font-semibold text-sm tracking-widest uppercase text-primary">
            {testimonials[current].author}
          </p>
          <p className="font-body font-light text-xs text-sand-muted mt-1">
            {testimonials[current].role}
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-primary w-8" : "bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
