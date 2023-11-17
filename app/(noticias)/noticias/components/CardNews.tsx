"use client";
import React from "react";
import { INoticias } from "../models/noticia.model";
import { Card } from "flowbite-react";
import Link from "next/link";
import DateRangeIcon from "@mui/icons-material/DateRange";

function CardNews(news: INoticias) {
  return (
    <div>
      <Card
        className="h-full shadow-none"
        imgAlt={news.title}
        imgSrc={news.image}
      >
        <h5 className="text-2xl font-semibold tracking-tight text-gray-700 dark:text-white">
          {news.title}
        </h5>
        <p className="font-normal text-gray-700 line-clamp-3">
          {news.description}
        </p>
        <div className="flex justify-between">
          <Link href="#" className="text-gray-400">
            <DateRangeIcon className="mr-1" />
            {news.date}
          </Link>
          <Link href={`noticias/${news.id}`} className="text-sky-600">
            Leer más
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default CardNews;
