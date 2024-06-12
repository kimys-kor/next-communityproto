"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResponsiveSlider: React.FC = () => {
  const settings = {
    variableWidth: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // when the screen size is <= 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // when the screen size is <= 640px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "/images/11.PNG",
    "/images/22.PNG",
    "/images/33.PNG",
    "/images/44.PNG",
  ];

  return (
    <div className="container mx-auto overflow-scroll">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              style={{ width: 200 }}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
