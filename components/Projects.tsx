import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PROJECTS, ACHIEVEMENTS } from '../constants';
import { ExternalLink, Github, Trophy, Award } from 'lucide-react';

const Projects: React.FC = () => {
  // Animation variants to handle different transitions for entrance and hover
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Projects Row */}
        <div className="mb-24">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mr-6">Selected Projects</h2>
                <div className="flex-grow h-[1px] bg-slate-200 dark:bg-slate-800"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.id}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-space-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-900/10 dark:hover:shadow-cyan-900/20 transition-all duration-500 flex flex-col h-full"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100 dark:bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-500/20 transition-colors"></div>
                        
                        <div className="relative z-10 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors pr-4">{project.title}</h3>
                                <div className="flex items-center gap-3 shrink-0">
                                  {project.githubUrl && (
                                      <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="p-2 bg-slate-100 dark:bg-white/5 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/20 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
                                        title="View Source Code"
                                      >
                                          <Github size={20} />
                                      </a>
                                  )}
                                  {project.demoUrl && (
                                    <a 
                                      href={project.demoUrl} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="flex items-center gap-2 px-4 py-2 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-100 dark:border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-medium hover:bg-cyan-100 dark:hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300"
                                    >
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                  )}
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-3 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-200 border border-slate-200 dark:border-slate-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Achievements Row */}
        <div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center mb-12 flex-row-reverse"
            >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white ml-6">Achievements</h2>
                <div className="flex-grow h-[1px] bg-slate-200 dark:bg-slate-800"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ACHIEVEMENTS.map((ach, index) => (
                    <motion.div
                        key={ach.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/5 p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none"
                    >
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                            {index === 0 ? <Trophy size={24} /> : <Award size={24} />}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{ach.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{ach.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;