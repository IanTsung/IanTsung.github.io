"use client";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const years = new Date().getFullYear() - 2022;

const initialAchievementsList = [
  {
    metric: "Years of Experience",
    value: years,
    postfix: "+",
  },
  {
    metric: "Projects Completed",
    value: 16,
    postfix: "+",
  },
  {
    metric: "Awards Earned",
    value: 5,
  },
];

const getGitHubRepos = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.public_repos;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
};

const AchievementsSection = () => {
  const darkMode = useSelector((state) => state.darkMode);

  const numColor = darkMode ? "text-white" : "text-slate-800";
  const textColor = darkMode ? "text-[#ADB7BE]" : "text-gray-700";

  const [achievementsList, setAchievementsList] = useState(
    initialAchievementsList
  );

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      const repoCount = await getGitHubRepos("IanTsung");
      if (repoCount !== null) {
        setAchievementsList((prevList) =>
          prevList.map((achievement) =>
            achievement.metric === "Projects Completed"
              ? { ...achievement, value: repoCount }
              : achievement
          )
        );
      }
    };

    fetchGitHubRepos();
  }, []);

  return (
    <div className="px-2 py-8 sm:py-4 xl:px-8">
      <div className="flex xl:flex-col items-start justify-between rounded-md py-8 px-2 sm:px-12 md:px-20 xl:px-2 xl:h-full xl:gap-40">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start justify-center sm:mx-4"
            >
              <h2
                className={`flex flex-row sm:gap-2 text-4xl sm:text-5xl xl:text-7xl font-bold ${numColor}`}
              >
                <AnimatedNumbers
                  key={darkMode ? "dark" : "light"}
                  includeComma
                  animateToNumber={achievement.value}
                  locale="en-US"
                  className={`text-4xl sm:text-5xl xl:text-7xl font-bold ${numColor}`}
                  transitions={() => ({
                    type: "spring",
                    duration: index * 0.75 + 1.5,
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className={`${textColor} text-sm`}>{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
