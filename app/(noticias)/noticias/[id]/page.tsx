import React from "react";
import {
  findNoticia,
  getLatestNews,
  noticias,
} from "../services/noticias.service";
import Image from "next/image";
import LastNews from "../components/LastNews";

export const dynamicParams = false;

export async function generateStaticParams() {
  return noticias.map((noticia) => ({
    id: noticia.id,
  }));
}

function Noticia({ params }: { params: { id: string } }) {
  const { id } = params;

  const lastNews = getLatestNews();

  const noticia = findNoticia(id);
  if (!noticia) return null;
  return (
    <div className="container mx-auto px-64 pb-12">
      <div className="grid grid-cols-12 justify-center bg-slate-50 py-7 rounded-md">
        <div className="col-span-8 ps-7 pe-14">
          <p className="text-5xl font-semibold text-zinc-600">
            {noticia?.title}
          </p>
          <p className="font-light pt-3 pb-14 text-gray-400">
            2 min de lectura - Ene 8, 2021
          </p>

          <Image
            alt={noticia?.title}
            src={noticia?.image}
            width={700}
            height={400}
            className="mb-7 rounded-md"
          />

          <p className="text-left text-xl text-gray-500 leading-relaxed font-light">
            {noticia?.description}
          </p>
        </div>
        <div className="w-80">
          <p className="font-semibold text-xl text-zinc-600">
            Ultimas Noticias
          </p>
          <div className="grid grid-cols-1 gap-4">
            {lastNews.map((lastNew) => (
              <div key={lastNew.title}>
                <LastNews {...lastNew} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noticia;
