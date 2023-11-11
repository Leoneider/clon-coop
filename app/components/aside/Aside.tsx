import { ListGroup, ListGroupItem } from "flowbite-react";
import {
  LiaAtlasSolid,
  LiaAwardSolid,
  LiaBalanceScaleSolid,
  LiaBookReaderSolid,
  LiaClock,
  LiaCoinsSolid,
  LiaHandHoldingHeartSolid,
  LiaHeart,
  LiaMoneyCheckAltSolid,
  LiaMusicSolid,
  LiaSitemapSolid,
} from "react-icons/lia";
import "./aside.scss";
import Link from "next/link";
const links = [
  {
    link: "Reseña Historica",
    path: "resena-historica",
    icon: LiaAtlasSolid,
  },
  {
    link: "Quienes Somos",
    path: "quienes-somos",
    icon: LiaAwardSolid,
  },
  {
    link: "Valores Corporativos",
    path: "valores-corporativos",
    icon: LiaHandHoldingHeartSolid,
  },
  {
    link: "Constitución Legal",
    path: "constitucion-legal",
    icon: LiaBalanceScaleSolid,
  },
  {
    link: "Himno",
    path: "himno",
    icon: LiaMusicSolid,
  },
  {
    link: "Horario de Atención",
    path: "horario-de-atencion",
    icon: LiaClock,
  },
  {
    link: "Régimen Tributario",
    path: "regimen-tributario",
    icon: LiaCoinsSolid,
  },
  {
    link: "Reglamentos",
    path: "reglamentos",
    icon: LiaBookReaderSolid,
  },
];

const theme = {
  base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
  link: {
    base: "flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
    active: {
      off: "hover:bg-gray-100 hover:text-cyan-700  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
      on: "bg-cyan-700 text-white dark:bg-gray-800",
    },
    href: {
      off: "",
      on: "",
    },
    icon: "mr-2 h-7 w-7 fill-current",
  },
};

function Aside() {
  return (
    <div className="flex justify-end w-80 relative mt-16 pt-7">
      <div className="asideDec"></div>
      <ListGroup className="mx-7">
        {links.map(({ link, path, icon }) => (
          <ListGroupItem icon={icon} key={link} theme={theme}>
            <Link href={path}>{link}</Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

// Especial

export default Aside;
