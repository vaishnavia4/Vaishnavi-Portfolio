import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Linkedin, Github } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { profile, topSkills } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Sparkles backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.5}
          maxSize={1.2}
          particleDensity={80}
          className="h-full w-full"
          particleColor="#9bb4ff"
          speed={1}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_30%,transparent_0%,rgba(5,6,10,0.65)_70%,#05060a_100%)]" />
      </div>

      <div className="container-x grid grid-cols-1 items-center gap-12 py-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="chip mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to new opportunities
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>.
            <br />
            <span className="text-slate-200">
              {profile.role}{" "}
              <span className="text-slate-400">@ {profile.company}</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {topSkills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-950 transition hover:bg-slate-200"
            >
              View work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition hover:border-accent-400/60 hover:bg-accent-500/10"
            >
              Contact
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-400" />
              {profile.location}
            </span>
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              href={`mailto:${profile.email}`}
            >
              <Mail className="h-4 w-4 text-accent-400" />
              {profile.email}
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4 text-accent-400" />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4 text-accent-400" />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Profile portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(91,124,255,0.35),transparent_30%,rgba(124,156,255,0.25)_60%,transparent_90%)] blur-2xl" />
          <div className="glass overflow-hidden p-2 sm:p-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-800">
              <img
                src={profile.photo}
                alt={`${profile.name} profile`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Graceful fallback: hide broken img and show monogram backdrop.
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[10rem] leading-none text-white/[0.04]">
                  V
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between rounded-lg border border-white/10 bg-ink-900/70 px-3 py-2 backdrop-blur">
                <div>
                  <p className="text-xs text-slate-400">Currently</p>
                  <p className="text-sm font-medium text-white">
                    {profile.role}
                  </p>
                </div>
                <span className="chip">5+ yrs</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 backdrop-blur"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
