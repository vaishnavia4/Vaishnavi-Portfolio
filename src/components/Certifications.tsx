import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous learning, certified."
      description="Coursework and certifications I've completed across programming, data, and cloud topics."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="glass glass-hover flex items-start gap-4 p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-accent-500/20 to-accent-600/5">
              <Award className="h-5 w-5 text-accent-400" />
            </div>
            <div>
              <p className="text-sm font-medium leading-snug text-white">
                {cert}
              </p>
              <p className="mt-1 text-xs text-slate-500">Certified</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
