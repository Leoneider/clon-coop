"use client";
import { noticias } from "@/app/(noticias)/noticias/services/noticias.service";
import { Card } from "flowbite-react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Link from "next/link";

function Home() {
  return (
    <>
      <div className="container mx-auto px-4 pt-48 pb-14">
        <div className="mb-14">
          <h1 className="text-4xl pb-7 font-semibold text-gray-700">
            Noticias y Eventos
          </h1>
          <p className="text-xl text-gray-600">
            Queremos compartir contigo todos las noticias
            <br /> y eventos importantes que realizamos en Crediservir.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {noticias.map((noticia, idx) => (
            <div key={idx} className="max-w-sm">
              <Card
                className="h-full"
                imgAlt={noticia.title}
                imgSrc={noticia.image}
              >
                <h5 className="text-2xl font-semibold tracking-tight text-gray-700 dark:text-white">
                  {noticia.title}
                </h5>
                <p className="font-normal text-gray-700 line-clamp-3">
                  {noticia.description}
                </p>
                <div className="flex justify-between">
                  <Link href="#" className="text-gray-400">
                    <DateRangeIcon className="mr-1" />
                    {noticia.date}
                  </Link>
                  <Link
                    href={`noticias/${noticia.id}`}
                    className="text-sky-600"
                  >
                    Leer más
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
