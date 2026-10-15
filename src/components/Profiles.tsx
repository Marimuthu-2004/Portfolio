import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { profiles } from '../data/portfolio';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
  github: <Github size={24} />,
  linkedin: <Linkedin size={24} />,
  hackerrank: <span className="text-2xl font-bold">HR</span>,
};

const colorMap: Record<string, { bg: string; border: string; text: string; hover: string }> = {
  gray: {
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/20',
    text: 'text-slate-300',
    hover: 'hover:border-slate-400/40',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    hover: 'hover:border-blue-400/40',
  },
  green: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    hover: 'hover:border-emerald-400/40',
  },
};

export default function Profiles() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="profiles" className="section-padding" aria-label="Coding and analytics profiles">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Online Presence</p>
          <h2 className="section-title">
            Coding & Analytics <span className="text-gradient">Profiles</span>
          </h2>
          <p className="section-subtitle">
            Where you can find my work, projects, and professional presence online.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
          {profiles.map((profile, i) => {
            const c = colorMap[profile.color] || colorMap.gray;
            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className={`glass-card p-5 rounded-2xl border ${c.border} ${c.hover} transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4 ${c.text}`}>
                  {iconMap[profile.icon] || <ExternalLink size={20} />}
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{profile.platform}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{profile.description}</p>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.text} hover:opacity-80 transition-opacity`}
                  aria-label={`Visit ${profile.platform} profile`}
                >
                  Visit Profile
                  <ExternalLink size={11} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
