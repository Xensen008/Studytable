import React from 'react';
import { motion } from 'framer-motion';

const HowWeComponent = ({ 
  title = "How we come to this?",
  description = "We observed and researched for three years in a variety of student. Where The best needs more attention to do better and the student struggling needs more attention to improve their own abilities. All students need personal attention. Based on the notion of 'Personal attention' we have built our algorithm and Ai tutor to cater each children uniquely…",
  ctaText = "Read the full story",
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
    <div className="bg-[#1a1a2e] py-24 relative overflow-hidden">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          className="space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Title with animated underline */}
          <motion.div 
            className="relative inline-block"
            variants={itemVariants}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              {title}
            </h2>
            <motion.div 
              className="absolute -bottom-2 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              initial={{ width: 0, x: '-50%' }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-indigo-200/80 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.button 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-2 text-indigo-200 hover:text-white transition-colors group"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {ctaText}
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </motion.svg>
          </motion.button>
        </motion.div>

        {/* Stats Section with staggered animation */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: '3+', label: 'Years of Research' },
            { number: '1000+', label: 'Students Analyzed' },
            { number: '24/7', label: 'Personal Attention' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="text-center p-4 rounded-xl hover:bg-white/5 transition-colors"
            >
              <motion.div 
                className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-indigo-200/60 text-sm mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeComponent;

