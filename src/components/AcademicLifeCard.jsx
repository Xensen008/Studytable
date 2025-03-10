import React from 'react';
import { motion } from 'framer-motion';

const AcademicLifeCard = () => {
  const scheduleItems = [
    { time: '6:00 AM', task: 'Physics Practice', status: 'Done', tag: 'Important' },
    { time: '8:30 AM', task: 'Chemistry Revision', status: 'Current', tag: 'Review' },
    { time: '2:00 PM', task: 'Math Test', status: 'Upcoming', tag: 'Test' },
    { time: '4:30 PM', task: 'Biology Notes', status: 'Upcoming', tag: 'Study' }
  ];

  return (
    <div className="bg-gradient-to-br from-[#1e1e32] to-[#2b2b45] rounded-lg sm:rounded-2xl p-3 sm:p-6 w-full relative overflow-hidden border border-indigo-500/20">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Header - Adjusted for mobile */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
            <span className="text-white text-base sm:text-xl">📚</span>
          </div>
          <div>
            <h3 className="text-white font-medium text-sm sm:text-base">Today's Schedule</h3>
            <p className="text-indigo-200/60 text-xs sm:text-sm">Organized Learning Path</p>
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="px-2 py-1 sm:px-3 sm:py-1.5 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm rounded-lg border border-indigo-500/20"
        >
          View All
        </motion.button>
      </div>

      {/* Schedule List - Mobile optimized */}
      <div className="space-y-2 sm:space-y-3">
        {scheduleItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-indigo-500/20 hover:bg-white/10 transition-all group"
          >
            <div className="min-w-[50px] sm:min-w-[60px] text-xs sm:text-sm text-indigo-200/70">{item.time}</div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-medium text-sm sm:text-base truncate">{item.task}</h4>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1 flex-wrap">
                <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${
                  item.status === 'Done' ? 'bg-green-500/20 text-green-300' :
                  item.status === 'Current' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {item.status}
                </span>
                <span className="text-[10px] sm:text-xs text-indigo-200/50">{item.tag}</span>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center cursor-pointer shrink-0"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Progress Section - Mobile friendly */}
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-indigo-500/20">
        <div className="flex justify-between items-center mb-1.5 sm:mb-2">
          <span className="text-xs sm:text-sm text-indigo-200/70">Daily Progress</span>
          <span className="text-xs sm:text-sm text-indigo-400">75%</span>
        </div>
        <div className="h-1.5 sm:h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '75%' }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Floating Formulas - Hide on mobile */}
      <div className="hidden sm:block absolute top-20 right-8 rotate-12 opacity-20">
        <span className="text-indigo-300 font-mono text-sm">Schedule(t)</span>
      </div>
      <div className="hidden sm:block absolute bottom-32 left-8 -rotate-6 opacity-20">
        <span className="text-purple-300 font-mono text-sm">Focus(t)</span>
      </div>
    </div>
  );
};

export default AcademicLifeCard;
