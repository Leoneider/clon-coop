import Navbar from "@/app/components/navbar/Navbar";
import React from "react";

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
      <div>{children}</div>
    </>
  );
}
