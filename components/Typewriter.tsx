"use client";
import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  minTypeSpeed: number;
  maxTypeSpeed: number;
  initDelay: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  minTypeSpeed,
  maxTypeSpeed,
  initDelay,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);

  const clicketyClack = (
    text: string,
    minTypeSpeed: number,
    maxTypeSpeed: number,
    initDelay: number
  ) => {
    let str = "";
    let typeSpeed = 0;

    text.split("").forEach((c, i) => {
      typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
      setTimeout(() => {
        str += c;
        setDisplayedText(str);
        // Toggle cursor visibility after typing is complete
        if (i === text.length - 1) {
          setTimeout(() => {
            setCursorVisible(true);
          }, 500); // Delay before showing cursor
        }
      }, initDelay + typeSpeed);
    });
  };

  useEffect(() => {
    clicketyClack(text, minTypeSpeed, maxTypeSpeed, initDelay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, minTypeSpeed, maxTypeSpeed, initDelay]);

  useEffect(() => {
    // Continuous blinking cursor effect
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Blink interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      <div className="relative">
        <div className={`typewriter-text ${className}  `}>
          <span>{">"}</span> {displayedText}{" "}
          <span className="blink-cursor">|</span>
        </div>
        {displayedText === "Hi, I'm Anzar." ? (
          <span className="justify-self-center font-normal text-slate-500">
            A Software Developer based in India
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Typewriter;
