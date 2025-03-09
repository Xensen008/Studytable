import React from 'react';

const StudyComponent = ({ 
  title = "One Place For All", 
  items = ["Scholarship Test", "JEE Test", "Tuition Test", "Board Test", "Unit Test"] 
}) => {
  return (
    <div className="flex items-center justify-center p-8 bg-[#2a2a2a] rounded-2xl">
      <div className="flex gap-x-40 items-center">
        {/* Left side with image and text */}
        <div className="relative">
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z827XsaO8SxPzRkN/image-43.png"
            alt="Study illustration"
            className="w-[392px] h-[377px]"
          />
          <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white font-semibold text-sm">
            STUDYtable
          </p>
        </div>

        {/* Right side with content */}
        <div className="relative">
          {/* Content */}
          <div className="relative z-10 pt-16">
            <h2 className="text-white text-lg font-bold mb-6">
              {title}
            </h2>
            
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-x-4">
                  <img 
                    src={`https://dashboard.codeparrot.ai/api/image/Z827XsaO8SxPzRkN/ion-chec${index > 0 ? '-' + (index + 1) : ''}.png`}
                    alt="Checkbox"
                    className="w-4 h-4"
                  />
                  <span className="text-white text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyComponent;
