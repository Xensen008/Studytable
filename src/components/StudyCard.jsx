import React from 'react';

const StudyComponent = ({ 
  title = "One Place For All", 
  items = ["Scholarship Test", "JEE Test", "Tuition Test", "Board Test", "Unit Test"] 
}) => {
  return (
    <div className="relative p-8 backdrop-blur-xl rounded-2xl">
      {/* Title Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="h-1 w-20 mt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent rounded-full"></div>
      </div>
      
      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-transparent rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-indigo-500/50 bg-white/5 backdrop-blur-sm transition-all duration-300 cursor-pointer group-hover:transform group-hover:scale-[1.02]">
              <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r shadow-lg
                ${index % 3 === 0 ? 'from-blue-500 to-indigo-500' : 
                  index % 3 === 1 ? 'from-violet-500 to-purple-500' : 
                  'from-fuchsia-500 to-pink-500'} 
                flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-200 group-hover:to-white transition-all duration-300">
                  {item}
                </span>
                <span className="text-indigo-200/50 text-xs">Click to explore</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute -top-4 right-10 rotate-12 animate-pulse">
        <div className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg border border-white/10">
          <span className="text-white/70 font-mono text-sm">∑(n)</span>
        </div>
      </div>
    </div>
  );
};

export default StudyComponent;
