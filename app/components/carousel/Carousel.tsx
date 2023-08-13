"use client";
import React from "react";
import Image from "next/image";
import { Button, Carousel, CustomFlowbiteTheme } from "flowbite-react";

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    img: "/abejas-hd.jpg",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: "/cafe-hd.jpg",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: "/siembra-hd.jpg",
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
        <div key={i} className="relative h-full w-full">
          <Image
            alt={item.name}
            src={item.img}
            fill={true}
            style={{ objectFit: "cover", borderRadius: "0px" }}
          />

          <div className="absolute h-full w-full bg-gradient-to-t from-black to-transparent z-10 opacity-30"></div>

          <div className="absolute top-96 left-1/4 w-3/12 z-10">
            <h1 className="font-bold text-5xl text-gray-200 antialiased">
              Mi seguro Crediservir me cuida. ¡Asegúrate!
            </h1>
            <p className="text-2xl text-gray-200 antialiased">
              Descubre nuestra amplia oferta en seguros y protege lo que más
              quieres.
            </p>
            <Button className="mt-7" gradientMonochrome="success" size="lg">
              Conocer más
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Example;
