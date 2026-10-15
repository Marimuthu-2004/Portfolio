import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { Download, FileText } from 'lucide-react';

export default function ResumeCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="resume" className="section-padding" aria-label="Resume download section">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/5 to-navy-900" />
          <div className="absolute inset-0 border border-cyan-500/10 rounded-3xl" />
          <div className="absolute top-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 p-10 md:p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
              <FileText size={28} className="text-cyan-400" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Know More?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Download my resume for a comprehensive overview of my skills, projects, certifications, and academic background.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/DataAnalyst.docx"
                download="MariMuthuM_DataAnalyst_Resume.docx"
                className="btn-primary text-base px-8 py-3.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Download resume as DOCX"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
              <motion.a
                href="mailto:marimuthumariappan122004@gmail.com"
                className="btn-secondary text-base px-8 py-3.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me Instead
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
