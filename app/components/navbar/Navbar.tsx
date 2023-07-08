"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import Groups2Icon from "@mui/icons-material/Groups2";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Asóciese", href: "/asociados", icon: <Groups2Icon /> },
  { name: "Ahorros", href: "/ahorros" },
  { name: "Créditos", href: "/creditos" },
  {
    name: "Sucursal Virtual",
    href: "/sucrusal-virtual",
    icon: <LaptopChromebookIcon />,
  },
  {
    name: "Portal Transaccional",
    href: "/portal-transaccional",
    icon: <AccountBoxIcon />,
  },
];

function Navbar() {
  const divRef = useRef<HTMLDivElement>(null);
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleScroll = () => {
    const navHeight = divRef.current?.offsetHeight || 0;
    const div = divRef.current?.parentElement;

    if (!div) return;

    const { y } = div.getBoundingClientRect();
    setBackgroundColor(
      Math.abs(y) >= navHeight ? "bg-slate-100 text-primary" : "text-white"
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed z-50 ${backgroundColor} transition ease-in-out delay-150 duration-300`}
      ref={divRef}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center py-4">
          <Image
            src="/logo-coop-white.png"
            width={246}
            height={64}
            alt="Logo de la cooperativa"
            priority={true}
          />
          <ul className="flex flex-row gap-7 justify-center ">
            {links.map(({ name, href, icon }) => (
              <li
                key={name}
                className="hover:bg-slate-50 hover:bg-opacity-5 py-2 px-4 rounded-md"
              >
                {icon}
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
