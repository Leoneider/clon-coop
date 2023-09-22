import { noticias } from "@/app/(noticias)/noticias/services/noticias.service";
import CardNews from "./components/CardNews";

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
          {noticias.map((noticia) => (
            <div key={noticia.id} className="max-w-sm">
              <CardNews {...noticia}></CardNews>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
