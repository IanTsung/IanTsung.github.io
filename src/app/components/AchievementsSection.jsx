"use client";
import React from 'react';
import AnimatedNumbers from "react-animated-numbers"

const achievementsList = [
  {
		metric: "Years of Experience",
		value: 2,
    postfix: "+"
  },
  {
		metric: "Projects Completed",
		value: 10,
    postfix: "+"
  },
	{
		metric: "Awards Earned",
		value: 7
  }
]

const AchievementsSection = ({ darkMode }) => {

	const textColor = darkMode ? "text-white" : "text-slate-800";

  return (
    <div className="px-2 py-8 sm:py-4 xl:px-8">
			<div className="flex xl:flex-col items-start justify-between rounded-md py-8 px-2 sm:px-12 md:px-20 xl:px-2 xl:h-full xl:gap-40">
				{
					achievementsList.map((achievement, index) => {
						return (
							<div
								key={index}
								className="flex flex-col items-start justify-center sm:mx-4"
							>
								<h2 className={`flex flex-row sm:gap-2 text-4xl sm:text-5xl xl:text-7xl font-bold ${textColor}`}>
									<AnimatedNumbers
										key={darkMode ? 'dark' : 'light'}
                    includeComma
                    animateToNumber={achievement.value}
                    locale="en-US"
                    className={`text-4xl sm:text-5xl xl:text-7xl font-bold ${textColor}`}
                    transitions={() => ({
                      type: "spring",
                      duration: (index * 0.75) + 1.5,
                    })}
                  />
                  {achievement.postfix}
								</h2>
								<p className="text-[#ADB7BE] text-sm">
									{achievement.metric}
								</p>
							</div>
						)
					})
				}
			</div>
		</div>
  )
}

export default AchievementsSection