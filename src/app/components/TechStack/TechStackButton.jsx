import React from 'react';
import styles from './TechStackButton.module.css'; // Import the CSS module

const TechStackButton = ({ title, color, icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <li className="relative grid place-items-center w-48 h-48" style={{ '--color': color }}>
        {/* Base Circle */}
        <span className={styles.base}></span>

        {/* Title */}
        <span className={styles.title}>{title}</span>

        {/* Icon */}
        <span className={styles.icon}>
          <ion-icon name={icon}></ion-icon>
        </span>
      </li>
    </a>
  );
};

export default TechStackButton;
