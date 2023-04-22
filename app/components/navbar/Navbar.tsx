import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Asóciese", href: "/asociados" },
  { name: "Ahorros", href: "/ahorros" },
  { name: "Créditos", href: "/creditos" },
  { name: "Sucursal Virtual", href: "/sucrusal-virtual" },
  { name: "Portal Transaccional", href: "/portal-transaccional" },
];

function Navbar() {
  return (
    <nav className="bg-teal-200 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center py-4">
          <Image
            src="/logo-coop-white.png"
            width={246}
            height={64}
            alt="Logo de la cooperativa"
          />
          <ul className="flex flex-row gap-7 justify-center">
            {links.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}> {name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
