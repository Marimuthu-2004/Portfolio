import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { skillCategories } from '../data/portfolio';

const levelConfig = {
  'Experienced': { label: 'Experienced', class: 'level-experienced', bars: 4 },
  'Intermediate': { label: 'Intermediate', class: 'level-intermediate', bars: 3 },
  'Working Knowledge': { label: 'Working Knowledge', class: 'level-working', bars: 2 },
  'Familiar': { label: 'Familiar', class: 'level-familiar', bars: 1 },
};

const colorConfig: Record<string, { accent: string; border: string; hover: string; badge: string }> = {
  cyan: {
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
    hover: 'hover:border-cyan-500/40',
    badge: 'skill-badge-cyan',
  },
  violet: {
    accent: 'text-violet-400',
    border: 'border-violet-500/20',
    hover: 'hover:border-violet-500/40',
    badge: 'skill-badge-violet',
  },
  emerald: {
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    hover: 'hover:border-emerald-500/40',
    badge: 'skill-badge-emerald',
  },
  amber: {
    accent: 'text-amber-400',
    border: 'border-amber-500/20',
    hover: 'hover:border-amber-500/40',
    badge: 'skill-badge-amber',
  },
};

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...skillCategories.map((c) => c.category)];
  const filtered = activeFilter === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeFilter);

  return (
    <section id="skills" className="section-padding" aria-label="Technical skills section">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">What I Know</p>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive look at my analytics toolkit — from SQL and Python to Power BI and Tableau.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg'
                  : 'glass-card text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill Category Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((category, catIdx) => {
              const c = colorConfig[category.color] || colorConfig.cyan;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                  className={`glass-card-hover p-5 rounded-2xl border ${c.border} ${c.hover}`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                    <div>
                      <h3 className={`text-sm font-bold ${c.accent}`}>{category.category}</h3>
                      <p className="text-slate-600 text-xs">{category.skills.length} skills</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <ul className="space-y-2.5">
                    {category.skills.map((skill) => {
                      const lc = levelConfig[skill.level];
                      return (
                        <li key={skill.name} className="flex items-center justify-between gap-2">
                          <span className="text-slate-300 text-xs font-medium flex-1">{skill.name}</span>
                          <div className="flex items-center gap-1.5">
                            {/* Level dots */}
                            <div className="flex gap-0.5" aria-label={`Level: ${skill.level}`}>
                              {[1, 2, 3, 4].map((dot) => (
                                <div
                                  key={dot}
                                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                                    dot <= lc.bars
                                      ? c.accent.replace('text-', 'bg-')
                                      : 'bg-white/10'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className={`level-chip ${lc.class}`}>{lc.label}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500"
        >
          <span className="font-semibold text-slate-600 uppercase tracking-wider">Proficiency Legend:</span>
          {Object.entries(levelConfig).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((d) => (
                  <div key={d} className={`w-1.5 h-1.5 rounded-full ${d <= val.bars ? 'bg-cyan-400' : 'bg-white/10'}`} />
                ))}
              </div>
              <span>{val.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
