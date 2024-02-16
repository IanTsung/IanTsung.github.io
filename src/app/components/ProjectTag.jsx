import React from 'react'

const ProjectTag = ({ tag, onClick, isSelected }) => {

	const buttonStyles = isSelected
		? "text-white border-primary-500"
		: "text-[#ADB7BE] border-slate-600 hover:border-white"

	return (
		<button
			className={`rounded-full border-2 px-4 py-2 sm:px-6 sm:py-3 text-md sm:text-xl cursor-pointer ${buttonStyles}`}
			onClick={() => onClick(tag)}
		>
			{tag}
		</button>
	)
}

export default ProjectTag