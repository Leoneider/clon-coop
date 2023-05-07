import Image from "next/image";

const entidades = [
  "/entidades/fitch-ratingsweb.png",
  "/entidades/logo_supersolidaria_web.png",
  "/entidades/fogacoop.png",
  "/entidades/logovisionamos.png",
  "/entidades/logoconfecoop.png",
  "/entidades/sello-100.png",
];

function Entidades() {
  return (
    <>
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-wrap justify-center gap-4">
          {entidades.map((entidad) => (
            <div
              key={entidad}
              className="relative h-32 w-56 opacity-60 hover:opacity-100
            transition ease-in-out delay-150 hover:-translate-y-2 duration-300"
            >
              <Image
                src={entidad}
                alt="Logo de la cooperativa"
                className="object-contain"
                fill={true}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Entidades;
