"use client";
import React from "react";

const ProjectTag = ({ tag, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(tag)}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
        isSelected
          ? "bg-apple-text text-apple-bg border-apple-text"
          : "bg-transparent text-apple-dim border-apple-line hover:text-apple-text hover:border-apple-line-strong"
      }`}
    >
      {tag}
    </button>
  );
};

export default ProjectTag;
