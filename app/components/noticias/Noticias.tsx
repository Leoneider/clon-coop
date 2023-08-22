import ButtonNoticias from "@/app/components/button/Button";
import { findNoticia } from "@/app/(noticias)/noticias/services/noticias.service";
import CardNews from "@/app/(noticias)/noticias/components/CardNews";
import { INoticias } from "@/app/(noticias)/noticias/models/noticia.model";

function Noticias() {
  let news: INoticias | undefined = findNoticia("1");
  const noticia: INoticias = news ?? ({} as INoticias);

  return (
    <>
      <div className="container mx-auto px-4 left">
        <h1 className="text-center font-bold text-2xl text-teal-900 mb-10">
          Últimas Noticias
        </h1>

        <div className="grid grid-cols-2 place-items-center">
          <div>
            <CardNews {...noticia} />
          </div>
          <div></div>
        </div>
      </div>
      <div className="grid place-items-center">
        <ButtonNoticias />
      </div>
    </>
  );
}

export default Noticias;
