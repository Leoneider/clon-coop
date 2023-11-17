import { Card } from "flowbite-react";
import Image from "next/image";
import {
  LiaDonateSolid,
  LiaGlobeAmericasSolid,
  LiaLaptopSolid,
  LiaMoneyCheckAltSolid,
  LiaSitemapSolid,
  LiaSmsSolid,
} from "react-icons/lia";

const servicios = [
  {
    name: "Servicios Virtuales",
    icon: <LiaLaptopSolid className="text-6xl" />,
  },
  {
    name: "Simulador de Crédito",
    icon: <LiaMoneyCheckAltSolid className="text-6xl" />,
  },
  {
    name: "Simulador de CDAT",
    icon: <LiaDonateSolid className="text-6xl" />,
  },

  { name: "Red de Oficinas", icon: <LiaSitemapSolid className="text-6xl" /> },
  { name: "Formulario de FPQRS", icon: <LiaSmsSolid className="text-6xl" /> },
  {
    name: "Horarios de Atención",
    icon: <LiaLaptopSolid className="text-6xl" />,
  },
];

function Servicios() {
  return (
    <>
      <div className="flex justify-center  xl:px-56 mb-12">
        <div className="shadow-md  border border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {servicios.map(({ name, icon }) => (
              <div
                key={name}
                className="w-40 p-2 relative text-center font-normal text-green-900
               hover:bg-green-50 transition duration-500 ease-in-out cursor-pointer"
              >
                <div className="grid justify-center">{icon}</div>

                <h3 className="text-lg py-3">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Servicios;
