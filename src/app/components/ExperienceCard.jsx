"use client";
import React from "react";

const ExperienceCard = ({
  title,
  company,
  companyIcon,
  duration,
  description,
  skills,
}) => {
  return (
    <article className="card p-8 md:p-10 h-full flex flex-col group transition-transform duration-500 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl overflow-hidden bg-apple-elev shrink-0">
          <img
            src={companyIcon}
            alt={`${company} logo`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg md:text-xl font-semibold text-apple-text truncate">
            {company}
          </h3>
          <p className="text-sm text-apple-dim">{duration}</p>
        </div>
      </div>

      <h4 className="mt-6 text-2xl md:text-3xl apple-heading text-apple-text">
        {title}
      </h4>
      <p className="mt-3 text-apple-dim text-base leading-relaxed flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs text-apple-text/85 bg-apple-tint-b border border-apple-line rounded-full px-3 py-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ExperienceCard;
