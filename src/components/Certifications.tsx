import { BadgeCheck } from "lucide-react";
import { Section } from "@/components/Section";
import { certifications } from "@/data/portfolio";

const tone: Record<string, string> = {
  Microsoft: "text-sky-300 border-sky-400/30 bg-sky-400/10",
  AWS: "text-amber-300 border-amber-400/30 bg-amber-400/10",
  "Google Cloud": "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
};

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certified across Azure, AWS and Google Cloud">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <li key={c.name} className="glass glass-hover flex gap-4 p-5">
            <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-accent-400" aria-hidden />
            <div>
              <span
                className={`inline-block rounded-full border px-2 py-0.5 text-[11px] font-semibold ${
                  tone[c.issuer] ?? "border-white/10 text-slate-300"
                }`}
              >
                {c.issuer}
                {c.code ? ` · ${c.code}` : ""}
              </span>
              <p className="mt-2 font-medium text-white">{c.name}</p>
              {c.status && <p className="mt-1 text-xs text-slate-400">{c.status}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
