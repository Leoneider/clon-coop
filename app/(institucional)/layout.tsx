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
      <div className="h-44"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 px-7">
          <div className="text-lg text-gray-500 md:col-span-2 font-light">
            {children}
          </div>

          <div>
            <Aside></Aside>
          </div>
        </div>
      </div>
    </>
  );
}
