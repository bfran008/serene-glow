import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Vos produits sont-ils 100% naturels ?",
    answer: "Oui, tous nos produits sont formulés à partir d'ingrédients naturels et biologiques certifiés. Nous n'utilisons aucun ingrédient synthétique, paraben ou sulfate.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "La livraison est offerte dès 50€ d'achat. Comptez 2 à 4 jours ouvrés en France métropolitaine. Nous livrons également en Europe sous 5 à 7 jours.",
  },
  {
    question: "Comment choisir mon rituel ?",
    answer: "Chaque rituel correspond à un besoin spécifique : Pureté pour le nettoyage et l'éclat, Énergie pour la vitalité quotidienne, et Sommeil pour un repos réparateur. N'hésitez pas à nous contacter pour un conseil personnalisé.",
  },
  {
    question: "Proposez-vous des coffrets cadeaux ?",
    answer: "Absolument. Nos coffrets sont emballés dans un écrin premium réutilisable. Vous pouvez ajouter un message personnalisé lors de la commande.",
  },
];

const FAQ = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Questions fréquentes
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-light">
            Besoin d'<span className="italic">aide</span> ?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-8 border-none"
              >
                <AccordionTrigger className="font-display text-xl font-light py-6 hover:no-underline hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-body font-light text-sand-muted leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
