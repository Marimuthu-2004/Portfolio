import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { education } from '../data/portfolio';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section-padding" aria-label="Education section">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Academic Background</p>
          <h2 className="section-title">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">
            A strong academic foundation in Computer Science Engineering supporting my data analytics career.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.article
                key={edu.degree}
                initial={{ opacity: 0, x: 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="relative sm:pl-16"
                aria-label={edu.degree}
              >
                {/* Timeline Dot */}
                <div className="hidden sm:flex absolute left-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 items-center justify-center">
                  {i === 0 ? (
                    <GraduationCap size={20} className="text-cyan-400" />
                  ) : (
                    <Award size={20} className="text-violet-400" />
                  )}
                </div>

                <div className="glass-card p-6 rounded-2xl border border-white/[0.08] hover:border-cyan-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base">{edu.degree}</h3>
                      <p className="text-cyan-400 text-sm font-medium mt-1">{edu.institution}</p>
                      <p className="text-slate-500 text-xs mt-1">{edu.period}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-black text-gradient font-mono">{edu.score}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{edu.scoreLabel}</div>
                    </div>
                  </div>

                  {i === 0 && (
                    <div className="mt-4 pt-4 border-t border-white/[0.05]">
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Relevant Coursework</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Statistics & Probability', 'Database Management', 'Programming with Python', 'Data Structures & Algorithms', 'Mathematics', 'Machine Learning Fundamentals'].map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-1 text-xs rounded-lg bg-violet-500/10 border border-violet-500/15 text-violet-400"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
