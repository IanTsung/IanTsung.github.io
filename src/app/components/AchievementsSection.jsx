import React from 'react'

const achievementsList = [
  {
		metric: "Years of Experience",
		value: "2+"
  },
  {
		metric: "Projects Completed",
		value: "10+"
  },
	{
		metric: "Awards Earned",
		value: "7+"
  }
]

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
								<h2 className="text-white text-4xl sm:text-5xl xl:text-7xl font-bold">
									{achievement.value}
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