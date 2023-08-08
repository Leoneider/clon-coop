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
    <div className="container mx-auto px-4 pt-48 pb-14">{noticia?.title}</div>
  );
}

export default Noticia;
