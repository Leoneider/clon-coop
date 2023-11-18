import {
  Header,
  Navbar,
  Beneficios,
  Entidades,
  Noticias,
  Servicios,
  Simulador,
} from "./components";

function App() {
  return (
    <div>
      <Navbar scrollHabilitado={true} />
      <Header />
      <Simulador />
      <Servicios />
      <Noticias />
      <Beneficios />
      <Entidades />
    </div>
  );
}
export default App;
