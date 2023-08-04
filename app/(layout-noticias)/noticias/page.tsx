"use client";
import { Navbar } from "@/app/components";
import { noticias } from "@/app/services/noticias";
import { Card } from "flowbite-react";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-48">
        <div>Bienvenidos a la seccion de noticias</div>

        {noticias.map((noticia, idx) => (
          <div key={idx} className="max-w-sm">
            <Card imgAlt={noticia.title} imgSrc={noticia.image}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {noticia.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {noticia.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
