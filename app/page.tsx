import {
  Beneficios,
  Entidades,
  Noticias,
  Servicios,
} from "./(layout-header)/home/components";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Servicios />
      <Noticias />
      <Beneficios />
      <Entidades />
    </>
  );
}
export default App;
