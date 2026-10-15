import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-navy-950/80 backdrop-blur-sm" role="contentinfo">
      <div className="container-max px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-bold text-white mb-1">
              {personal.name} <span className="text-gradient">·</span>{' '}
              <span className="text-slate-400 font-normal text-sm">{personal.title}</span>
            </div>
            <p className="text-slate-600 text-xs">
              Chennai, India · {personal.email}
            </p>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-5 text-xs text-slate-500">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-500 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={15} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-500 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="Send email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-slate-600 text-xs flex items-center justify-center gap-1 flex-wrap">
            <span>© {currentYear} {personal.name}. All rights reserved.</span>
            <span className="text-slate-700 mx-1">·</span>
            <span className="flex items-center gap-1">
              Built with React, TypeScript & Framer Motion
              <Heart size={10} className="text-red-500/60" aria-hidden="true" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
