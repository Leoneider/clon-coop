interface NoticiasProps {
  title: string;
  description: string;
  image: string;
  date: string;
  href: string;
}

export const noticias: NoticiasProps[] = [
  {
    title: "Ganadores Concurso Crediservir Lovers",
    description: "Conozca los ganadores del Concurso Crediservir Lovers",
    image: "/noticias/img_0200.jpg",
    date: "21 Ene, 2023",
    href: "/",
  },
  {
    title: "Curso virtual de cooperativismo",
    description:
      "Crediservir publica fechas del curso de cooperativismo en julio",
    image: "/noticias/noticia-02.jpg",
    date: "30 Mar, 2023",
    href: "/",
  },
  {
    title: "Inauguración Copa Credisito en Ocaña.",
    description:
      "El domingo 23 de abril se inauguró la primera temporada del campeonato Copa Credisito 2023.",
    image: "/noticias/noticia-03.jpg",
    date: "03 Jul, 2023",
    href: "/",
  },
];
