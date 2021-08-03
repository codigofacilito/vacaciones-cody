import codyCode from "../images/CodyCode.png";

const Presentation = () => {
  return (
    <>
      <article className="presentation">
        <h1 className="presentation__title" id="about">
          Las vacaciones de Cody
        </h1>
        <div className="presentation__text">
          <p className="presentation__text-paragraph">
            Soy Cody, un aspirante a Dev, en 2019, organicé un viaje 🧳✈️para
            desestresarme del código, y en esta página quiero compartirlo
            contigo.
          </p>
          <img
            src={codyCode}
            className="presentation__text-image"
            alt="Cody codeando"
          />
        </div>
      </article>
    </>
  );
};
export default Presentation;
