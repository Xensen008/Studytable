import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full bg-[#1a1a2e] min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content Section */}
          <div className="lg:w-1/2 text-left lg:pl-8">
            <p className="inline-flex items-center space-x-1 mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">STUDY</span>
              <span className="text-indigo-50 text-2xl font-bold">table</span>
            </p>
            
            <h1 className="space-y-4 mb-8">
              <span className="text-5xl md:text-6xl font-bold text-white block mb-2 drop-shadow-lg">
                Optimize
              </span>
              <span className="text-3xl md:text-4xl text-indigo-200/70 font-normal block">
                Your Performance For
              </span>
              <div className="flex items-center gap-4 text-4xl md:text-5xl font-bold">
                <span className="text-indigo-400">JEE</span>
                <span className="text-purple-400">NEET</span>
                <span className="text-pink-400">Boards</span>
              </div>
            </h1>
            
            <p className="text-lg mb-10 text-indigo-200/70 max-w-2xl leading-relaxed">
              Your personal AI-Tutor for all academic needs. Whether its school exam, boards or competitive exams we plan, manage, and help you clear your doubts instantly. For students of class 10th, 11th and 12th (CBSE) and preparing for all medical or engineering entrance exams.
            </p>
            
            <div className="flex flex-wrap gap-6">
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
            </div>
          </div>

          {/* Right Image Section - Redesigned */}
          <div className="lg:w-1/2 relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-xl pt-10">
              {/* Main Image with Container */}
              <div className="relative z-10 bg-gradient-to-b from-indigo-500/5 to-purple-500/5 rounded-[2rem] p-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent rounded-[2rem] blur-2xl"></div>
                <img 
                  src="./Image/img.png" 
                  alt="Person using STUDYtable" 
                  className="w-[420px] h-auto object-contain mx-auto scale-x-[-1] 
                    drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] 
                    filter brightness-110 contrast-105"
                />
              </div>

              {/* Floating Elements Container */}
              <div className="absolute inset-0 z-20">
                {/* Mathematical Formulas */}
                <div className="absolute -top-6 left-20 animate-float-slow">
                  <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-indigo-500/20">
                    <span className="text-indigo-100 font-mono">∫e^x dx</span>
                  </div>
                </div>

                <div className="absolute top-1/4 -right-8 animate-float">
                  <div className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-lg border border-purple-500/20">
                    <span className="text-purple-100 font-mono text-sm">lim x→∞</span>
                  </div>
                </div>

                <div className="absolute bottom-1/3 -left-10 animate-float-slow">
                  <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-pink-500/20">
                    <span className="text-pink-100 font-mono">Σ(n²)</span>
                  </div>
                </div>
              </div>

              {/* Exam Categories - Redesigned */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
