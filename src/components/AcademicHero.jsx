import React from 'react';

const AcademicHero = ({ 
  title = "Carfted for your all academic needs",
  buttonText = "Get your Entry",
  onButtonClick = () => console.log("Button clicked")
}) => {
  return (
    <div className="w-full px-4 py-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl md:text-[68px] font-semibold text-center leading-tight">
        {title}
      </h1>
      
      <button 
        onClick={onButtonClick}
        className="px-8 py-2 bg-[#212121] text-[#e5e5e5] rounded-md hover:bg-[#313131] transition-colors duration-200 text-lg font-semibold"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AcademicHero;

