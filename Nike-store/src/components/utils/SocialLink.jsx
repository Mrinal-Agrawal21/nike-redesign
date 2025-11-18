import React from 'react';

const SocialLink = ({ icon: Icon }) => {
  return (
    <a href="#" className="flex items-center justify-center">
      <Icon className="w-6 h-6  hover:text-nike transition-all duration-200 hover:scale-110" />
    </a>
  );
};

export default SocialLink;