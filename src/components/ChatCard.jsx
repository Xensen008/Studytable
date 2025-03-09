import React from 'react';

const ChatCard = ({ messages = [
  { text: "Hey! Need help with Physics?", sender: "assistant" },
  { text: "Yes, explain projectile motion", sender: "user" },
  { text: "It's the motion of an object thrown into space along a curved path 📝", sender: "assistant" },
  { text: "What's the max height formula?", sender: "user" },
  { text: "The formula is Hmax = u²sin²θ/2g ✨", sender: "assistant", typing: true }
] }) => {
  return (
    <div className="bg-gradient-to-br from-[#1e1e32] to-[#2b2b45] rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full relative overflow-hidden border border-indigo-500/20">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-indigo-100 font-medium text-sm sm:text-base">AI Tutor Online</span>
        </div>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z82uFcaO8SxPzRj7/image-5.png"
          alt="AI Tutor"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-purple-500/30"
        />
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6 max-h-[300px] overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`
              px-3 py-2 sm:px-4 sm:py-2.5 max-w-[85%] sm:max-w-[80%]
              rounded-xl sm:rounded-2xl
              ${message.sender === 'user' 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' 
                : 'bg-white/10 text-indigo-100 backdrop-blur-sm'
              }
              ${message.typing ? 'animate-pulse' : ''}
            `}>
              <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Elements */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 bg-gradient-to-t from-[#1e1e32] to-transparent">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex-1 bg-white/5 rounded-lg sm:rounded-xl border border-indigo-500/20 backdrop-blur-sm p-2 sm:p-3">
            <input 
              type="text" 
              placeholder="Ask your doubt..."
              className="w-full bg-transparent text-indigo-100 placeholder-indigo-300/50 outline-none text-xs sm:text-sm"
            />
          </div>
          <button className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition-opacity">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Formula Elements */}
      <div className="absolute top-20 right-8 rotate-12 opacity-20">
        <span className="text-indigo-300 font-mono text-sm">∫(x²+2x)dx</span>
      </div>
      <div className="absolute bottom-32 left-8 -rotate-6 opacity-20">
        <span className="text-purple-300 font-mono text-sm">E=mc²</span>
      </div>
    </div>
  );
};

export default ChatCard;
