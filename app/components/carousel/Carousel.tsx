import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    img: "/banner-app_1920-718.jpg",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: "/banner-credito_1920-718.jpg",
  },
];

function Example() {
  return (
    <Carousel height="100vh">
      {items.map((item, i) => (
        <Image
          key={i}
          src={item.img}
          fill={true}
          alt="Logo de la cooperativa"
          className="object-cover"
          sizes="100vh"
        />
      ))}
    </Carousel>
  );
}

export default Example;
