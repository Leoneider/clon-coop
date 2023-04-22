import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Footer, Navbar } from "./components";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Home | Crediservir",
  description: "Crediservir ∙ Cooperativa especializada de Ahorro y Crédito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="es" className={poppins.className}>
        <body className="h-full">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
