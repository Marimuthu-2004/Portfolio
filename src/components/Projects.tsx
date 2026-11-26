import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding bg-navy-900/20" aria-label="Projects section">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="section-title">
            Analytics <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Hands-on projects showcasing real analytical thinking — from SQL queries to interactive dashboards and Python EDA.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Workflow Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass-card p-6 rounded-2xl border border-white/[0.08] text-center"
        >
          <p className="text-slate-500 text-sm">
            Each project follows a structured analytical approach:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['Problem Definition', 'Data Collection', 'Cleaning & EDA', 'Analysis', 'Visualization', 'Insights & Reporting'].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2 text-xs text-slate-400">
                <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">{step}</span>
                {i < arr.length - 1 && <span className="text-cyan-500/40 hidden sm:block">→</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
