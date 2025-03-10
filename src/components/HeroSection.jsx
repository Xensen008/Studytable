import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const floatingFormulaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full bg-[#1a1a2e] min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Brand Name - Centered Design */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-8 pb-4">
        <div className="container mx-auto px-8 lg:px-16 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative inline-block"
          >
            <h1 className="text-5xl font-bold tracking-tight flex items-center gap-2">
              <span className="text-white">STUDY</span>
              <span className="text-indigo-400">table</span>
              <motion.span 
                className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </h1>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-0.5"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                background: "linear-gradient(to right, transparent, #6366f1, transparent)"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Main Content - Adjust top padding */}
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="container mx-auto px-8 lg:px-16 max-w-7xl relative z-10">
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content Section */}
            <div className="lg:w-1/2 text-left lg:pl-8">
              <motion.div variants={itemVariants} className="space-y-4 mb-8">
                <span className="text-3xl md:text-5xl font-bold text-white block mb-2 drop-shadow-lg">
                  Optimize Your
                </span>
                <span className="text-3xl md:text-5xl text-indigo-200/70 font-normal block">
                   Performance For
                </span>
                <div className="flex items-center gap-4 text-3xl md:text-5xl font-bold">
                  <span className="text-indigo-400">JEE,</span>
                  <span className="text-purple-400">NEET and</span>
                  <span className="text-pink-400">Boards</span>
                </div>
              </motion.div>
              
              <motion.p variants={itemVariants} className="text-lg mb-10 text-indigo-200/70 max-w-2xl leading-relaxed">
                Your personal AI-Tutor for all academic needs. Whether its school exam, boards or competitive exams we plan, manage, and help you clear your doubts instantly. For students of class 10th, 11th and 12th (CBSE) and preparing for all medical or engineering entrance exams.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
                <button className="group relative px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                  <span className="relative z-10 text-white font-medium">Apply for admission</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="px-8 py-3 border border-indigo-400/30 text-indigo-100 rounded-lg hover:bg-indigo-500/10 transition-all group">
                  <span className="flex items-center gap-2">
                    Sign In 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Right Image Section */}
            <motion.div 
              className="lg:w-1/2 relative hidden lg:flex justify-center"
              variants={itemVariants}
            >
              <div className="relative w-full max-w-xl pt-10">
                {/* Main Image */}
                <motion.div 
                  className="relative z-10 bg-gradient-to-b from-indigo-500/5 to-purple-500/5 rounded-[2rem] p-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent rounded-[2rem] blur-2xl"></div>
                  <img 
                    src="./Image/img.png" 
                    alt="Person using STUDYtable" 
                    className="w-[420px] h-auto object-contain mx-auto scale-x-[-1] 
                      drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] 
                      filter brightness-110 contrast-105"
                  />
                </motion.div>

                {/* Floating Elements */}
                <div className="absolute inset-0 z-20">
                  {[
                    { top: '-6', left: '20', formula: '∫e^x dx', delay: 0.6 },
                    { top: '1/4', right: '-8', formula: 'lim x→∞', delay: 0.8 },
                    { bottom: '1/3', left: '-10', formula: 'Σ(n²)', delay: 1 }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${item.top && `top-${item.top}`} ${item.bottom && `bottom-${item.bottom}`} ${item.left && `left-${item.left}`} ${item.right && `right-${item.right}`}`}
                      variants={floatingFormulaVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: item.delay }}
                    >
                      <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-indigo-500/20">
                        <span className="text-indigo-100 font-mono">{item.formula}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Exam Categories */}
                <motion.div 
                  className="absolute -right-6 top-1/2 transform -translate-y-1/2"
                  variants={itemVariants}
                >
                  <div className="bg-gradient-to-br from-[#20203a]/80 to-[#2a1f3f]/80 p-5 rounded-2xl backdrop-blur-xl border border-indigo-500/20">
                    <h3 className="text-white/90 text-sm font-medium mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                      Popular Exams
                    </h3>
                    <div className="space-y-2.5">
                      {[
                        { name: 'JEE Mains', count: '250K+', color: 'from-indigo-400/20 to-blue-500/20' },
                        { name: 'NEET UG', count: '180K+', color: 'from-purple-400/20 to-pink-500/20' },
                        { name: 'CBSE Boards', count: '500K+', color: 'from-pink-400/20 to-rose-500/20' }
                      ].map((exam, i) => (
                        <div key={i} 
                          className={`bg-gradient-to-r ${exam.color} rounded-xl p-3 hover:scale-105 transition-transform cursor-pointer group`}>
                          <div className="flex justify-between items-center">
                            <span className="text-white/90 font-medium">{exam.name}</span>
                            <span className="text-xs text-white/60 group-hover:text-white/90 transition-colors">
                              {exam.count} students
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
