import React from 'react';
import { motion } from 'framer-motion';

const AcademicHero = ({ 
  title = "Crafted for your all academic needs",
  buttonText = "Get your Entry",
  onButtonClick = () => console.log("Button clicked")
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-[#1a1a2e] py-32 lg:py-40 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute inset-0 bg-[#1a1a2e]/50 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Title with enhanced styling */}
          <motion.div 
            className="relative inline-block"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="relative z-10 bg-gradient-to-b from-white via-indigo-100 to-indigo-200/80 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <motion.div 
              className="absolute -bottom-6 left-1/2 w-48 h-1"
              initial={{ width: 0 }}
              whileInView={{ width: "12rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              style={{ 
                x: "-50%",
                background: "linear-gradient(to right, transparent, #6366f1, transparent)" 
              }}
            />
          </motion.div>
          
          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={itemVariants}
          >
            {[
              { text: 'AI-Powered', icon: '🤖' },
              { text: 'Personalized', icon: '🎯' },
              { text: '24/7 Support', icon: '💫' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-indigo-500/20 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-indigo-200/90 text-sm flex items-center gap-2">
                  {feature.icon} {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.button 
            onClick={onButtonClick}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl"
          >
            <span className="relative z-10 text-white font-medium tracking-wide flex items-center gap-2">
              {buttonText}
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ x: 0 }}
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicHero;

