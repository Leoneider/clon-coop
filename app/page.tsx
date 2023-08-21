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
    <div>
      <Navbar scroll={true} />
      <Header />
      <Servicios />
      <Noticias />
      <Beneficios />
      <Entidades />
    </div>
  );
}
export default App;
