"use client";
import React from "react";
import { useSelector } from "react-redux";
import TechStackButton from "./TechStackButton"; // Import the button component

const buttonData = {
  frontend: [
    { title: "HTML", color: "#E34F26", icon: "html5-plain" },
    { title: "CSS", color: "#1572B6", icon: "css3-plain" },
    { title: "TypeScript", color: "#3178C6", icon: "typescript-plain" },
    { title: "React", color: "#61DAFB", icon: "react-original" },
    { title: "Redux", color: "#764ABC", icon: "redux-original" },
    { title: "Tailwind", color: "#06B6D4", icon: "tailwindcss-original" },
    { title: "SASS", color: "#CC6699", icon: "sass-original" },
    { title: "Flutter", color: "#02569B", icon: "flutter-plain" },
  ],
  backend: [
    { title: "Node.JS", color: "#339933", icon: "nodejs-plain-wordmark" },
    { title: "Express", color: "#888888", icon: "express-original" },
    { title: "Django", color: "#44B78B", icon: "django-plain" },
    { title: "ASP.NET", color: "#512BD4", icon: "dotnetcore-plain" },
    { title: "GraphQL", color: "#E10098", icon: "graphql-plain" },
    { title: "Dart", color: "#0175C2", icon: "dart-plain" },
    { title: "Rust", color: "#F74C00", icon: "rust-original" },
  ],
  cloud: [
    {
      title: "AWS",
      color: "#FF9900",
      icon: "amazonwebservices-plain-wordmark",
    },
    { title: "Azure", color: "#0089D6", icon: "azure-plain" },
    { title: "GCP", color: "#4285F4", icon: "googlecloud-plain" },
  ],
  database: [
    { title: "MongoDB", color: "#47A248", icon: "mongodb-plain" },
    { title: "DynamoDB", color: "#4053D6", icon: "dynamodb-plain" },
    { title: "PostgreSQL", color: "#336791", icon: "postgresql-plain" },
  ],
  devops: [
    { title: "Docker", color: "#2496ED", icon: "docker-plain" },
    { title: "Jenkins", color: "#D24939", icon: "jenkins-plain" },
    { title: "Kubernetes", color: "#326CE5", icon: "kubernetes-plain" },
  ],
};

const TechStackList = () => {
  const darkMode = useSelector((state) => state.darkMode);

  const textColor = darkMode ? "text-white" : "text-slate-800";

  return (
    <div>
      <h3 className={`text-center text-2xl my-12 font-semibold ${textColor}`}>
        Frontend
      </h3>
      <ul className="flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 mt-36">
        {buttonData.frontend.map((button, index) => (
          <TechStackButton
            key={index}
            title={button.title}
            color={button.color}
            icon={button.icon}
            link={button.link}
          />
        ))}
      </ul>

      <h3 className={`text-center text-2xl my-12 font-semibold ${textColor}`}>
        Backend
      </h3>
      <ul className="flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 mt-36">
        {buttonData.backend.map((button, index) => (
          <TechStackButton
            key={index}
            title={button.title}
            color={button.color}
            icon={button.icon}
            link={button.link}
          />
        ))}
      </ul>

      <h3 className={`text-center text-2xl my-12 font-semibold ${textColor}`}>
        Cloud Services
      </h3>
      <ul className="flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 mt-36">
        {buttonData.cloud.map((button, index) => (
          <TechStackButton
            key={index}
            title={button.title}
            color={button.color}
            icon={button.icon}
            link={button.link}
          />
        ))}
      </ul>

      <h3 className={`text-center text-2xl my-12 font-semibold ${textColor}`}>
        Database
      </h3>
      <ul className="flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 mt-36">
        {buttonData.database.map((button, index) => (
          <TechStackButton
            key={index}
            title={button.title}
            color={button.color}
            icon={button.icon}
            link={button.link}
          />
        ))}
      </ul>

      <h3 className={`text-center text-2xl my-12 font-semibold ${textColor}`}>
        DevOps
      </h3>
      <ul className="flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 mt-36">
        {buttonData.devops.map((button, index) => (
          <TechStackButton
            key={index}
            title={button.title}
            color={button.color}
            icon={button.icon}
            link={button.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default TechStackList;
