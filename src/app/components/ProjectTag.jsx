"use client";
import React from "react";
import { useSelector } from "react-redux";

const ProjectTag = ({ tag, onClick, isSelected }) => {
  const darkMode = useSelector((state) => state.darkMode);

  const buttonStyles = isSelected
    ? `${darkMode ? "text-white" : "text-slate-800"} border-primary-500`
    : `${
        darkMode
          ? "text-[#ADB7BE] border-slate-600 hover:border-primary-300 hover:text-slate-200"
          : "text-slate-300 border-slate-300 hover:border-primary-300 hover:text-slate-400"
      }`;

  return (
    <button
      className={`rounded-full border-2 px-4 py-2 sm:px-6 sm:py-3 text-md sm:text-xl font-semibold cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default ProjectTag;
