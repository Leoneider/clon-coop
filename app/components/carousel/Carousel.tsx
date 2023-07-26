import React from "react";
import Image from "next/image";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";

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

const customTheme: CustomFlowbiteTheme["carousel"] = {
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
    snap: "snap-x",
  },
};

function Example() {
  return (
    <Carousel className="h-screen w-full" theme={customTheme}>
      {items.map((item, i) => (
        <div key={i} className="h-full w-full">
          <Image
            alt={item.name}
            src={item.img}
            fill={true}
            style={{ objectFit: "cover", borderRadius: "0px" }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default Example;
