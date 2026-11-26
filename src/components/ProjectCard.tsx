import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp, Code2, FileText, Download } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group"
      aria-label={`Project: ${project.title}`}
    >
      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient.replace('/20', '')}`} />

      <div className="p-6">
        {/* Category Badge + Title */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
              {project.category}
            </span>
            <h3 className="text-white font-bold text-lg mt-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.colabUrl && (
              <a
                href={project.colabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 hover:bg-amber-500/20 hover:border-amber-500/30 transition-all font-medium"
                aria-label={`View in Google Colab: ${project.title}`}
                title="View in Google Colab"
              >
                <Code2 size={13} />
                <span className="hidden sm:inline">Colab</span>
              </a>
            )}
            {project.pdfUrl && (
              <a
                href={project.pdfUrl.startsWith('http') ? project.pdfUrl : `${import.meta.env.BASE_URL}${project.pdfUrl.replace(/^\//, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/20 hover:border-rose-500/30 transition-all font-medium"
                aria-label={`View Dashboard PDF for ${project.title}`}
                title="View Dashboard (PDF)"
              >
                <FileText size={13} />
                <span className="hidden sm:inline">PDF</span>
              </a>
            )}
            {project.pbixUrl && (
              <a
                href={project.pbixUrl.startsWith('http') ? project.pbixUrl : `${import.meta.env.BASE_URL}${project.pbixUrl.replace(/^\//, '')}`}
                download="Adventures_Works.pbix"
                className="h-8 px-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center gap-1.5 text-xs text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/20 hover:border-yellow-500/30 transition-all font-medium"
                aria-label={`Download Power BI File for ${project.title}`}
                title="Download Power BI File (.pbix)"
              >
                <Download size={13} />
                <span className="hidden sm:inline">PBIX</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                aria-label={`View on GitHub: ${project.title}`}
                title="View on GitHub"
              >
                <Github size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/20 transition-all"
                aria-label={`Live demo for ${project.title}`}
                title="Live Demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Project Image Preview */}
        {project.image && (
          <div className="relative mb-4 rounded-xl overflow-hidden border border-white/10 group-hover:border-cyan-500/30 transition-all">
            <img
              src={project.image.startsWith('http') ? project.image : `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
              alt={`Dashboard preview for ${project.title}`}
              className="w-full h-44 object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 font-medium"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Process Steps */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.process.map((step, i) => (
            <span key={step} className="flex items-center gap-1 text-xs text-slate-500">
              <span className="text-cyan-500/60">{step}</span>
              {i < project.process.length - 1 && <span className="text-slate-700">→</span>}
            </span>
          ))}
        </div>

        {/* Expand/Collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors mt-2 w-full justify-center py-2 border-t border-white/[0.05]"
          aria-expanded={expanded}
          aria-controls={`project-details-${project.id}`}
        >
          {expanded ? (
            <>Hide Details <ChevronUp size={12} /></>
          ) : (
            <>View Details <ChevronDown size={12} /></>
          )}
        </button>

        {/* Expanded Details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              id={`project-details-${project.id}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4 border-t border-white/[0.05] mt-2">
                {/* Business Problem */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Business Problem</h4>
                  <p className="text-slate-400 text-sm">{project.problem}</p>
                </div>

                {/* Key Insights */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Key Insights</h4>
                  <ul className="space-y-1.5">
                    {project.insights.map((insight) => (
                      <li key={insight} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-cyan-400 mt-0.5 shrink-0">›</span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">Outcome</h4>
                  <p className="text-slate-400 text-sm">{project.outcome}</p>
                </div>

                {/* Project Links */}
                {(project.colabUrl || project.pdfUrl || project.pbixUrl || project.githubUrl || project.liveUrl) && (
                  <div className="pt-1 flex flex-wrap gap-2.5">
                    {project.colabUrl && (
                      <a
                        href={project.colabUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:text-amber-300 hover:bg-amber-500/20 hover:border-amber-500/30 text-xs font-semibold transition-all"
                      >
                        <Code2 size={13} />
                        View in Google Colab
                        <ExternalLink size={11} className="opacity-70" />
                      </a>
                    )}
                    {project.pdfUrl && (
                      <a
                        href={project.pdfUrl.startsWith('http') ? project.pdfUrl : `${import.meta.env.BASE_URL}${project.pdfUrl.replace(/^\//, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:text-rose-300 hover:bg-rose-500/20 text-xs font-semibold transition-all"
                      >
                        <FileText size={13} />
                        View Dashboard (PDF)
                        <ExternalLink size={11} className="opacity-70" />
                      </a>
                    )}
                    {project.pbixUrl && (
                      <a
                        href={project.pbixUrl.startsWith('http') ? project.pbixUrl : `${import.meta.env.BASE_URL}${project.pbixUrl.replace(/^\//, '')}`}
                        download="Adventures_Works.pbix"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/20 text-xs font-semibold transition-all"
                      >
                        <Download size={13} />
                        Download Power BI File (.pbix)
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 text-xs font-semibold transition-all"
                      >
                        <Github size={13} />
                        View on GitHub
                        <ExternalLink size={11} className="opacity-70" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20 text-xs font-semibold transition-all"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/15">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
