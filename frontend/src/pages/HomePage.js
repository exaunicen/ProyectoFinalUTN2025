const Home = (props) => {
  return (
    <>
      <main className="contenedor seccion">
        <h2>Mas Sobre Nosotros</h2>
        <div className="iconos-nosotros">
          <div className="icono">
            <img src="/img/iconoSeguridad.svg" alt="Icono Seguridad" />
            <h3>Seguridad</h3>
            <p>
              En Bienes Raices, la seguridad es nuestra prioridad. Nos
              aseguramos de que todas las transacciones se realicen de manera
              segura y transparente, protegiendo tanto a compradores como a
              vendedores. Utilizamos tecnología avanzada y seguimos estrictos
              protocolos para garantizar la confidencialidad y la integridad de
              la información.
            </p>
          </div>
          <div className="icono">
            <img src="/img/iconoPrecio.svg" alt="Icono Precios" />
            <h3>Precio</h3>
            <p>
              En Bienes Raices, ofrecemos los mejores precios del mercado. Nos
              comprometemos a brindar opciones accesibles y competitivas para
              todos nuestros clientes. Nuestro equipo trabaja arduamente para
              negociar y asegurar las mejores ofertas, garantizando que obtenga
              el máximo valor por su inversión.
            </p>
          </div>
          <div className="icono">
            <img src="/img/iconoTiempo.svg" alt="Icono a Tiempo" />
            <h3>A Tiempo</h3>
            <p>
              En Bienes Raices, entendemos la importancia del tiempo. Nos
              comprometemos a cumplir con los plazos acordados y a ofrecer un
              servicio eficiente y puntual. Nuestro equipo trabaja para asegurar
              que cada transacción se complete en el tiempo estipulado, sin
              comprometer la calidad del servicio.
            </p>
          </div>
        </div>
      </main>
      <section className="contenedor seccion">
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
              <div className="card-body">
                <h4 className="card-title text-center">Mansion con Pileta</h4>
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
          <a
            className="contenedor boton boton-verde col-md-3 d-block mx-auto"
            href="/anuncios">
            Ver Todas
          </a>
        </div>
      </section>
      <section className="imagen-contacto">
        <h2>Encuentra la Casa de tus Sueños</h2>
        <p>
          Llena el formulario de contacto y un asesor se pondrá en contacto
          contigo a la brevedad
        </p>
        <a href="./contacto" class="boton boton-amarillo">
          Contactanos
        </a>
      </section>
      <div className="contenedor seccion seccion-inferior">
        <section className="blog">
          <h2>Nuestro Blog</h2>
          <article className="entrada-blog">
            <div className="imagen borde">
              <img src="/img/blogTerraza.jpg" alt="Texto entrada de Blog" />
            </div>
            <div className="texto-entrada">
              <a href="/blog">
                <h4>Terraza en el techo de tu casa</h4>
                <p className="info-meta">
                  Escrito el: <span>20/10/2025</span> por: <span>Admin</span>
                </p>
                <p>
                  Consejos para construir una terraza en el techo de tu casa con
                  los mejores materiales y ahorrando dinero
                </p>
              </a>
            </div>
          </article>
          <article className="entrada-blog">
            <div className="imagen borde">
              <img src="/img/blogBordePileta.jpg" alt="Texto entrada de Blog" />
            </div>
            <div className="texto-entrada">
              <a href="/blog">
                <h4>Guia para la decoracion de tu hogar</h4>
                <p className="info-meta">
                  Escrito el: <span>20/10/2025</span> por: <span>Admin</span>
                </p>
                <p>
                  Maximiza el espacio en tu hogar con esta guia, aprende a
                  combinar muebles y colores para darle vida a tu espacio
                </p>
              </a>
            </div>
          </article>
        </section>
        <section className="testimoniales">
          <h2>Testimoniales</h2>
          <div className="testimonial">
            <blockquote>
              El personal de Bienes Raices es muy profesional y amable. Me
              ayudaron a encontrar la casa de mis sueños y a un precio
              increible. ¡Altamente recomendado!
            </blockquote>
            <p>- Jorge Albariño</p>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
