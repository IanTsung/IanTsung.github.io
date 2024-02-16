import React from 'react'

const achievementsList = [
  {
		metric: "Projects",
		value: "10+"
  },
	{
		metric: "Awards",
		value: "7+"
  },
	{
		metric: "Years",
		value: "2+"
  }
]

const AchievementsSection = () => {
  return (
    <div className="px-4 py-8 sm:py-16 xl:px-16 xl:gap-16">
			<div className="flex flex-row items-center justify-between border-[#33353F] border rounded-md py-8 px-17">
				{
					achievementsList.map((achievement, index) => {
						return (
							<div
								key={index}
								className="flex flex-col items-center justify-center mx-4"
				
							>
								<h2 className="text-white text-4xl font-bold">
									{achievement.value}
								</h2>
								<p className="text-[#ADB7BE] text-base">
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