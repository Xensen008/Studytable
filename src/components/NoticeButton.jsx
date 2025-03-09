import React from 'react';

const NoticeButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-md"
    >
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z83LtNG_8Dy7NbEr/typcn-pi.png"
        alt="Pin icon"
        className="w-6 h-6"
      />
      <span className="font-semibold text-xl">Notice Board</span>
    </button>
  );
};

NoticeButton.defaultProps = {
  onClick: () => console.log('Notice Board clicked')
};

export default NoticeButton;
