"use client";

import { beneficios } from "@/(beneficios)/beneficios/models/beneficios.model";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

function Beneficios() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const { ref: refTitle, inView: inViewTtitle } = useInView({
    threshold: 1,
    triggerOnce: false,
    delay: 300,
  });

  return (
    <div>
      <div className="container mx-auto px-4 pt-16">
        <h1
          ref={refTitle}
          className={`text-center font-semibold text-3xl text-teal-900
          ${
            inViewTtitle
              ? "opacity-100 transition ease-in-out duration-600"
              : "opacity-0"
          }`}
        >
          Disfruta tus Beneficios{" "}
          <span className="text-secondary">Crediservir</span>
        </h1>
        <div
          ref={ref}
          className="grid grid-cols-1 gap-4 lg:grid-cols-3 place-items-center pt-16"
        >
          {beneficios.map(({ label, icon, imageFondo, animation, path }) => (
            <div
              key={label}
              className={`bg-cover bg-center h-80 w-80 object-cover rounded-md relative
                	        transition ease-in-out duration-300 hover:-translate-y-4
                          ${inView ? animation?.to : animation?.from}`}
              style={imageFondo}
            >
              <div className="absolute bottom-0 p-7 flex items-center">
                <Link href={path}>
                  <IconButton
                    size="large"
                    className="bg-white hover:bg-lime-50"
                  >
                    {icon}
                  </IconButton>
                </Link>
                <h1 className="text-white ml-4">{label}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Beneficios;
