import React from 'react';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div>
      <div
        className="h-32 sm:h-52 xl:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="relative text-white rounded-b-xl mt-1 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mr-10">{description}</p>
        <Link href={gitUrl} className="absolute bottom-5 right-5 rounded-full bg-slate-100 w-10 h-10 flex items-center justify-center">
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-[#181818]" />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard