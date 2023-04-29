"use client";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";
import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ButtonNoticias from "@/app/components/button/Button";

function Noticias() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="columns-2">
          <div className="flex justify-end">
            <Image
              src="/noticias/img_0200.jpg"
              width={549}
              height={293}
              alt="Logo de la cooperativa"
              className="rounded-md object-cover"
            />
          </div>

          <div className="w-96 ml-14">
            <h2 className="text-left text-lime-500">Últimas Noticias</h2>
            <h1 className="text-2xl font-semibold text-teal-950 pt-2">
              Ganadores Concurso Crediservir Lovers
            </h1>
            <p className="text-lg mt-4 text-teal-950">
              Conozca los ganadores del Concurso Crediservir Lovers
            </p>
            <div className="columns-2 pt-4">
              <div>
                <Button
                  classes={{ root: "text-slate-400" }}
                  variant="text"
                  startIcon={<CalendarMonthIcon />}
                >
                  21 Ene, 2023
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
    </>
  );
}
export default Noticias;
