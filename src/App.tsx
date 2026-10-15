import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AnalyticsSnapshot from './components/AnalyticsSnapshot';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AnalyticsWorkflow from './components/AnalyticsWorkflow';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Profiles from './components/Profiles';
import Achievements from './components/Achievements';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-navy-950 flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white text-3xl font-black shadow-2xl mb-6">
          M
        </div>
        {/* Orbit ring */}
        <motion.div
          className="absolute -inset-3 rounded-2xl border border-cyan-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -inset-6 rounded-3xl border border-violet-500/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-slate-400 text-sm font-medium font-mono"
      >
        Initializing portfolio...
      </motion.p>

      {/* Progress Bar */}
      <motion.div
        className="mt-6 w-48 h-0.5 bg-white/5 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-navy-950">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <AnalyticsSnapshot />
              <Skills />
              <Projects />
              <AnalyticsWorkflow />
              <Experience />
              <Education />
              <Certifications />
              <Profiles />
              <Achievements />
              <ResumeCTA />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
