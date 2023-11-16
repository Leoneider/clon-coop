import CardNews from "@/(noticias)/noticias/components/CardNews";
import LastNews from "@/(noticias)/noticias/components/LastNews";
import { INoticias } from "@/(noticias)/noticias/models/noticia.model";
import {
  findNoticia,
  getLatestNews,
} from "@/(noticias)/noticias/services/noticias.service";
import ButtonNoticias from "../button/Button";

function Noticias() {
  let news: INoticias | undefined = findNoticia("1");
  const noticia: INoticias = news ?? ({} as INoticias);
  const lastNews = getLatestNews();

  return (
    <>
      <div className="bg-sky-50 py-12">
        <div className="container grid place-items-center mx-auto">
          <h1 className="text-center font-semibold text-3xl text-teal-900 pb-16">
            Últimas Noticias
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <CardNews {...noticia} />
            </div>

            <div className="grid gap-4 ">
              <div className="grid gap-4 h-80 overflow-y-auto">
                {lastNews.map((lastNew) => (
                  <LastNews key={lastNew.title} {...lastNew} />
                ))}
              </div>

              <div className="grid place-items-center">
                <ButtonNoticias />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Noticias;
