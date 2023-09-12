import React, { useEffect } from 'react';
import { Carousel } from "@material-tailwind/react";

export default function Banner(props) {
  useEffect(() => {
  }, []);

  return (
    <Carousel className="rounded-xl">
      {props.data.map((item, i) => {
        return (
          <img
            src={item.url}
            alt="image 1"
            className="h-full w-full object-cover max-h-80"
          />
        )
      })}
    </Carousel>
  )
}
