"use client";
import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { ILastNew } from "../models/last-new.model";

function LastNews(lastNew: ILastNew) {
  return (
    <>
      <Card className="shadow-none" key={lastNew.title}>
        <h5 className="text-lg font-medium tracking-tight text-gray-500 hover:underline hover:text-sky-600">
          <Link href={"/"}>{lastNew.title}</Link>
        </h5>
        <p className="text-sm font-light text-gray-400">{lastNew.date}</p>
      </Card>
    </>
  );
}

export default LastNews;
