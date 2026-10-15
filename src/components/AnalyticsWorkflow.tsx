import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { workflowSteps } from '../data/portfolio';

export default function AnalyticsWorkflow() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="workflow" className="section-padding" aria-label="Analytics workflow section">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">My Approach</p>
          <h2 className="section-title">
            Analytics <span className="text-gradient">Workflow</span>
          </h2>
          <p className="section-subtitle">
            A structured, repeatable process I follow from business problem to actionable insight.
          </p>
        </motion.div>

        {/* Horizontal steps on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="relative"
              >
                {/* Connector arrow (mobile) */}
                {i < workflowSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-2">
                    <span className="text-cyan-500/30 text-lg">↓</span>
                  </div>
                )}

                <div className="glass-card p-4 rounded-xl border border-white/[0.07] hover:border-cyan-500/25 transition-all duration-300 text-center group">
                  {/* Step Number */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-bold mx-auto mb-3">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform" aria-hidden="true">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-sm font-semibold mb-1.5">{step.title}</h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">{step.description}</p>

                  {/* Tools */}
                  <div className="flex flex-wrap justify-center gap-1">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-1.5 py-0.5 text-[10px] rounded bg-cyan-500/10 text-cyan-400/80 border border-cyan-500/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
