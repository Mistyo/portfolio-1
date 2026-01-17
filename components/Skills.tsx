import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, INTERESTS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-100/50 dark:bg-space-900/30 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-600 dark:text-slate-400">A blend of creative communication and technical proficiency.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl p-6 hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-cyan-600 dark:text-cyan-400 mb-6 border-b border-slate-100 dark:border-white/10 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 bg-slate-50 dark:bg-space-950 rounded-md text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-8">Personal Interests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {INTERESTS.map((interest, i) => (
              <motion.span
                key={interest}
                whileHover={{ scale: 1.1, rotate: Math.random() * 4 - 2 }}
                className="px-6 py-2 rounded-full border border-purple-500/30 text-purple-700 dark:text-purple-200 bg-purple-500/5 cursor-default hover:bg-purple-500/20 transition-colors"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;