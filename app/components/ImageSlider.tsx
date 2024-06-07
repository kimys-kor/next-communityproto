import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageItem {
  img: StaticImageData;
  desc: string;
}

interface ImageSliderProps {
  items: ImageItem[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
          onClick={prevSlide}
        >
          {/* Left arrow icon */}
          {/* You can replace the placeholder below with your actual left arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex space-x-4 overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className={`transform transition-transform ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <Image src={item.img} alt={item.desc} width={300} height={200} />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
          onClick={nextSlide}
        >
          {/* Right arrow icon */}
          {/* You can replace the placeholder below with your actual right arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
