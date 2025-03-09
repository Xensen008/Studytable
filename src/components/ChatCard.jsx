import React from 'react';

const ChatCard = ({ messages = [
  { text: "Did you get the concept?", sender: "user" },
  { text: "Yes, it's based on the principle of the maximum height of a projectile.", sender: "assistant" },
  { text: "That's correct.", sender: "user" },
  { text: "But I forgot the formula.", sender: "assistant" },
  { text: "Okay, Hmax=u2g or us usin²0/2g", sender: "user" },
  { text: "Let me calculate the answer", sender: "assistant" }
] }) => {
  return (
    <div className="bg-[#2a2a2a] rounded-[21px] p-6 w-full min-h-[505px] relative">
      {/* Profile Image - moved to right side */}
      <div className="absolute top-7 right-7">
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z82uFcaO8SxPzRj7/image-5.png"
          alt="Profile"
          className="w-[85px] h-[85px] rounded-full"
        />
      </div>

      {/* Chat Messages - moved to left side */}
      <div className="flex flex-col gap-4 max-w-[60%] mr-auto ml-4 mt-24">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`
              px-4 py-2.5 
              border border-white rounded-[7px]
              text-white text-[15px] font-['Instrument_Sans']
              ${message.sender === 'user' ? '' : ''}
            `}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Study Image - repositioned to left */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z82uFcaO8SxPzRj7/image-43.png"
            alt="Study"
            className="w-[287px] h-[276px]"
          />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white font-semibold text-sm">
            STUDYtable
          </div>
        </div>
      </div>

      {/* Formula Image - repositioned to right */}
      <div className="absolute bottom-24 right-32">
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z82uFcaO8SxPzRj7/image-42.png"
          alt="Formula"
          className="w-[225px] h-[98px]"
        />
      </div>
    </div>
  );
};

export default ChatCard;
