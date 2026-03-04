"use client";
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, isOpen }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="flex flex-col py-4 items-center md:gap-y-4">
        {links.map((link, index) => (
          <li
            key={index}
            className={`transition-all duration-500 ease-in-out ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? `${index * 75}ms` : "0ms" }}
          >
            <NavLink href={link.href} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
