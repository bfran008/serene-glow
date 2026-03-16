import PageLayout from "@/components/PageLayout";
import { Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageLayout>
      <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary mb-4">Écrivez-nous</p>
      <h1 className="text-4xl md:text-5xl font-display font-light mb-6">Contact</h1>
      <p className="text-sand-muted font-body font-light text-base leading-relaxed mb-12">
        Une question, une suggestion ou simplement envie de partager votre rituel ? Notre équipe vous répond sous 24h.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Mail, label: "Email", value: "hello@airabeauty.com" },
          { icon: MapPin, label: "Adresse", value: "12 Rue de la Paix, 75002 Paris" },
          { icon: Clock, label: "Horaires", value: "Lun-Ven : 9h-18h" },
        ].map((info) => (
          <div key={info.label} className="glass-card p-6 text-center">
            <info.icon size={20} className="text-primary mx-auto mb-3" />
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-1">{info.label}</p>
            <p className="text-sand-muted font-body font-light text-sm">{info.value}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">Nom</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3 bg-muted border border-border rounded-2xl font-body text-sm text-foreground placeholder:text-sand-muted focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <label className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3 bg-muted border border-border rounded-2xl font-body text-sm text-foreground placeholder:text-sand-muted focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="votre@email.com"
              required
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">Sujet</label>
          <input
            type="text"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full px-5 py-3 bg-muted border border-border rounded-2xl font-body text-sm text-foreground placeholder:text-sand-muted focus:outline-none focus:border-primary/50 transition-colors"
            placeholder="Sujet de votre message"
            required
          />
        </div>
        <div>
          <label className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={5}
            className="w-full px-5 py-3 bg-muted border border-border rounded-2xl font-body text-sm text-foreground placeholder:text-sand-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
            placeholder="Votre message..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-8 py-4 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity"
        >
          Envoyer
        </button>
      </form>
    </PageLayout>
  );
};

export default Contact;
