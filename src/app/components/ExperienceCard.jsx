"use client";
import React from 'react';
import { useSelector } from 'react-redux';

const ExperienceCard = ({ title, company, companyIcon, duration, description, skills }) => {

  const darkMode = useSelector((state) => state.darkMode);

  const titleColor = darkMode ? "text-white" : "text-gray-800";
  const companyColor = darkMode ? "text-gray-300" : "text-gray-600";
  const durationColor = darkMode ? "text-gray-300" : "text-gray-600";
  const descriptionColor = darkMode ? "text-gray-300" : "text-gray-600";

  return (
    <div className="relative p-6 rounded-[1rem] text-center w-full max-w-xl mx-auto flex flex-col items-center space-y-4
                    border-2 border-transparent">
      
      {/* Company Icon */}
      <div className="w-20 h-20 flex items-center justify-center rounded-full overflow-hidden">
        <img src={companyIcon} alt={`${company} logo`} className="w-full h-full object-fill" />
      </div>

      {/* Job Title and Company */}
      <h3 className={`text-2xl font-semibold ${titleColor}`}>{title}</h3>
      <h4 className={`text-lg font-medium ${companyColor}`}>{company}</h4>
      <p className={`text-sm ${durationColor}`}>{duration}</p>

      {/* Description */}
      <p className={`mt-2 ${descriptionColor}`}>
        {description}
      </p>

      {/* Skill Tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
