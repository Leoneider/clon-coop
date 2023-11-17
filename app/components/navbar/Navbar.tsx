"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { usePathname } from "next/navigation";
import { Button, Modal } from "flowbite-react";
import { Spin } from "./Spin";

const links = [
  { name: "Institucional", href: "/institucional" },
  { name: "Asóciese", href: "/asociese" },
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

function Navbar({ scroll = false }) {
  const pathname = usePathname();
  let textColor = "text-white";
  let logoImg = "/logo-vertical-coop.svg";
  let shadow = "";

  if (!scroll) {
    textColor = "bg-slate-100 text-primary";
    logoImg = "/logo-vertical-coop-color.svg";
    shadow = "shadow-lg";
  }

  const [backgroundColor, setBackgroundColor] = useState(textColor);
  const [shadowNav, setShadowNav] = useState(shadow);
  const [logoImage, setLogoImage] = useState(logoImg);

  const [isOpen, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const getChangeLogoNavBar = (
    y: number = 0,
    navHeight: number = 0,
    isOpen = false
  ) => {
    if (Math.abs(y) >= navHeight) {
      setLogoImage("/logo-vertical-coop-color.svg");
      setShadowNav("shadow-lg");
      setBackgroundColor("bg-slate-100 text-primary");
    } else {
      setLogoImage("/logo-vertical-coop.svg");
      setShadowNav("");
      setBackgroundColor("text-white");
    }
  };

  const handleScroll = useCallback(() => {
    const currentElement = navRef.current;
    const parent = currentElement?.parentElement;

    if (parent) {
      const y = parent.getBoundingClientRect().y;
      const navHeight = navRef.current?.offsetHeight || 0;
      getChangeLogoNavBar(y, navHeight, isOpen);
    }
  }, []);

  const getPrueba = (isOpen: boolean) => {
    getChangeLogoNavBar(0, 0, isOpen);
  };

  useEffect(() => {
    if (scroll) {
      parent.addEventListener("scroll", handleScroll);
    }
    return () => {
      parent.removeEventListener("scroll", handleScroll);
    };
  }, [scroll, handleScroll]);

  return (
    <>
      <div className="w-full fixed z-10" ref={navRef}>
        <nav
          className={`${shadowNav} ${backgroundColor} ${
            isOpen ? "bg-green-300 text-white" : ""
          } transition-all duration-500 ease-in-out}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-row justify-between items-center py-4">
              <Link href={"/"}>
                <Image
                  src={logoImage}
                  width={123}
                  height={60}
                  alt="Logo de la cooperativa"
                  priority={true}
                  className="padding-0"
                />
              </Link>

              <ul className="hidden lg:flex flex-row gap-4 justify-center ">
                {links.map(({ name, href, icon }) => (
                  <li key={name}>
                    <Link href={href}>
                      <Button
                        size="lg"
                        color="none"
                        className={`font-normal bg-transparent ring-transparent  hover:bg-gray-500 hover:bg-opacity-20`}
                        gradientDuoTone={
                          pathname.includes(href) ? "greenToBlue" : ""
                        }
                      >
                        {icon}
                        <span className="drop-shadow-lg">{name}</span>
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="lg:hidden">
                <Spin toggled={isOpen} toggle={setOpen} />
              </div>
            </div>
          </div>
        </nav>
        {isOpen && (
          <div className="h-screen w-full bg-green-100 p-7 transition-all duration-500 ease-in-out">
            <ul className="flex flex-col gap-4 justify-center">
              {links.map(({ name, href, icon }) => (
                <li key={name}>
                  <Link href={href}>
                    <Button
                      fullSized
                      size="lg"
                      color="none"
                      className={`font-normal ring-transparent  hover:bg-gray-500 hover:bg-opacity-20`}
                      gradientDuoTone={
                        pathname.includes(href) ? "greenToBlue" : ""
                      }
                    >
                      {icon}
                      <span className="drop-shadow-lg">{name}</span>
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
export default Navbar;
