import React from "react";
import { findNoticia, noticias } from "../services/noticias.service";
import Image from "next/image";

export const dynamicParams = false;

export async function generateStaticParams() {
  return noticias.map((noticia) => ({
    id: noticia.id,
  }));
}

function Noticia({ params }: { params: { id: string } }) {
  const { id } = params;

  const noticia = findNoticia(id);
  if (!noticia) return null;
  return (
    <div className="container mx-auto px-72 pt-48 pb-14">
      <div className="grid grid-cols-10 justify-center">
        <div className="col-span-7 px-7">
          <p className="text-5xl font-semibold">{noticia?.title}</p>
          <p className="pb-7 text-gray-400">2 min de lectura - Ene 8, 2021</p>

          <Image
            alt={noticia?.title}
            src={noticia?.image}
            width={700}
            height={400}
            className="mb-7 rounded-md"
          />

          <p className="text-start text-xl text-gray-600">
            {noticia?.description}
          </p>
        </div>
        <div className="w-72 bg-amber-800">
          <p>hola</p>
        </div>
      </div>
    </div>
  );
}

export default Noticia;
