"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const NavLink = ({ href, title, onClick }) => {
  const darkMode = useSelector((state) => state.darkMode);

  const textColor = darkMode
    ? "text-[#C3CED6] hover:text-white"
    : "text-[#565B5E] hover:text-black";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block mx-1 my-2 sm:text-lg lg:text-xl rounded md:p-0 font-semibold relative group ${textColor}`}
    >
      {title}
      <span
        className={`absolute -bottom-[2px] left-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full bg-purple-600`}
      ></span>
    </Link>
  );
};

export default NavLink;
