"use client";
import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";

function AppMovil() {
  return (
    <>
      <Card className="max-w-sm  shadow-none">
        <h5 className="text-lg font-medium tracking-tight text-gray-500 hover:underline hover:text-sky-600">
          <Link href={"/"}>Noteworthy technology acquisitions 2021</Link>
        </h5>

        <p className="text-sm font-light text-gray-400">21 Ene, 2023</p>
      </Card>
      <Card className="max-w-sm  shadow-none">
        <h5 className="text-lg font-medium tracking-tight text-gray-500 hover:underline hover:text-sky-600">
          <Link href={"/"}>Noteworthy technology acquisitions 2021</Link>
        </h5>
        <p className="text-sm font-light text-gray-400">21 Ene, 2023</p>
      </Card>
      <Card className="max-w-sm  shadow-none">
        <h5 className="text-lg font-medium tracking-tight text-gray-500 hover:underline hover:text-sky-600">
          <Link href={"/"}>Noteworthy technology acquisitions 2021</Link>
        </h5>
        <p className="text-sm font-light text-gray-400">21 Ene, 2023</p>
      </Card>
    </>
  );
}

export default AppMovil;
