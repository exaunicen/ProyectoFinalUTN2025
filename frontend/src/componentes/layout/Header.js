import Nav from "./Nav";

const Header = (props) => {
  return (
    <>
      <header className="encabezado contenido-encabezado inicio">
        <div className="contenedor">
          <div className="barra">
            <a href="./">
              <img src="/img/logo.svg" alt="Logo de Bienes Raices" />
            </a>
            <Nav />
          </div>
          <h1>Ventas y Alquileres de Casas, Cabañas y Campos</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
