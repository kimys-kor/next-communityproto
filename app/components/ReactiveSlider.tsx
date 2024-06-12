"use client";

import React, { useEffect, useRef, useState } from "react";

const list = [
  {
    content: 1,
    color: "#FF5757",
  },
  {
    content: 2,
    color: "#FFBC57",
  },
  {
    content: 3,
    color: "#FFEE57",
  },
  {
    content: 4,
    color: "#57FF86",
  },
  {
    content: 5,
    color: "#5786FF",
  },
  {
    content: 6,
    color: "#8013D7",
  },
];

const ReactiveSlider: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const itemWidth = 180;
  const totalItems = list.length; // Dynamically set totalItems based on the list length
  const buttonWidth = 40; // Assuming each button is 40px wide

  const slide = (dir: string) => {
    const containerWidth = carouselContainerRef.current?.offsetWidth || 0;
    const availableWidth = containerWidth - 2 * buttonWidth; // Adjust for buttons
    let newPos = currentPosition;

    if (dir === "next") {
      newPos = Math.max(
        currentPosition - availableWidth,
        availableWidth - itemWidth * totalItems
      );
    } else {
      newPos = Math.min(currentPosition + availableWidth, 0);
    }

    setCurrentPosition(newPos);
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentPosition(0);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="h-[200px] overflow-hidden relative"
        ref={carouselContainerRef}
      >
        <div
          className="grid transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${currentPosition}px)`,
            gridTemplateColumns: `repeat(${totalItems}, ${itemWidth}px)`,
            width: "max-content",
          }}
        >
          {list.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[180px] h-[200px] text-center leading-[200px] border border-white"
              style={{ backgroundColor: item.color }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-0 bottom-0 left-0 w-[40px] bg-white"
        onClick={() => slide("prev")}
      >
        &lt;
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 w-[40px] bg-white"
        onClick={() => slide("next")}
      >
        &gt;
      </button>
    </div>
  );
};

export default ReactiveSlider;
