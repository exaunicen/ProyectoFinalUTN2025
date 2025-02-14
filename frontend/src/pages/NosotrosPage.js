const Nosotros = (props) => {
  return (
    <>
      <main className="contenedor seccion">
        <h1>Conoce sobre Nosotros</h1>
        <div className="contenido-nosotros">
          <div className="imagen-nosotros borde">
            <img src="/img/nosotros.jpg" alt="Sobre Nosotros" />
          </div>
          <div className="texto-nosotros">
            <blockquote>37 años de experiencia</blockquote>
            <p>
              Con más de tres décadas en el mercado, nuestra empresa ha sido
              testigo de la evolución del sector inmobiliario. Hemos ayudado a
              miles de familias a encontrar el hogar de sus sueños y a
              innumerables inversores a obtener las mejores propiedades. Nuestro
              compromiso con la excelencia y la satisfacción del cliente nos ha
              permitido mantenernos a la vanguardia, adaptándonos a los cambios
              y ofreciendo siempre un servicio de calidad. La experiencia
              acumulada a lo largo de estos 37 años nos ha convertido en líderes
              del sector, y seguimos trabajando con la misma pasión y dedicación
              del primer día.
            </p>
          </div>
        </div>
      </main>
      <section className="contenedor seccion">
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
      </section>
    </>
  );
};
export default Nosotros;
