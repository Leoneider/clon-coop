"use client";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import { Carousel, CustomFlowbiteTheme } from "flowbite-react";

export interface NoticiasProps {
  title: string;
  description: string;
  image: string;
  date: string;
  href: string;
}

const noticias: NoticiasProps[] = [
  {
    title: "Ganadores Concurso Crediservir Lovers",
    description: "Conozca los ganadores del Concurso Crediservir Lovers",
    image: "/noticias/img_0200.jpg",
    date: "21 Ene, 2023",
    href: "/",
  },
  {
    title: "Curso virtual de cooperativismo",
    description:
      "Crediservir publica fechas del curso de cooperativismo en julio",
    image: "/noticias/noticia-02.jpg",
    date: "30 Mar, 2023",
    href: "/",
  },
  {
    title: "Inauguración Copa Credisito en Ocaña.",
    description:
      "El domingo 23 de abril se inauguró la primera temporada del campeonato Copa Credisito 2023.",
    image: "/noticias/noticia-03.jpg",
    date: "03 Jul, 2023",
    href: "/",
  },
];

const customTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-green-600/50 hover:bg-green-600 dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-green-600 dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute top-5 left-3/4 flex -translate-x-3/4 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform snap-center",
  },
  control: {
    base: `inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30
    group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 
    group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60
    dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10`,
    icon: "h-7 w-7 text-lime-500 dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

function Noticias() {
  return (
    <>
      <div className="container mx-auto px-4 left">
        <h1 className="text-center font-bold text-2xl text-teal-900 mb-10">
          Últimas Noticias
        </h1>
        <Carousel
          theme={customTheme}
          slide={false}
          className="h-80"
          leftControl={
            <ArrowCircleLeftOutlinedIcon className="h-10 w-10 opacity-30 text-lime-500 group-hover:opacity-100" />
          }
          rightControl={
            <ArrowCircleRightOutlinedIcon className="h-10 w-10 opacity-30 text-lime-500 group-hover:opacity-100" />
          }
        >
          {noticias.map((noticia, idx) => (
            <div key={idx}>
              <div className="columns-2">
                <div className="flex justify-end">
                  <Image
                    src={noticia.image}
                    width={549}
                    height={293}
                    alt="Logo de la cooperativa"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="w-96 ml-14 pt-12">
                  <h1 className="text-2xl font-semibold text-teal-900 pt-2">
                    {noticia.title}
                  </h1>
                  <p className="text-lg mt-4 text-teal-900">
                    {noticia.description}
                  </p>

                  <div className="columns-2 pt-4">
                    <div>
                      <Button
                        classes={{ root: "text-slate-400" }}
                        variant="text"
                        startIcon={<CalendarMonthIcon />}
                      >
                        {noticia.date}
                      </Button>
                    </div>

                    <div>
                      <Button
                        color="success"
                        className="text-lime-500 font-normal"
                        variant="text"
                        endIcon={<ArrowCircleRightIcon />}
                      >
                        CONOCE MAS
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Noticias;
