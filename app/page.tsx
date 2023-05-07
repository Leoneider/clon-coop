import {
  Beneficios,
  Entidades,
  Noticias,
  Servicios,
} from "./(layout-header)/home/components";
import { Header, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Servicios />
      <Noticias />
      <Beneficios />
      <Entidades />
    </>
  );
}
export default App;
