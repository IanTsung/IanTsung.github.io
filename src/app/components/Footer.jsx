import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector((state) => state.darkMode);

  const textColor = darkMode ? "text-white" : "text-slate-950";

  return (
    <footer
      className={`footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent ${textColor}`}
    >
      <div className="flex justify-center items-center gap-4 md:gap-6 p-12">
        <span className="font-zolasixx text-xl md:text-2xl">IAN</span>
        <p className={`text-sm md:text-base ${textColor} font-sans`}>
          2024 © All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
