"use client";
import React from 'react';
import dynamic from 'next/dynamic';

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

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  return (
    <div className="px-2 py-8 sm:py-4 xl:px-8">
			<div className="flex xl:flex-col items-start justify-between rounded-md py-8 px-2 sm:px-12 md:px-20 xl:px-2 xl:h-full">
				{
					achievementsList.map((achievement, index) => {
						return (
							<div
								key={index}
								className="flex flex-col items-start justify-center sm:mx-4"
				
							>
								<h2 className="flex flex-row gap-1 text-white text-4xl sm:text-5xl xl:text-7xl font-bold">
									<AnimatedNumbers
                    includeComma
                    animateToNumber={achievement.value}
                    locale="en-US"
                    className="text-white text-4xl sm:text-5xl xl:text-7xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
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