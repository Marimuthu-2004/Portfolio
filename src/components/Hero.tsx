import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowDown, ChevronRight } from 'lucide-react';
import { personal, typingTitles } from '../data/portfolio';
import { useTypewriter } from '../hooks/useAnimations';

const floatingIcons = ['📊', '📈', '🗄️', '🔍', '📋', '🧠', '⚙️', '💡'];

export default function Hero() {
  const typedText = useTypewriter(typingTitles, 75, 1800);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      aria-label="Hero section"
    >
      {/* Animated Background Blobs */}
      <div className="hero-blob w-[600px] h-[600px] bg-cyan-500 -top-48 -left-48" />
      <div className="hero-blob w-[500px] h-[500px] bg-violet-600 -bottom-48 -right-48" />
      <div className="hero-blob w-[300px] h-[300px] bg-blue-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Floating Analytics Icons */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-10 pointer-events-none select-none"
          style={{
            left: `${10 + (i * 11) % 80}%`,
            top: `${15 + (i * 13) % 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
          aria-hidden="true"
        >
          {icon}
        </motion.div>
      ))}

      {/* Content */}
      <div className="container-max relative z-10 px-4 md:px-8 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Available Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              <span className="glow-dot" />
              <span>Open to Work · Available for Opportunities</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              {personal.name}
            </span>
          </motion.h1>

          {/* Typing Title */}
          <motion.div variants={itemVariants} className="h-12 mb-6 flex items-center">
            <div className="text-xl md:text-2xl font-semibold text-slate-300 font-mono">
              <span className="text-cyan-400">&gt;</span>{' '}
              <span>{typedText}</span>
              <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            {personal.tagline}{' '}
            <span className="text-slate-300">
              Skilled in SQL, Python, Power BI & Tableau — turning complex datasets into clear business intelligence.
            </span>
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-slate-500 text-sm mb-10"
          >
            <MapPin size={14} className="text-cyan-400" />
            <span>{personal.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary text-base px-8 py-3.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              Get In Touch
            </motion.a>

            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary text-base px-8 py-3.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
              <ChevronRight size={16} />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <span className="text-slate-600 text-xs uppercase tracking-widest">Connect</span>
            <div className="w-8 h-px bg-slate-700" />
            <div className="flex gap-3">
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
                whileHover={{ scale: 1.15, y: -2 }}
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/20 transition-all duration-200"
                whileHover={{ scale: 1.15, y: -2 }}
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/20 transition-all duration-200"
                whileHover={{ scale: 1.15, y: -2 }}
                aria-label="Send email"
              >
                <Mail size={18} />
              </motion.a>
              <motion.a
                href={`tel:${personal.phone}`}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/20 transition-all duration-200"
                whileHover={{ scale: 1.15, y: -2 }}
                aria-label="Phone contact"
              >
                <Phone size={18} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <span className="text-slate-600 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-slate-600" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
