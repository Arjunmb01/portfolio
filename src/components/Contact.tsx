import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "c29d00c3-f661-460d-8528-09559c3f9a72");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        toast({ title: "Message sent!", description: "I will get back to you soon." });
        (event.target as HTMLFormElement).reset();
      } else {
        toast({ title: "Something went wrong", description: data.message, variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Could not send. Please try again.", variant: "destructive" });
    } finally { setIsSubmitting(false); }
  };

  const links = [
    { icon: Mail, label: "Email", value: "arjunmb1176@gmail.com", href: "mailto:arjunmb1176@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/arjun-mb", href: "https://www.linkedin.com/in/arjun-mb/" },
    { icon: Github, label: "GitHub", value: "github.com/Arjunmb01", href: "https://github.com/Arjunmb01" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)" }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="label justify-center">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s build <span className="gradient-text">something great</span>
          </h2>
          <p className="text-white/40 text-base leading-relaxed">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 space-y-4">
            {links.map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass glass-hover gradient-border rounded-xl group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center shrink-0 group-hover:from-violet-500/30 group-hover:to-pink-500/30 transition-all">
                  <item.icon className="w-4 h-4 text-violet-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">{item.label}</p>
                  <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors truncate">{item.value}</p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-violet-400 transition-colors shrink-0" />
              </a>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-3">
            <div className="glass gradient-border rounded-2xl p-7">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-widest text-white/30">Name</label>
                    <Input name="name" placeholder="Your name" required
                      className="h-11 bg-white/[0.04] border-white/[0.08] focus:border-violet-500/40 rounded-xl text-sm placeholder:text-white/20 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-widest text-white/30">Email</label>
                    <Input name="email" type="email" placeholder="you@email.com" required
                      className="h-11 bg-white/[0.04] border-white/[0.08] focus:border-violet-500/40 rounded-xl text-sm placeholder:text-white/20 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-white/30">Message</label>
                  <Textarea name="message" placeholder="Tell me about your project..." required
                    className="min-h-[120px] bg-white/[0.04] border-white/[0.08] focus:border-violet-500/40 rounded-xl text-sm placeholder:text-white/20 text-white resize-none" />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full h-11 flex items-center justify-center gap-2 text-sm font-semibold text-white btn-gradient rounded-xl disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
