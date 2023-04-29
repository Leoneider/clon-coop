import {
  Beneficios,
  Noticias,
  Servicios,
} from "./(layout-header)/home/components";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Servicios />
      <Noticias />
      <Beneficios />
      <Footer />
    </>
  );
}
export default App;
