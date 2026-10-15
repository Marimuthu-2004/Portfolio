import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { certifications } from '../data/portfolio';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
};

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="section-padding bg-navy-900/20" aria-label="Certifications section">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="section-title">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Verified credentials demonstrating technical proficiency in SQL and Python.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {certifications.map((cert, i) => {
            const c = colorMap[cert.color] || colorMap.cyan;
            return (
              <motion.article
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className={`glass-card p-5 rounded-2xl border ${c.border} hover:scale-105 transition-transform duration-300`}
                aria-label={cert.name}
              >
                {/* Icon Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <ShieldCheck size={20} className={c.text} />
                  </div>
                  <span className="text-xl" aria-label={`${cert.badge} rating`}>{cert.badge}</span>
                </div>

                <h3 className="text-white font-bold text-sm mb-1">{cert.name}</h3>
                <p className={`text-xs font-semibold ${c.text} mb-4`}>{cert.issuer}</p>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors border border-white/10 hover:border-white/20 rounded-lg px-3 py-1.5"
                    aria-label={`Verify ${cert.name} certificate`}
                  >
                    <ExternalLink size={11} />
                    Verify
                  </a>
                )}
              </motion.article>
            );
          })}

          {/* Encourage More Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-5 rounded-2xl border border-dashed border-white/[0.08] flex flex-col items-center justify-center text-center gap-2 sm:col-span-1"
          >
            <div className="text-3xl">📚</div>
            <p className="text-slate-500 text-xs">Continuously learning & adding new certifications</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
