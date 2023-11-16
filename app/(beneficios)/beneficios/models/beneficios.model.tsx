import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CreditCardIcon from "@mui/icons-material/CreditCard";

interface Item {
  label: string;
  path: string;
  icon: JSX.Element;
  imageFondo: { backgroundImage: string };
  animation?: { to: string; from: string };
}

export const beneficios: Item[] = [
  {
    label: "",
    path: "/beneficios/hola",
    icon: <ArrowForwardIcon className="text-lime-600" />,
    imageFondo: { backgroundImage: "url('/beneficios/beneficio1.jpg')" },
    animation: {
      to: "lg:translate-x-0 lg:opacity-100 lg:duration-1000",
      from: "lg:-translate-x-72 lg:opacity-0",
    },
  },
  {
    label: "Crediservir Protege a su Familia",
    path: "/home",
    icon: <Diversity1Icon className="text-lime-600" />,
    imageFondo: { backgroundImage: "url('/beneficios/beneficio2.jpg')" },
    animation: {
      to: "lg:translate-y-0 lg:opacity-100 lg:duration-1000",
      from: "lg:translate-y-72 lg:opacity-0",
    },
  },
  {
    label: "Tarjeta Débito de Crediservir",
    path: "/home",
    icon: <CreditCardIcon className="text-lime-600" />,
    imageFondo: { backgroundImage: "url('/beneficios/beneficio3.jpg')" },
    animation: {
      to: "lg:translate-x-0 lg:opacity-100 lg:duration-1000",
      from: "lg:translate-x-72 lg:opacity-0",
    },
  },
];
