import React from "react";

const Header = ({ children }) => {
  return (
    <div className="pl-12 md:w-64 md:pl-28">
      <h1 className="text-sm font-bold text-[#329f9a] tracking-wider font-sans">
        {children}
      </h1>
    </div>
  );
};

export default Header;
