import silviaData from "../data/silviaData.json";

const Colab = () => {
  //RENDER FUNCTION OF SILVIA'S DATA
  const data = silviaData.map((silvia) => {
    return (
      <button type="button" className="studies__cursos--button" key={silvia.id}>
        <a
          href={silvia.link}
          alt={silvia.name}
          key={silvia.name}
          target="_blank"
          rel="noreferrer"
          className="studies__cursos--button-link"
        >
          {silvia.frontName}
        </a>
      </button>
    );
  });

  return (
    <section className="colab" id="colab">
      <h3 className="colab__title">Colabora en mi página</h3>
      <p className="colab__paragraph">
        Como parte de mi formación Frontend👩‍💻, aprendí acerca de Git y GitHub,
        por lo que decidí subir mi código a GitHub💻.
      </p>
      <p className="colab__paragraph">
        Puedes ayudarme a mejorar mi página, haciendo un
        <a
          href="https://github.com/codigofacilito/vacaciones-cody/"
          className="colab__paragraph-link"
        >
          {" "}
          fork de mi página
        </a>
        , y enviando un pull request🚀. Si nunca antes has colaborado con un
        repositorio,{" "}
        <a
          href="https://www.youtube.com/watch?v=xdCl0Wut-IA"
          className="colab__paragraph-link"
        >
          aquí está un tutorial
        </a>{" "}
        de Código Facilito que lo explica.
      </p>
      <p className="colab__paragraph">
        Esta vista de mi página fue desarrollada por Silvia España Gil. Si
        quieres ver otros trabajos de ella, puedes visitar sus perfiles de
        GitHub o su portafolio
      </p>
      <div className="studies__cursos--buttonWrap">{data}</div>
    </section>
  );
};
export default Colab;
