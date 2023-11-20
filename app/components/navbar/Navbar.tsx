"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { usePathname } from "next/navigation";
import { Button } from "flowbite-react";
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

function Navbar({ scrollHabilitado = false }) {
  const pathname = usePathname();

  let backgroundColor = scrollHabilitado
    ? "text-white"
    : "bg-white text-primary";
  let logoImage = scrollHabilitado
    ? "/logo-vertical-coop.svg"
    : "/logo-vertical-coop-color.svg";
  let shadowNav = scrollHabilitado ? "" : "shadow-lg bg-slate-100";

  const [navbarStyles, setNavbarStyles] = useState({
    backgroundColor,
    shadowNav,
    logoImage,
  });

  const [isOpenMenuMobile, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navbarColor = useMemo(
    () => ({
      backgroundColor: "bg-white text-primary",
      shadowNav: "shadow-lg bg-slate-100",
      logoImage: "/logo-vertical-coop-color.svg",
    }),
    []
  );

  const getChangeLogoNavBarScroll = useCallback(
    (y: number = 0) => {
      if (Math.abs(y) > 70) {
        setNavbarStyles(navbarColor);
      } else {
        setNavbarStyles({
          backgroundColor: backgroundColor,
          shadowNav: "",
          logoImage: "/logo-vertical-coop.svg",
        });
      }
    },
    [setNavbarStyles, navbarColor, backgroundColor]
  );

  const handleScroll = useCallback(() => {
    if (scrollHabilitado) {
      const currentElement = navRef.current;
      const parent = currentElement?.parentElement;

      if (parent) {
        const y = parent.getBoundingClientRect().y;
        getChangeLogoNavBarScroll(y);
      }
    }
  }, [scrollHabilitado, getChangeLogoNavBarScroll]);

  useEffect(() => {
    if (isOpenMenuMobile) {
      setNavbarStyles(navbarColor);
    } else {
      handleScroll();
    }
  }, [isOpenMenuMobile, navbarColor, handleScroll]);

  useEffect(() => {
    if (scrollHabilitado) {
      parent.addEventListener("scroll", handleScroll);
    }
    return () => {
      parent.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHabilitado, handleScroll]);

  return (
    <>
      <div className="relative overflow-y-auto" ref={navRef}>
        <nav
          className={`w-full fixed z-50 ${navbarStyles.shadowNav} ${navbarStyles.backgroundColor} transition-all duration-100 ease-in-out`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-row justify-between items-center py-4">
              <Link
                href={"/"}
                className="transition-all duration-500 ease-in-out"
              >
                <Image
                  src={navbarStyles.logoImage}
                  width={123}
                  height={83}
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
                <Spin toggled={isOpenMenuMobile} toggle={setOpen} />
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 h-screen w-screen bg-teal-100 p-7 transition ease-in-out duration-300 z-40 lg:hidden 
        ${isOpenMenuMobile ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="grid grid-cols-2   gap-4 justify-center mt-32 ">
          {links.map(({ name, href, icon }) => (
            <li key={name}>
              <Link href={href}>
                <div
                  className={`grid items-center  p-2 h-20 max-h-full w-24 min-w-full text-xs shadow-md rounded-sm ${
                    pathname.includes(href) ? "bg-primary" : "bg-slate-50"
                  }`}
                >
                  <div className="text-gray-300">{icon}</div>
                  <p
                    className={` ${
                      pathname.includes(href) ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {name}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Navbar;
