const Anuncios = (props) => {
  return (
    <>
      <main className="contenedor seccion">
        <h2>Casas y Departamentos en Venta</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mt-4">
              <img
                src="/img/CasaAlLago.jpg"
                className="card-img-top"
                alt="Casa al Lago"
              />
              <div className="card-body">
                <h4 className="card-title text-center">
                  Casa de Lujo en el Lago
                </h4>
                <p className="card-text text-center">
                  Casa en el lago con excelente vista, acabados de lujo a un
                  excelente precio
                </p>
              </div>
              <p className="text-center text-success">U$A 300.000</p>
              <a className="boton boton-amarillo" href="/anuncio">
                Ver Propiedad
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-4">
              <img
                src="/img/MansionConPileta.jpg"
                className="card-img-top"
                alt="Casa al Lago"
              />
              <div classNameName="card-body">
                <h4 classNameName="card-title text-center">
                  Mansion con Pileta
                </h4>
                <p className="card-text text-center">
                  Mansion con pileta y cancha de tenis, con amplios jardines.
                </p>
              </div>
              <p className="text-center text-success">U$A 300.000</p>
              <a className="boton boton-amarillo" href="/anuncio">
                Ver propiedad
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-4">
              <img
                src="/img/CasaDiseñoModerno.jpg"
                className="card-img-top"
                alt="Casa con diseño Moderno"
              />
              <div className="card-body">
                <h4 className="card-title text-center">
                  Casa con terminados de Lujo
                </h4>
                <p className="card-text text-center">
                  Casa con diseño moderno, asi como tecnologia inteligente y
                  amueblada
                </p>
              </div>
              <p className="text-center text-success">U$A 300.000</p>

              <a className="boton boton-amarillo" href="/anuncio">
                Ver propiedad
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mt-4">
              <img
                src="/img/CasaClasica.jpg"
                className="card-img-top"
                alt="Casa en Barrio Residencial"
              />
              <div className="card-body">
                <h4 className="card-title text-center">
                  Casa en Barrio residencial
                </h4>
                <p className="card-text text-center">
                  Casa con amplios ambientes, en clasico Barrio Residencial, con
                  excelente ubicacion
                </p>
              </div>
              <p className="text-center text-success">U$A 300.000</p>
              <a className="boton boton-amarillo" href="/anuncio">
                Ver Propiedad
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-4">
              <img
                src="/img/CasaLadrillosVistos.jpg"
                className="card-img-top"
                alt="Casa ubicada en exclusivo barrio"
              />
              <div className="card-body">
                <h4 className="card-title text-center">
                  Casa en exclusivo barrio privado
                </h4>
                <p className="card-text text-center">
                  Casa de excelente y moderna construccion con amplios ambientes
                  en exclusivo barrio privado
                </p>
              </div>
              <p className="text-center text-success">U$A 300.000</p>
              <a className="boton boton-amarillo" href="/anuncio.html">
                Ver propiedad
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-4">
              <img
                src="/img/CasaVistaqNocturna.jpg"
                className="card-img-top"
                alt="Casa con diseño Moderno"
              />
              <div className="card-body">
                <h4 className="card-title text-center">
                  Casa con terminados de Lujo
                </h4>
                <p className="card-text text-center">
                  Casa con diseño moderno, asi como tecnologia inteligente y
                  amueblada en exclusiva zona portuaria
                </p>
              </div>
              <p className="text-center text-success">U$A 300.000</p>
              <a className="boton boton-amarillo" href="/anuncio">
                Ver propiedad
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Anuncios;
