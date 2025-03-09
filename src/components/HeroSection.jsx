import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full bg-[#2A2A2A] p-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content Section */}
          <div className="lg:w-1/2 text-left p-4">
            <p className="text-white text-xl uppercase tracking-wider mb-2 font-bold relative">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">STUDY</span>
              <span className="text-white">table</span>
              <span className="absolute -bottom-1 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </p>
            
            <h1 className="mb-6">
              <span className="text-5xl md:text-6xl font-bold text-white block mb-2 animate-fade-in-down">Optimize</span>
              <span className="text-3xl md:text-4xl text-gray-400 font-normal block mb-2 animate-fade-in-left">Your Performance For</span>
              <span className="text-4xl md:text-5xl font-bold text-white block animate-fade-in-right">
                <span className="text-blue-400">JEE</span>, 
                <span className="text-green-400">NEET</span>, and 
                <span className="text-yellow-400">Boards</span>
              </span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-300 max-w-2xl leading-relaxed">
              Your personal AI-Tutor for all academic needs. Whether its school exam, boards or competitive exams we plan, manage, and help you clear your doubts instantly. For students of class 10th, 11th and 12th (CBSE) and preparing for all medical or engineering entrance exams.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-md hover:opacity-90 transition-all font-medium transform hover:scale-105">
                Apply for admission
              </button>
              <button className="text-white py-3 px-6 border border-white/40 rounded-md hover:bg-white/10 transition-all hover:border-white group">
                <span className="flex items-center">
                  Sign In 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 p-4 relative flex justify-center">
            <div className="relative">
              <img 
                src="./Image/img.png" 
                alt="Person using STUDYtable" 
                className="w-[350px] h-auto object-contain mx-auto transform scale-x-[-1] filter brightness-110 contrast-110 drop-shadow-[0_0_15px_rgba(100,200,255,0.3)]"
              />
              
              {/* Floating exam categories box */}
              <div className="absolute -right-10 top-1/4 bg-[#333333]/85 p-5 rounded-lg shadow-xl border border-gray-700 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 border-b border-white/20 pb-2">Exam Categories</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    NEET
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    JEE
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    Tuition
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Boards
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    Scholarship
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    School Test
                  </li>
                </ul>
              </div>
              
              {/* Abstract study elements */}
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-blue-500/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white text-2xl font-bold">π</span>
              </div>
              <div className="absolute bottom-10 -left-10 w-20 h-10 bg-green-500/20 backdrop-blur-sm rounded flex items-center justify-center">
                <span className="text-white text-sm">E=mc²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
