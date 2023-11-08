import { ILastNew } from "../models/last-new.model";
import { INoticias } from "../models/noticia.model";

export const noticias: INoticias[] = [
  {
    id: "1",
    title: "Ganadores Concurso Crediservir Videos",
    description: "Conozca los ganadores del Concurso Crediservir Lovers",
    image: "/noticias/img_0200.jpg",
    date: "21 Ene, 2023",
  },
  {
    id: "2",
    title: "Curso virtual de cooperativismo",
    description:
      "Crediservir publica fechas del curso de cooperativismo en julio",
    image: "/noticias/noticia-02.jpg",
    date: "30 Mar, 2023",
  },
  {
    id: "3",
    title: "Inauguración Copa Credisito en Ocaña.",
    description:
      "El domingo 23 de abril se inauguró la primera temporada del campeonato Copa Credisito 2023.",
    image: "/noticias/noticia-03.jpg",
    date: "03 Jul, 2023",
  },
  {
    id: "4",
    title: "Ganadores Concurso Crediservir Lovers",
    description: `Crediservir realiza el proceso de acreditación del Sello 100% Cooperativa de manera voluntaria, 
    con el propósito de evaluar la gestión que desarrolla la entidad frente al desempeño de los principios
    cooperativos. Obtener este Sello es una muestra del cumplimiento de los parámetros establecidos para 
    considerarse como una entidad que ejerce a cabalidad el objeto social, aplicando cada uno de los
    principios cooperativos y así ratificar el compromiso de generar valor a nuestros asociados,
    bajo un modelo socio empresarial que antes de buscar el lucro, propende por el bienestar y 
    el desarrollo de la base social.

    DEFINICIÓN DEL SELLO 100% COOPERATIVA

    El Sello 100% Cooperativa es un distintivo que otorga CONFECOOP 
    a las entidades que desarrollan sus actividades de acuerdo con la 
    naturaleza y los principios cooperativos, reconociendo el carácter
    empresarial, la evaluación del cumplimiento de estándares sociales y 
    financieros, para incentivar al mismo tiempo la cultura del mejoramiento continuo.`,
    image: "/noticias/img_0200.jpg",
    date: "21 Ene, 2023",
  },
  {
    id: "5",
    title: "Curso virtual de cooperativismo",
    description:
      "Crediservir publica fechas del curso de cooperativismo en julio",
    image: "/noticias/noticia-02.jpg",
    date: "30 Mar, 2023",
  },
  {
    id: "6",
    title: "Inauguración Copa Credisito en Ocaña.",
    description:
      "El domingo 23 de abril se inauguró la primera temporada del campeonato Copa Credisito 2023.",
    image: "/noticias/noticia-03.jpg",
    date: "03 Jul, 2023",
  },
];

export const findNoticia = (id: string): INoticias | undefined => {
  return noticias.find((noticia) => noticia.id === id);
};

export const getLatestNews = (): ILastNew[] => {
  return noticias.slice(0, 4).map((noticia) => {
    return {
      title: noticia.title,
      date: noticia.date,
      url: `/noticias/${noticia.id}`,
    };
  });
};
