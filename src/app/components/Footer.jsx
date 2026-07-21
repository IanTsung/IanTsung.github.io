import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-apple-line bg-apple-bg text-apple-dim">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <span className="font-zolasixx text-lg tracking-wider text-apple-text">
          IAN
        </span>
        <p>Copyright © {new Date().getFullYear()} Ian Cong. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
