import coursesData from "../data/coursesData.json";
import Timeline from "./4-Timeline";

const Studies = () => {
  //RENDER FUNCTION OF COURSES DONE
  const data = coursesData.map((course) => {
    return (
      <button
        type="button"
        className="studies__cursos--button"
        key={course.name}
      >
        <a
          href={course.link}
          alt={course.name}
          key={course.name}
          target="_blank"
          rel="noreferrer"
          className="studies__cursos--button-link"
        >
          {course.frontName}
        </a>
      </button>
    );
  });

  return (
    <section className="studies">
      <h2 className="studies__title">Mis vacaciones Front-End</h2>
      <p className="studies__paragraph">
        Durante el verano de 2019, decidí comenzar a aprender desarrollo
        frontend 👨🏽‍💻, por lo que durante mi viaje, estuve aprendiendo HTML, CSS,
        y JavaScript. Cada tarde, después de conocer nuevos lugares en mis
        vacaciones🌴, practicaba mis habilidades en tecnologías frontend,
        construyendo esta página.
      </p>
      <h3 className="studies__cursos">Cursos que hice</h3>
      <div className="studies__cursos--buttonWrap">{data}</div>
      <Timeline />
    </section>
  );
};
export default Studies;
