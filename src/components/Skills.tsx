import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A practical toolkit across the cloud stack."
      description="From declarative infrastructure to release pipelines and runtime platforms — the tools and disciplines I lean on day to day."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="glass glass-hover group p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">
                {group.title}
              </h3>
              <span className="text-xs text-slate-500">{group.items.length}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300 transition group-hover:border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
