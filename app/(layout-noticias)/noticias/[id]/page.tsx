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
  return <div>page esto es una Noticia {noticia?.title}</div>;
}

export default Noticia;
