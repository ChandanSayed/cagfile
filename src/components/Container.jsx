import React from 'react';

const Container = ({ children }) => {
  return <div className="max-w-[1640px] mx-auto w-full px-5 relative z-10">{children}</div>;
};

export default Container;
