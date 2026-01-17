import React from 'react';
import { SOCIALS } from '../constants';
import { Github, Globe, Mail, GraduationCap } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Globe: <Globe size={20} />,
  Mail: <Mail size={20} />,
};

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-100 dark:bg-space-950 border-t border-slate-200 dark:border-slate-900 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Let's Connect</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              I'm always open to discussing science communication, video production, or web development projects.
            </p>
            <div className="flex space-x-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
             <div className="flex items-start space-x-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                    <GraduationCap size={20} />
                </div>
                <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg">Education</h3>
                    <p className="text-slate-700 dark:text-slate-300 font-medium mt-1">Roots Garden School & College</p>
                    <p className="text-slate-500 text-sm">High School Diploma, Pre-Medical (Bio, Chem, Phy)</p>
                    <p className="text-cyan-600 dark:text-cyan-500 text-xs mt-2 font-mono">Graduated 2025 • A1 in Biology</p>
                </div>
             </div>
             <div className="flex items-center space-x-4">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Based in Rawalpindi, Pakistan</p>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Faateh Aurangzeb. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;