import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Focus areas I've shipped against."
      description="The recurring problem spaces from my work across Mortgage365, MetLife, TCS, and Fusion Software Technologies."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="glass glass-hover group relative flex flex-col overflow-hidden p-6"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/10 blur-2xl transition group-hover:bg-accent-500/20" />
            <div className="mb-4 flex items-start justify-between">
              <span className="chip">{p.domain}</span>
              <ArrowUpRight className="h-4 w-4 translate-y-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:text-accent-400" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
