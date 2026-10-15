import { motion } from 'framer-motion';
import { useScrollReveal, useCounter } from '../hooks/useAnimations';
import { metrics } from '../data/portfolio';

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
    glow: 'shadow-[0_0_20px_rgba(34,211,238,0.15)]',
  },
  violet: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/20',
    glow: 'shadow-[0_0_20px_rgba(139,92,246,0.15)]',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    glow: 'shadow-[0_0_20px_rgba(52,211,153,0.15)]',
  },
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    glow: 'shadow-[0_0_20px_rgba(251,191,36,0.15)]',
  },
};

interface MetricCardProps {
  label: string;
  value: number;
  unit: string;
  icon: string;
  color: string;
  index: number;
  shouldStart: boolean;
}

function MetricCard({ label, value, unit, icon, color, index, shouldStart }: MetricCardProps) {
  const count = useCounter(value, 2000, shouldStart);
  const c = colorMap[color] || colorMap.cyan;
  const displayValue = value >= 1000
    ? `${(count / 1000).toFixed(0)}K+`
    : value % 1 !== 0
    ? value.toFixed(1)
    : count.toString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={shouldStart ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card p-5 rounded-2xl border ${c.border} ${c.glow} hover:scale-105 transition-transform duration-300`}
    >
      <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center text-xl mb-4`}
        aria-hidden="true">
        {icon}
      </div>
      <div className={`text-3xl font-black ${c.text} mb-1 font-mono`}>
        {displayValue}
      </div>
      <div className="text-white text-sm font-semibold mb-0.5">{label}</div>
      <div className="text-slate-500 text-xs">{unit}</div>
    </motion.div>
  );
}

export default function AnalyticsSnapshot() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="snapshot" className="section-padding bg-navy-900/30" aria-label="Analytics snapshot">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">At A Glance</p>
          <h2 className="section-title">
            Analytics <span className="text-gradient">Snapshot</span>
          </h2>
          <p className="section-subtitle">
            Key metrics from my academic journey, certifications, and hands-on projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((metric, i) => (
            <MetricCard
              key={metric.label}
              {...metric}
              index={i}
              shouldStart={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
