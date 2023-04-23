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

const Item = (props: any) => {
  return (
    <Image
      src={props.item.img}
      fill={true}
      alt="Logo de la cooperativa"
      className="object-cover"
    />
  );
};

function Example() {
  return (
    <Carousel className="h-full w-full relative overflow-hidden">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Example;
