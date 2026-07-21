"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={gitUrl}
      className="group block card overflow-hidden h-full transition-all duration-500 hover:-translate-y-1 hover:border-apple-line-strong"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-apple-elev">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="p-6 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h5 className="text-lg md:text-xl font-semibold text-apple-text truncate">
            {title}
          </h5>
          <p className="mt-1 text-sm text-apple-dim line-clamp-2">
            {description}
          </p>
        </div>
        <div className="shrink-0 w-9 h-9 rounded-full bg-apple-tint-b border border-apple-line flex items-center justify-center group-hover:bg-apple-blue group-hover:border-apple-blue transition-colors duration-300">
          <ArrowUpRightIcon className="w-4 h-4 text-apple-text group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
