"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const HireMeButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="mailto:zhaoyan.ian.cong@gmail.com"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:inline-flex fixed bottom-8 right-8 z-40 items-center gap-2 px-5 py-3 rounded-full bg-apple-blue text-white text-sm font-medium shadow-blue-glow hover:bg-apple-blue-hover transition-colors"
        >
          <EnvelopeIcon className="w-4 h-4" />
          Hire me
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default HireMeButton;
