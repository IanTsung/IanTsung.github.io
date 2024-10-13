import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links, darkMode }) => {
  return (
    <ul className="flex flex-col py-4 items-center md:gap-y-4">
      {
        links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.href} title={link.title} darkMode={darkMode}/>
          </li>
        ))
      }
    </ul>
  );
}

export default MenuOverlay