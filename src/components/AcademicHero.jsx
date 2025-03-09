import React from 'react';

const AcademicHero = ({ 
  title = "Crafted for your all academic needs",
  buttonText = "Get your Entry",
  onButtonClick = () => console.log("Button clicked")
}) => {
  return (
    <div className="bg-[#1a1a2e] py-32 lg:py-40 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute inset-0 bg-[#1a1a2e]/50 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          {/* Title with enhanced styling */}
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="relative z-10 bg-gradient-to-b from-white via-indigo-100 to-indigo-200/80 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          </div>
          
          {/* Feature Pills - Moved above button */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { text: 'AI-Powered', icon: '🤖' },
              { text: 'Personalized', icon: '🎯' },
              { text: '24/7 Support', icon: '💫' }
            ].map((feature, i) => (
              <div key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-indigo-500/20 backdrop-blur-sm">
                <span className="text-indigo-200/90 text-sm flex items-center gap-2">
                  {feature.icon} {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Button with simplified design */}
          <button 
            onClick={onButtonClick}
            className="group relative px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <span className="relative z-10 text-white font-medium tracking-wide flex items-center gap-2">
              {buttonText}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicHero;

