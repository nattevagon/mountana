import React, { useEffect } from 'react';
import { Carousel } from "@material-tailwind/react";

export default function Banner(props) {
  useEffect(() => {
  }, []);

  return (
    <Carousel
      className="rounded-xl z-0"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      autoplay={true}
      loop={true}
    >
      {props.data.map((item, i) => {
        return (
          <img
            src={item.url}
            alt="image 1"
            className="h-full w-full object-cover max-h-40 sm:max-h-60 md:max-h-80 lg:max-h-100"
          />
        )
      })}
    </Carousel>
  )
}
