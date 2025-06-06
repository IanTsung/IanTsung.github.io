"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  const darkMode = useSelector((state) => state.darkMode);

  const textColor = darkMode ? "text-white" : "text-slate-800";

  const settings = {
    infinite: true,
    speed: 1000,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: false,
    fade: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const experiences = [
    {
      title: "Back End Developer",
      company: "Viva Leisure",
      companyIcon: "/work/viva_leisure.jpg",
      duration: "Oct 2024 - Present",
      description:
        "Responsible for serverless backend development, using AWS CDK and TypeScript.",
      skills: ["AWS CDK", "TypeScript", "Serverless", "DynamoDB"],
    },
    {
      title: "Full Stack Developer",
      company: "Qixin Co Pty Ltd",
      companyIcon: "/work/qixin.png",
      duration: "Sep 2024 - Oct 2024",
      description:
        "Spearheaded both backend and frontend development, using React, Express.js, and Firebase.",
      skills: ["React", "Express.js", "Firebase", "Redux"],
    },
    {
      title: "Research Assistant",
      company: "Mandala Partners",
      companyIcon: "/work/mandala_partners.jpg",
      duration: "Feb 2024 - Jun 2024",
      description:
        "Responsible for the development of a zero-shot learning tool for economic analysis of corporate documents.",
      skills: ["AWS SageMaker", "Python", "NLP", "Zero-shot Learning"],
    },
  ];

  return (
    <section id="experience">
      <h2 className={`text-center text-4xl font-bold mt-4 mb-12 ${textColor}`}>
        Experience
      </h2>
      <Slider {...settings}>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            companyIcon={experience.companyIcon}
            duration={experience.duration}
            description={experience.description}
            skills={experience.skills}
          />
        ))}
      </Slider>
    </section>
  );
};

export default ExperienceSection;
