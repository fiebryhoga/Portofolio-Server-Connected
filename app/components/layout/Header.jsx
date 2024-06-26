import React from "react";

const Header = ({ children }) => {
  return (
    <div className="pl-6 sm:pl-12  md:pl-12 lg:pl-28 w-full">
      <h1 className="text-lg font-bold text-[#329f9a] tracking-wider font-sans">
        {children}
      </h1>
    </div>
  );
};

export default Header;
