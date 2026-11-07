import { motion } from "framer-motion";
import { Cloud, Cpu, GitBranch, Layers } from "lucide-react";
import { Section } from "./Section";
import { profile, education, languages, honors } from "@/data/portfolio";

const stats = [
  { icon: Cloud, label: "AWS & Azure", sub: "Multi-cloud" },
  { icon: GitBranch, label: "CI/CD", sub: "Pipelines & releases" },
  { icon: Layers, label: "IaC", sub: "Bicep · ARM" },
  { icon: Cpu, label: "Containers", sub: "Virtualization" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Cloud, automated end-to-end."
      description={profile.summary}
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="glass glass-hover p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
              >
                <s.icon className="mb-3 h-5 w-5 text-accent-400" />
                <p className="text-sm font-medium text-white">{s.label}</p>
                <p className="text-xs text-slate-400">{s.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
                Education
              </h3>
              <p className="text-white">{education.school}</p>
              <p className="text-sm text-slate-400">{education.degree}</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
                Honors
              </h3>
              <ul className="space-y-1">
                {honors.map((h) => (
                  <li key={h} className="text-sm text-slate-300">
                    · {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="glass glass-hover p-6 sm:p-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
            Languages
          </h3>
          <ul className="space-y-4">
            {languages.map((l) => (
              <li key={l.name}>
                <div className="flex items-center justify-between">
                  <span className="text-white">{l.name}</span>
                  <span className="text-xs text-slate-400">{l.level}</span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-600"
                    style={{
                      width:
                        l.level === "Native or Bilingual"
                          ? "100%"
                          : l.level === "Full Professional"
                          ? "85%"
                          : "70%",
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
