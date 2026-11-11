"use client";
import "slick-carousel/slick/slick.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { motion, useInView } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/profile";

// Auto-rotating carousel (as on v1): 2 cards on desktop, 1 below lg.
const sliderSettings = {
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: false,
  dots: true,
  swipeToSlide: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 md:py-40 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="apple-eyebrow text-center mb-4"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="apple-heading text-center text-4xl md:text-5xl lg:text-6xl mb-20"
        >
          Where I&apos;ve been
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="experience-slider -mx-3"
        >
          <Slider {...sliderSettings}>
            {experiences.map((exp) => (
              <div key={exp.company} className="px-3 py-2">
                <ExperienceCard {...exp} />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
