import {
  Header,
  Navbar,
  Beneficios,
  Entidades,
  Noticias,
  Servicios,
} from "./components";

function App() {
  return (
    <>
      <Navbar scroll={true} />
      <Header />
      <Servicios />
      <Noticias />
      <Beneficios />
      <Entidades />
    </>
  );
}
export default App;
