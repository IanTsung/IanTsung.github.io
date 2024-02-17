import React from 'react';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="relative hover:scale-105 duration-500">
      <div
        className="h-32 sm:h-52 xl:h-72 rounded-t-xl relative group z-10"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="relative text-white rounded-b-xl bg-[#181818] py-6 px-4 z-10">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mr-11">{description}</p>
        <Link href={gitUrl} className="absolute bottom-5 right-5 rounded-full bg-slate-100 w-10 h-10 flex items-center justify-center">
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-[#181818]" />
        </Link>
      </div>
      <div className="absolute bottom-[-10px] right-[-10px] w-[100%] h-[100%] bg-slate-100 bg-opacity-70 rounded-xl z-0" />
    </div>
  )
}

export default ProjectCard