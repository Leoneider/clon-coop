import Image from "next/image";

const servicios = [
  { name: "Servicios Virtuales", href: "/servicios/servicosvirtuales.svg" },
  {
    name: "Simulador de CDAT y Crédito",
    href: "/servicios/sdahorro.svg",
  },
  { name: "Red de Oficinas", href: "/servicios/rdsucursales.svg" },
  { name: "Formulario de FPQRS", href: "/servicios/fpqrs.svg" },
  { name: "Horarios de Atención", href: "/servicios/iconclock.svg" },
];

function Servicios() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-7 flex-wrap">
          {servicios.map(({ name, href }) => (
            <div
              key={name}
              className="w-48 text-center font-medium bg-slate-50 p-4 rounded-md"
            >
              <Image
                src={href}
                width={50}
                height={50}
                alt={name}
                className="mx-auto"
              />
              <h3 className="text-xl py-3 text-green-900">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Servicios;
