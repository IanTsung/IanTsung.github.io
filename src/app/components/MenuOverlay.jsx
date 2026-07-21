"use client";
import React from "react";

const MenuOverlay = ({ links, isOpen, onNavigate }) => {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out bg-apple-bg/95 backdrop-blur-xl ${
        isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="flex flex-col divide-y divide-apple-line px-6">
        {links.map((link, index) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => onNavigate?.(e, link.href)}
              className={`block py-4 text-lg font-medium text-apple-text hover:opacity-80 transition-all duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 60}ms` : "0ms" }}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
