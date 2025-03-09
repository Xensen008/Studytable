import React from 'react';

const HowWeComponent = ({ 
  title = "How we come to this?",
  description = "We observed and researched for three years in a variety of student. Where The best needs more attention to do better and the student struggling needs more attention to improve their own abilities. All students need personal attention. Based on the notion of 'Personal attention' we have built our algorithm and Ai tutor to cater each children uniquely…",
  ctaText = "Read the full story  ->",
  backgroundImage = "https://dashboard.codeparrot.ai/api/image/Z83IY9G_8Dy7NbEk/image-4.png",
  onCtaClick = () => console.log("CTA clicked")
}) => {
  return (
    <div className="w-full p-4 md:p-8">
      <div className="relative w-full rounded-[20px] bg-[#2a2a2a] overflow-hidden">
        {/* Background Image */}
        <img 
          src={backgroundImage}
          alt="Background"
          className="w-full h-[418px] object-cover"
        />
        
        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[695px] flex flex-col gap-4 p-8">
            {/* Title */}
            <h1 className="text-white text-[38px] font-semibold font-['Instrument_Sans']">
              {title}
            </h1>
            
            {/* Description */}
            <p className="text-[#e5e5e5] text-[22px] leading-[34px] font-normal font-['Instrument_Sans']">
              {description}
            </p>
            
            {/* CTA Button */}
            <button 
              onClick={onCtaClick}
              className="inline-flex items-center px-4 py-2 mt-4 text-[20px] text-white underline font-medium font-['Instrument_Sans'] hover:opacity-80 transition-opacity rounded-md self-start"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeComponent;

