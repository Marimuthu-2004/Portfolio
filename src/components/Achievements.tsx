import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { achievements } from '../data/portfolio';

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
    glow: 'shadow-[0_0_20px_rgba(251,191,36,0.1)]',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    glow: 'shadow-[0_0_20px_rgba(34,211,238,0.1)]',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    glow: 'shadow-[0_0_20px_rgba(52,211,153,0.1)]',
  },
};

export default function Achievements() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="section-padding bg-navy-900/20" aria-label="Achievements section">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Highlights</p>
          <h2 className="section-title">
            <span className="text-gradient">Achievements</span> & Extra-curricular
          </h2>
          <p className="section-subtitle">
            Notable achievements, recognitions, and activities beyond the classroom.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {achievements.map((achievement, i) => {
            const c = colorMap[achievement.color] || colorMap.cyan;
            return (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                className={`glass-card p-5 rounded-2xl border ${c.border} ${c.glow} hover:scale-[1.02] transition-transform duration-300`}
                aria-label={achievement.title}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center text-2xl mb-4`}
                  aria-hidden="true">
                  {achievement.icon}
                </div>
                <h3 className={`text-sm font-bold ${c.text} mb-2`}>{achievement.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{achievement.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
