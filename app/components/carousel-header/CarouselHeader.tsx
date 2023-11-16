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
  control: {
    base: "hidden sm:inline-flex h-8 w-8 items-center justify-center bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-proximity overflow-y-hidden overflow-x-scroll scroll-smooth",
    snap: "snap-x",
  },
};

function CarouselHeader() {
  return (
    <Carousel
      className=" h-96 sm:h-screen w-full"
      pauseOnHover
      slideInterval={5000}
      theme={customTheme}
    >
      {items.map((item, i) => (
        <div key={i} className="relative h-full w-full">
          <Image
            alt={item.name}
            src={item.img}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-none"
          />

          <div className="absolute h-full w-full bg-gradient-to-t from-black to-transparent z-10 opacity-30"></div>

          <div className="absolute top-1/3 sm:left-1/4 sm:w-3/12 z-10 p-7">
            <h1 className="text-2xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Mi seguro Crediservir me cuida. ¡Asegúrate!
            </h1>

            <p className="hidden md:block text-2xl mt-4 text-gray-200 drop-shadow-lg">
              Descubre nuestra amplia oferta en seguros y protege lo que más
              quieres.
            </p>

            <Button
              className="mt-3 sm:mt-7 "
              gradientMonochrome="success"
              size="lg"
            >
              Conocer más
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselHeader;
