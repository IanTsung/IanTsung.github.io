"use client";
import React from "react";

const HeroVideo = () => (
  <video
    src="/videos/hero-background.mp4"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover z-0"
    style={{ filter: "contrast(1.08) saturate(1.15)" }}
    aria-hidden="true"
  />
);

export default HeroVideo;
