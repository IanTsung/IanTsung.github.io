"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

const circleText = "Data Scientist  Web Developer  Mobile Developer  ";

const HireMeButton = () => {
    const buttonRef = useRef(null);
    const circleTextRef = useRef(null);

    useEffect(() => {
        if (circleTextRef.current) {
            gsap.to(circleTextRef.current, {
                rotation: 360,
                repeat: -1,
                duration: 20,
                ease: "linear",   
            });
        }
    }, []);

    return (
        <div className="fixed bottom-5 right-5 flex items-center justify-center z-50">
            <div className="relative flex justify-center items-center">
                <div ref={circleTextRef} className="absolute">
                    {circleText.split("").map((char, index) => (
                        <span
                            key={index}
                            style={{ 
                                transform: `rotate(${-index * 360 / circleText.length}deg) translateY(34px)`,
                                transformOrigin: "0% 0%"
                            }}
                            className="absolute text-[8px] text-white font-mono"
                        >
                            {char}
                        </span>
                    ))}
                </div>
                <a href="/hire-me" ref={buttonRef} className="bg-slate-100 text-black rounded-full hover:bg-gray-200 transition duration-300 ease-in-out flex items-center justify-center w-16 h-16">
                    <span className="text-lg font-bold font-mono text-center leading-tight">HIRE ME</span>
                </a>
            </div>
        </div>
    );
};

export default HireMeButton;
