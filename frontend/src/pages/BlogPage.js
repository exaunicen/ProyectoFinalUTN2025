const Blog = (props) => {
  return (
    <>
      <main className="contenedor seccion contenido-centrado">
        <h2>Nuestro Blog</h2>
        <article className="entrada-blog">
          <div className="imagen borde">
            <img src="./img/blogTerraza.jpg" alt="Texto entrada de Blog" />
          </div>
          <div className="texto-entrada">
            <a href="/entradaBlog">
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
            <a href="/entradaBlog">
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
        <article className="entrada-blog">
          <div className="imagen borde">
            <img
              src="/img/destacadaTerrazaConDiseño.jpg"
              alt="Texto entrada de Blog"
            />
          </div>
          <div className="texto-entrada">
            <a href="/entradaBlog">
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
            <img src="/img/Dormitorio.jpg" alt="Texto entrada de Blog" />
          </div>
          <div className="texto-entrada">
            <a href="/entradaBlog">
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
      </main>
    </>
  );
};
export default Blog;
