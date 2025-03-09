import React from 'react';

const HowWeComponent = ({ 
  title = "How we come to this?",
  description = "We observed and researched for three years in a variety of student. Where The best needs more attention to do better and the student struggling needs more attention to improve their own abilities. All students need personal attention. Based on the notion of 'Personal attention' we have built our algorithm and Ai tutor to cater each children uniquely…",
  ctaText = "Read the full story",
}) => {
  return (
    <div className="bg-[#1a1a2e] py-24 relative overflow-hidden">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="space-y-8 text-center">
          {/* Title */}
          <div className="relative inline-block">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              {title}
            </h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          </div>

          {/* Description */}
          <p className="text-lg text-indigo-200/80 leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 px-6 py-2 text-indigo-200 hover:text-white transition-colors group">
            {ctaText}
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '3+', label: 'Years of Research' },
            { number: '1000+', label: 'Students Analyzed' },
            { number: '24/7', label: 'Personal Attention' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-indigo-200/60 text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeComponent;

