"use client";
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';

const NavLink = ({ href, title, onClick }) => {

  const darkMode = useSelector((state) => state.darkMode);

  const textColor = darkMode ? "text-[#C3CED6] hover:text-white" : "text-[#565B5E] hover:text-black"

  return (
    <Link href={href} onClick={onClick} className={`block py-2 pl-3 pr-4 sm:text-lg lg:text-xl rounded md:p-0 font-semibold ${textColor}`}>
      {title}
    </Link>
  )
}

export default NavLink