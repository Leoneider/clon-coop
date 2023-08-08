import { INoticias } from "../models/noticia.model";

export const noticias: INoticias[] = [
  {
    id: "1",
    title: "Ganadores Concurso Crediservir Lovers",
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
    description: "Conozca los ganadores del Concurso Crediservir Lovers",
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

export const findNoticia = (id: string) => {
  return noticias.find((noticia) => noticia.id === id);
};
