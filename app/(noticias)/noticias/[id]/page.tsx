import React from "react";
import { findNoticia, noticias } from "../services/noticias.service";

export const dynamicParams = false;

export async function generateStaticParams() {
  return noticias.map((noticia) => ({
    id: noticia.id,
  }));
}

function Noticia({ params }: { params: { id: string } }) {
  const { id } = params;

  const noticia = findNoticia(id);
  return (
    <div className="container mx-auto px-4 pt-48 pb-14">
      <div className="grid grid-cols-7 justify-center">
        <div className="col-span-6">
          <p className="text-start">{noticia?.description}</p>
        </div>
        <div className="w-56 bg-amber-800">
          <p>hola</p>
        </div>
      </div>
      <p className="text-2xl text-primary">{noticia?.title}</p>
    </div>
  );
}

export default Noticia;
