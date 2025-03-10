import React from 'react';

const NoticeButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
        <img 
          src="./Image/pin.png"
          alt="Pin icon"
          className="w-5 h-5 brightness-200 contrast-200"
        />
      </div>
      <span className="text-lg font-medium bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent group-hover:from-indigo-200 group-hover:to-white transition-all duration-300">
        Notice Board
      </span>
    </button>
  );
};

NoticeButton.defaultProps = {
  onClick: () => console.log('Notice Board clicked')
};

export default NoticeButton;
