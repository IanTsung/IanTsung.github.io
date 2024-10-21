import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TechStackButton.module.css'; // Import the CSS module

const TechStackButton = ({ title, color, icon, link }) => {

  const darkMode = useSelector((state) => state.darkMode);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <li className={`relative grid place-items-center w-48 h-48 ${darkMode ? '' : styles.light}`} style={{ '--color': color }}>
        {/* Base Circle */}
        <span className={styles.base}></span>

        {/* Title */}
        <span className={styles.title}>{title}</span>

        {/* Icon */}
        <span className={styles.icon}>
          <i className={`devicon-${icon}`}></i>
        </span>
      </li>
    </a>
  );
};

export default TechStackButton;
