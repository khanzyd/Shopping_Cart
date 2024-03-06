import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="md:px-[4%] px-[2%] pb-10 min-h-[calc(100vh-5rem)] bg-zinc-900">
      {children}
    </div>
  );
};

export default ContentWrapper;
