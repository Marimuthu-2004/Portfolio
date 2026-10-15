import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useAnimations';
import { personal } from '../data/portfolio';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormState = 'idle' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Opens mail client with pre-filled content (no backend needed)
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setFormState('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormState('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? 'border-red-500/40 focus:ring-red-500/30'
        : 'border-white/10 focus:border-cyan-500/40 focus:ring-cyan-500/20'
    }`;

  const contactInfo = [
    { icon: <Mail size={16} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: <Phone size={16} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: <MapPin size={16} />, label: 'Location', value: personal.location },
    { icon: <Github size={16} />, label: 'GitHub', value: 'github.com/Marimuthu-2004', href: personal.github },
    { icon: <Linkedin size={16} />, label: 'LinkedIn', value: 'linkedin.com/in/mari-muthu-m', href: personal.linkedin },
  ];

  return (
    <section id="contact" className="section-padding bg-navy-900/20" aria-label="Contact section">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Let's Talk</p>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open to Data Analyst, BI Analyst, and Business Analyst opportunities. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Info</h3>
              <ul className="space-y-4">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-0.5 shrink-0">{icon}</span>
                    <div>
                      <p className="text-slate-600 text-xs">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-slate-300 text-sm hover:text-cyan-400 transition-colors break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-slate-300 text-sm">{value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-emerald-500/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="glow-dot" />
                <span className="text-emerald-400 text-xs font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-slate-500 text-xs">
                Actively looking for Data Analyst, BI Analyst, and related roles. Response time: typically within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 rounded-2xl space-y-4"
              noValidate
              aria-label="Contact form"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-slate-500 mb-1.5 font-medium">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass('name')}
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-slate-500 mb-1.5 font-medium">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass('email')}
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs text-slate-500 mb-1.5 font-medium">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Data Analyst Opportunity"
                  className={inputClass('subject')}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs text-slate-500 mb-1.5 font-medium">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or just say hello..."
                  rows={5}
                  className={`${inputClass('message')} resize-none`}
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-xs mt-1" role="alert">{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {formState === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
                  role="status"
                >
                  <CheckCircle size={16} />
                  Your mail client has been opened. Please send the email!
                </motion.div>
              )}
              {formState === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm" role="alert">
                  <AlertCircle size={16} />
                  Something went wrong. Please email me directly.
                </div>
              )}

              <motion.button
                type="submit"
                className="btn-primary w-full justify-center text-base py-3.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} />
                Send Message
              </motion.button>

              <p className="text-slate-600 text-xs text-center">
                This form opens your email client. Alternatively, email me directly at{' '}
                <a href={`mailto:${personal.email}`} className="text-cyan-400 hover:underline">
                  {personal.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
