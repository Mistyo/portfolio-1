import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Rocket, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-sm font-medium"
          >
            <Rocket size={16} />
            <span>Science Communicator & Creative</span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight"
            >
              Faateh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400">
                Aurangzeb
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light max-w-lg"
            >
              Bridging the gap between complex science and digital storytelling.
            </motion.p>
          </div>

          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6, duration: 0.8 }}
             className="text-slate-600 dark:text-slate-500 leading-relaxed max-w-xl"
          >
            Versatile Content Creator and Technical Problem-Solver. Award-winning writer combining analytical thinking with creativity to produce engaging, high-quality work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, '#projects')}
              className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="px-8 py-3 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Abstract Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Orbiting Elements */}
            <div className="absolute w-96 h-96 rounded-full border border-slate-300 dark:border-white/10 animate-spin-slow">
               <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
            </div>
            <div className="absolute w-[500px] h-[500px] rounded-full border border-slate-300 dark:border-white/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
               <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-purple-600 dark:bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
            </div>
            
            {/* Center Glowing Orb */}
            <div className="w-64 h-64 bg-gradient-to-tr from-cyan-400 to-purple-500 dark:from-cyan-500 dark:to-purple-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
            
            <div className="absolute z-10 backdrop-blur-md bg-white/60 dark:bg-white/5 border border-white/20 dark:border-white/10 p-6 rounded-2xl shadow-xl dark:shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-64">
                <Sparkles className="w-8 h-8 text-yellow-500 dark:text-yellow-300 mx-auto mb-3" />
                <h3 className="text-slate-900 dark:text-white font-bold text-lg">Science Meets Art</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Transforming technical data into visual stories.</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;