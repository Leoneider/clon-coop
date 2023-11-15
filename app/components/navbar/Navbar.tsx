"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { usePathname } from "next/navigation";
import { Button } from "flowbite-react";

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

  const getChangeLogoNavBar = (y: number, navHeight: number) => {
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
      getChangeLogoNavBar(y, navHeight);
    }
  }, []);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scroll) {
      parent.addEventListener("scroll", handleScroll);
    }
    return () => {
      parent.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <nav
      className={`w-full fixed z-50 ${shadowNav} ${backgroundColor}`}
      ref={navRef}
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

          <ul className="hidden lg:flex flex-row gap-4 justify-center">
            {links.map(({ name, href, icon }) => (
              <li key={name}>
                <Link href={href}>
                  <Button
                    size="lg"
                    color="none"
                    className={`font-normal bg-transparent ring-transparent  hover:bg-gray-500 hover:bg-opacity-20`}
                    gradientDuoTone={pathname == href ? "greenToBlue" : ""}
                  >
                    {icon}
                    <span className="drop-shadow-lg">{name}</span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
