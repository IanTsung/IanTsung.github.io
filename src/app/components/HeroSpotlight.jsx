"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const SPOTLIGHT_RADIUS = 480;
const SPRING = { stiffness: 220, damping: 28, mass: 0.6 };

const HeroSpotlight = () => {
  const rootRef = useRef(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);

  useEffect(() => {
    const el = rootRef.current;
    const parent = el?.parentElement;
    if (!parent) return;

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };
    const onLeave = () => {
      const rect = parent.getBoundingClientRect();
      x.set(rect.width / 2);
      y.set(-SPOTLIGHT_RADIUS);
    };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y]);

  const background = useMotionTemplate`radial-gradient(${SPOTLIGHT_RADIUS}px circle at ${sx}px ${sy}px, rgb(var(--apple-blue-rgb) / 0.22), transparent 65%)`;

  return (
    <motion.div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ background }}
      aria-hidden="true"
    />
  );
};

export default HeroSpotlight;
