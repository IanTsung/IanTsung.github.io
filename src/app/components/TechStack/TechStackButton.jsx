"use client";
import React from "react";
import styles from "./TechStackButton.module.css";

const TechStackButton = ({ title, color, icon }) => {
  return (
    <div className={styles.tile} style={{ "--color": color }}>
      <span className={styles.base} aria-hidden="true" />
      <span className={styles.title}>{title}</span>
      <span className={styles.icon}>
        <i className={`devicon-${icon}`} aria-hidden="true" />
      </span>
      <span className="sr-only">{title}</span>
    </div>
  );
};

export default TechStackButton;
