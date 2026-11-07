import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Five plus years, four teams, one focus: cloud."
      description="A timeline of the engineering teams I've built and shipped with."
    >
      <ol className="relative space-y-8 border-l border-white/10 pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <motion.li
            key={`${job.company}-${i}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-ink-900 sm:-left-[45px]">
              <Briefcase className="h-3 w-3 text-accent-400" />
            </span>
            <div className="glass glass-hover p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-white">
                  {job.role}
                  <span className="ml-2 font-normal text-slate-400">
                    @ {job.company}
                  </span>
                </h3>
                <span className="text-xs font-medium uppercase tracking-wider text-accent-400">
                  {job.period}
                </span>
              </div>
              {job.location && (
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="h-3 w-3" />
                  {job.location}
                </p>
              )}
              <ul className="mt-4 space-y-2">
                {job.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm leading-relaxed text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
