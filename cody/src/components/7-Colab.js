const Colab = () => {
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
        , y enviando un pull request🚀.
      </p>
      <p className="colab__paragraph">
        Si nunca antes has colaborado con un repositorio,{" "}
        <a
          href="https://www.youtube.com/watch?v=xdCl0Wut-IA"
          className="colab__paragraph-link"
        >
          aquí está un tutorial
        </a>{" "}
        de Código Facilito que lo explica.
      </p>
    </section>
  );
};
export default Colab;
