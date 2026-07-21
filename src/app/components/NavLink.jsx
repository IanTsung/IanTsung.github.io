"use client";
import Link from "next/link";
import React from "react";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-[13px] text-apple-text/80 hover:text-apple-text transition-colors duration-200"
    >
      {title}
    </Link>
  );
};

export default NavLink;
