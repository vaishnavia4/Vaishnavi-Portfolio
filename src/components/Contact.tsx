import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something reliable."
      description="The fastest way to reach me is email or LinkedIn — I usually reply within a day."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.a
          href={`mailto:${profile.email}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass glass-hover group relative flex items-center justify-between overflow-hidden p-8"
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-400">
              Email me
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
              {profile.email}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              For roles, collaborations, or a coffee chat.
            </p>
          </div>
          <span className="ml-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition group-hover:border-accent-400/60 group-hover:bg-accent-500/10">
            <ArrowRight className="h-5 w-5" />
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-rows-3 gap-4"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover flex items-center gap-4 p-5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
              <Linkedin className="h-5 w-5 text-accent-400" />
            </span>
            <div>
              <p className="text-sm font-medium text-white">LinkedIn</p>
              <p className="text-xs text-slate-400">linkedin.com/in/vaishnavia24</p>
            </div>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="glass glass-hover flex items-center gap-4 p-5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
              <Mail className="h-5 w-5 text-accent-400" />
            </span>
            <div>
              <p className="text-sm font-medium text-white">Email</p>
              <p className="text-xs text-slate-400">{profile.email}</p>
            </div>
          </a>
          <div className="glass flex items-center gap-4 p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
              <MapPin className="h-5 w-5 text-accent-400" />
            </span>
            <div>
              <p className="text-sm font-medium text-white">Based in</p>
              <p className="text-xs text-slate-400">{profile.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
