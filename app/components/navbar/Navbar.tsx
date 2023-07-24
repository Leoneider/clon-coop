"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Asóciese", href: "/asociados" },
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
  const [logoImage, setLogoImage] = useState("");

  const getTopElementPosition = (): number => {
    const div = divRef.current?.parentElement;

    if (!div) return 0;
    const { y } = div.getBoundingClientRect();
    return y;
  };

  const getChangeLogoNavBar = (y: number) => {
    if (y) {
      setLogoImage("/logo-vertical-coop-color.svg");
    } else {
      setLogoImage("/logo-vertical-coop.svg");
    }
  };

  const handleScroll = () => {
    const navHeight = divRef.current?.offsetHeight || 0;

    const y = getTopElementPosition();
    getChangeLogoNavBar(y);
    setBackgroundColor(
      Math.abs(y) >= navHeight ? "bg-slate-100 text-primary" : "text-white"
    );
  };

  useEffect(() => {
    getChangeLogoNavBar(getTopElementPosition());
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
            src={logoImage}
            width={183}
            height={70}
            alt="Logo de la cooperativa"
            priority={true}
            className="padding-0"
          />
          <ul className="flex flex-row gap-4 justify-center ">
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
