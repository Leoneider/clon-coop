import "@/styles/globals.css";
import { Navbar } from "./components";

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
      <html lang="es">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
