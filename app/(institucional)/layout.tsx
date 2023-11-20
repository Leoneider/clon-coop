import React from "react";
import { Navbar, Aside } from "@/components";

export const metadata = {
  title: "Institucional",
  description: "Conoce mas sobre nosotros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="h-32"></div>
      <div className="container mx-auto">
        <div className="flex flex-wrap-reverse lg:flex-wrap  px-7 ">
          <div className="text-lg text-gray-500 font-light lg:w-3/5">
            {children}
          </div>

          <div className="w-40 min-w-min">
            <Aside></Aside>
          </div>
        </div>
      </div>
    </>
  );
}
