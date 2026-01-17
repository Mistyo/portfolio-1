import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-slate-300 dark:border-slate-800 ml-3 md:ml-0 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] md:left-1/2 md:-translate-x-[6px]"></div>

              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Space for center line alignment on desktop */}
                <div className="hidden md:block w-1/2" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 shadow-sm dark:shadow-none transition-all duration-300 group">
                    <div className="flex flex-col mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                      <div className="flex items-center text-purple-600 dark:text-purple-400 text-sm font-medium mt-1">
                        <Briefcase size={14} className="mr-2" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-slate-500 text-xs mt-2 font-mono">
                        <Calendar size={12} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;