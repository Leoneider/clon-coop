"use client";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ButtonNoticias from "@/app/components/button/Button";

export interface NoticiasProps {
  title: string;
  description: string;
  image: string;
  date: string;
  href: string;
}

const noticias: NoticiasProps[] = [
  {
    title: "Ganadores Concurso Crediservir Luna",
    description: "Conozca los ganadores del Concurso Crediservir Lovers",
    image: "/noticias/img_0200.jpg",
    date: "21 Ene, 2023",
    href: "/",
  },
  {
    title: "Ganadores Concurso Crediservir Lovers",
    description: "Conozca los ganadores del Concurso Crediservir Lovers",
    image: "/noticias/img_0200.jpg",
    date: "21 Ene, 2023",
    href: "/",
  },
  {
    title: "Ganadores Concurso Crediservir Lovers",
    description: "Conozca los ganadores del Concurso Crediservir Lovers",
    image: "/noticias/img_0200.jpg",
    date: "21 Ene, 2023",
    href: "/",
  },
];

let noticiaSeleccionada: NoticiasProps = noticias[0];

function Noticias() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="columns-2">
          <div className="flex justify-end">
            <Image
              src={noticiaSeleccionada.image}
              width={549}
              height={293}
              alt="Logo de la cooperativa"
              className="rounded-md object-cover"
            />
          </div>

          <div className="w-96 ml-14">
            <div className="flex">
              <h2 className="text-left text-lime-500">Últimas Noticias</h2>
              <div className="flex gap-3 justify-center items-center grow">
                <button
                  type="button"
                  className="w-2 h-2 bg-slate-300 rounded-full text-lime-500"
                ></button>
                <button
                  type="button"
                  className="w-2 h-2 bg-slate-300 rounded-full text-lime-500"
                ></button>
                <button
                  type="button"
                  className="w-2 h-2 bg-lime-300 rounded-full text-lime-500"
                ></button>
                <button
                  type="button"
                  className="w-2 h-2 bg-slate-300 rounded-full text-lime-500"
                ></button>
              </div>
            </div>

            <h1 className="text-2xl font-semibold text-teal-900 pt-2">
              {noticiaSeleccionada.title}
            </h1>
            <p className="text-lg mt-4 text-teal-900">
              {noticiaSeleccionada.description}
            </p>

            <div className="columns-2 pt-4">
              <div>
                <Button
                  classes={{ root: "text-slate-400" }}
                  variant="text"
                  startIcon={<CalendarMonthIcon />}
                >
                  {noticiaSeleccionada.date}
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
        <div className="flex justify-center pt-12">
          <ButtonNoticias />
        </div>
      </div>
      );
    </>
  );
}
export default Noticias;
