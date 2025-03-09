import React from 'react';
import NoticeButton from './NoticeButton';

const Footer = () => {
  const blogLinks = [
    "How we plan learning session ?",
    "How we plan assessment session ?",
    "How we manage student life ?",
    "The effective student"
  ];

  return (
    <footer className="bg-[#1b1b1b] w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Notice Button Section - Moved up and centered */}
        <div className="flex justify-center mb-8">
          <NoticeButton />
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col">
            <h1 className="text-[42px] font-semibold text-[#a3a3a3] font-inter">
              Studytable
            </h1>
            <p className="text-[#a3a3a3] text-sm mt-auto">
              © Copyright 2025 Studytable
            </p>
          </div>

          {/* Socials Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[20px] font-semibold text-[#ededed]">
              Socials
            </h2>
            <div className="flex flex-col gap-3">
              <a 
                href="#" 
                className="flex items-center gap-2 text-[#ededed] hover:text-gray-300 transition-colors"
              >
                <img 
                  src="https://dashboard.codeparrot.ai/api/image/Z83KzdG_8Dy7NbEq/mdi-inst.png" 
                  alt="Instagram" 
                  className="w-6 h-6"
                />
                <span className="text-[17px]">Instagram</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-[#ededed] hover:text-gray-300 transition-colors"
              >
                <img 
                  src="https://dashboard.codeparrot.ai/api/image/Z83KzdG_8Dy7NbEq/ic-outli.png" 
                  alt="WhatsApp" 
                  className="w-6 h-6"
                />
                <span className="text-[17px]">What's App</span>
              </a>
            </div>
          </div>

          {/* Blogs Section - Now in its own column */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[22px] font-semibold text-[#ededed]">
              Blogs
            </h2>
            <div className="flex flex-col gap-2">
              {blogLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[17px] text-[#ededed] hover:text-gray-300 transition-colors leading-6"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
