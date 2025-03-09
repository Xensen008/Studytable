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
    <footer className="bg-[#1a1a2e] w-full py-16 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Notice Button */}
        <div className="flex justify-center mb-16">
          <NoticeButton />
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo Section */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">STUDY</span>
              <span className="text-indigo-50">table</span>
            </h1>
            <p className="text-indigo-200/60 text-sm">
              © Copyright 2025 Studytable
            </p>
          </div>

          {/* Socials Section */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Connect With Us</h2>
            <div className="space-y-4">
              {[
                { name: 'Instagram', icon: 'mdi-inst.png' },
                { name: "What's App", icon: 'ic-outli.png' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="flex items-center gap-3 text-indigo-200/70 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
                    <img 
                      src={`https://dashboard.codeparrot.ai/api/image/Z83KzdG_8Dy7NbEq/${social.icon}`}
                      alt={social.name}
                      className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Blogs Section */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Latest Insights</h2>
            <div className="space-y-3">
              {blogLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-sm text-indigo-200/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
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
