"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

function Footer() {
  return (
    <div
      className="bg-gradient-to-b from-emerald-500 to-green-600"
      style={{ boxShadow: "0px -10px 15px 3px rgba(0,0,0,0.1)" }}
    >
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex ">
          <div className="w-28">
            <Image
              src={"/superintendencia.png"}
              alt={"superintendencia"}
              height={245}
              width={26}
            ></Image>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-green-900">
            <div>
              <h1 className="font-semibold  text-xl mb-3">Contáctenos</h1>
              <p className="mb-1">Línea atención (607) 569 44 44</p>
              <p className="mb-1">
                Carrera 12 Nº 10-00 Centro Ocaña, Norte de Santander|
              </p>
              <p className="mb-1">notificaciones@crediservir.com</p>
            </div>
            <div>
              <h1 className="font-semibold  text-xl mb-5">Corporativo</h1>
              <p className="mb-1">Quiénes somos</p>
              <p className="mb-1">Informes de Gestión</p>
              <p className="mb-1">Gestión de Riesgos</p>
              <p className="mb-1">Gestión Ambiental</p>
              <p className="mb-1">Pensamiento Cooperativo</p>
            </div>
            <div>
              <h1 className="font-semibold  text-xl mb-5">
                Enlaces de Interés
              </h1>
              <p className="mb-1">Tasas Efectivas Anuales</p>
              <p className="mb-1"> Tarifas Productos y Servicios</p>
              <p className="mb-1"> Sistema Gestión de Calidad</p>
              <p className="mb-1"> Reconocimientos</p>
              <p className="mb-1"> Reconocimientos Fundación Crediservir</p>
              <p className="mb-1"> Documentos Institucionales</p>
            </div>
            <div>
              <h1 className="font-semibold  text-xl mb-5">
                Servicio al Asociado
              </h1>
              <p className="mb-1"> Información legal</p>
              <p className="mb-1">Protección de Datos</p>
              <p className="mb-1">S.A.C.</p>
              <p className="mb-1">Actualización de datos</p>
            </div>
          </div>
        </div>

        <hr className="my-8  opacity-20" />

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div>
            <small>© DevOps42 - 2023</small>
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-green-950">
            <FacebookIcon className=" text-4xl" />
            <TwitterIcon className=" text-4xl" />
            <InstagramIcon className=" text-4xl" />
            <YouTubeIcon className=" text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
