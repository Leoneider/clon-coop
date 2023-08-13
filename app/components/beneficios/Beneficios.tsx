"use client";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CreditCardIcon from "@mui/icons-material/CreditCard";

interface Item {
  label: string;
  path: string;
  icon: JSX.Element;
  imageFondo: { backgroundImage: string };
}

const beneficios: Item[] = [
  {
    label: "",
    path: "/home",
    icon: <ArrowForwardIcon className="text-lime-600" />,
    imageFondo: { backgroundImage: "url('/beneficios/beneficio1.jpg')" },
  },
  {
    label: "Crediservir Protege a su Familia",
    path: "/home",
    icon: <Diversity1Icon className="text-lime-600" />,
    imageFondo: { backgroundImage: "url('/beneficios/beneficio2.jpg')" },
  },
  {
    label: "Tarjeta Débito de Crediservir",
    path: "/home",
    icon: <CreditCardIcon className="text-lime-600" />,
    imageFondo: { backgroundImage: "url('/beneficios/beneficio3.jpg')" },
  },
];

function Beneficios() {
  return (
    <>
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-center font-bold text-2xl text-teal-900">
          Disfruta tus Beneficios Crediservir
        </h1>
        <div className="columns-3 pt-16">
          {beneficios.map(({ label, icon, imageFondo }) => (
            <div
              key={label}
              className="bg-cover bg-center h-80 w-80 object-cover rounded-md relative 
              transition ease-in-out delay-150 hover:-translate-y-4 duration-300"
              style={imageFondo}
            >
              <div className="absolute bottom-0 p-7 flex items-center">
                <IconButton size="large" className="bg-white hover:bg-lime-50">
                  {icon}
                </IconButton>
                <h1 className="text-white ml-4">{label}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Beneficios;
