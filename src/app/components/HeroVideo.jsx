"use client";
import React, { useEffect, useRef } from "react";

const VIDEO_SRC = "/videos/hero-background.mp4";
const SEEK_EASING = 0.2; // higher = snappier, lower = more inertia
const SEEK_THRESHOLD = 0.04; // seconds — skip micro-seeks that stutter

const HeroVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = video?.parentElement;
    if (!video || !section) return;

    let rafId = 0;
    let targetTime = 0;
    let ready = false;

    const onReady = () => {
      ready = true;
      video.pause();
    };

    const computeTarget = () => {
      if (!video.duration) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / Math.max(1, rect.height))
      );
      targetTime = progress * video.duration;
    };

    const tick = () => {
      if (ready && video.duration) {
        const diff = targetTime - video.currentTime;
        if (Math.abs(diff) > SEEK_THRESHOLD) {
          const next = video.currentTime + diff * SEEK_EASING;
          video.currentTime = Math.max(0, Math.min(video.duration, next));
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    video.addEventListener("loadeddata", onReady);
    if (video.readyState >= 2) onReady();

    window.addEventListener("scroll", computeTarget, { passive: true });
    window.addEventListener("resize", computeTarget);
    computeTarget();
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadeddata", onReady);
      window.removeEventListener("scroll", computeTarget);
      window.removeEventListener("resize", computeTarget);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={VIDEO_SRC}
      preload="auto"
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      aria-hidden="true"
    />
  );
};

export default HeroVideo;
