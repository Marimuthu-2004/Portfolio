import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { about, personal, softSkills } from '../data/portfolio';
import { Lightbulb, TrendingUp, Users, Code2 } from 'lucide-react';

const highlights = [
  { icon: <TrendingUp size={18} />, label: 'Data-Driven Insights', color: 'cyan' },
  { icon: <Code2 size={18} />, label: 'SQL & Python Analytics', color: 'violet' },
  { icon: <Lightbulb size={18} />, label: 'Business Intelligence', color: 'emerald' },
  { icon: <Users size={18} />, label: 'Stakeholder Communication', color: 'amber' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding" aria-label="About me section">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
          <h2 className="section-title">
            The <span className="text-gradient">Analyst</span> Behind the Data
          </h2>
          <p className="section-subtitle">
            A Computer Science student with a passion for transforming raw numbers into meaningful stories.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-4 text-slate-400 leading-relaxed">
              {about.summary.split('\n\n').map((para, i) => (
                <p key={i} className={i === 0 ? 'text-slate-300 text-base' : 'text-sm'}>
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights Chips */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className={`glass-card p-3.5 flex items-center gap-3 rounded-xl
                    ${h.color === 'cyan' ? 'text-cyan-400' :
                    h.color === 'violet' ? 'text-violet-400' :
                    h.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'}`}
                >
                  <span className="shrink-0">{h.icon}</span>
                  <span className="text-xs text-slate-300 font-medium">{h.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats / Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Identity Card */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Profile</h3>
              <div className="space-y-3">
                {[
                  { label: 'Name', value: personal.name },
                  { label: 'Role', value: 'Data Analyst (Fresher)' },
                  { label: 'Location', value: personal.location },
                  { label: 'Degree', value: 'B.E. Computer Science (2026)' },
                  { label: 'Email', value: personal.email, isLink: `mailto:${personal.email}` },
                ].map(({ label, value, isLink }) => (
                  <div key={label} className="flex gap-4 text-sm">
                    <span className="text-slate-600 min-w-[70px]">{label}</span>
                    <span className="text-slate-500 mr-2">·</span>
                    {isLink ? (
                      <a href={isLink} className="text-cyan-400 hover:underline truncate">{value}</a>
                    ) : (
                      <span className="text-slate-300">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
