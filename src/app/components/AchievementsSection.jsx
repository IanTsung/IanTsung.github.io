"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const years = new Date().getFullYear() - 2022;

const initialAchievementsList = [
  { metric: "Years of Experience", value: years, postfix: "+" },
  { metric: "Projects Completed", value: 16, postfix: "+" },
  { metric: "Awards Earned", value: 5 },
];

const getGitHubRepos = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.public_repos;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
};

const AchievementsSection = () => {
  const [achievementsList, setAchievementsList] = useState(
    initialAchievementsList
  );

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      const repoCount = await getGitHubRepos("IanTsung");
      if (repoCount !== null) {
        setAchievementsList((prev) =>
          prev.map((a) =>
            a.metric === "Projects Completed" ? { ...a, value: repoCount } : a
          )
        );
      }
    };
    fetchGitHubRepos();
  }, []);

  return (
    <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-apple-line pt-16">
      {achievementsList.map((a, index) => (
        <div key={a.metric} className="text-center md:text-left">
          <div className="flex items-baseline justify-center md:justify-start gap-1 text-apple-text">
            <span className="apple-heading text-5xl md:text-6xl lg:text-7xl">
              <AnimatedNumbers
                includeComma
                animateToNumber={a.value}
                locale="en-US"
                className="apple-heading text-5xl md:text-6xl lg:text-7xl"
                transitions={() => ({
                  type: "spring",
                  duration: index * 0.5 + 1.5,
                })}
              />
            </span>
            {a.postfix && (
              <span className="apple-heading text-5xl md:text-6xl lg:text-7xl text-apple-blue">
                {a.postfix}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm uppercase tracking-[0.15em] text-apple-dim">
            {a.metric}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AchievementsSection;
