import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { experience } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, Zap } from 'lucide-react';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding bg-navy-900/20" aria-label="Experience section">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Professional Journey</p>
          <h2 className="section-title">
            Internship & <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on professional experience applying data analytics in a real-world business environment.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experience.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card p-6 rounded-2xl border border-cyan-500/15 hover:border-cyan-500/30 transition-all duration-300 relative"
              aria-label={`${exp.role} at ${exp.company}`}
            >
              {/* Type Badge */}
              <div className="absolute top-5 right-5">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 capitalize">
                  {exp.type}
                </span>
              </div>

              {/* Role & Company */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Briefcase size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                  <p className="text-cyan-400 font-semibold text-sm">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 mt-1.5 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2.5 mb-5" aria-label="Responsibilities">
                {exp.responsibilities.map((resp) => (
                  <li key={resp} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="text-cyan-400 mt-0.5 shrink-0">›</span>
                    {resp}
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={12} className="text-amber-400" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tools Used</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
