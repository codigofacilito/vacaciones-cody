import coursesData from "../data/coursesData.json";

const Studies = () => {
  //RENDER FUNCTION OF COURSES DONE
  const RenderCourses = () => {
    return coursesData.map((course) => {
      return (
        <button type="button" className="studies__cursos--button">
          <a
            href={course.link}
            alt={course.name}
            target="_blank"
            rel="noreferrer"
            className="studies__cursos--button-link"
          >
            {course.frontName}
          </a>
        </button>
      );
    });
  };

  return (
    <>
      <h2 className="studies__title">Mis vacaciones Front-End</h2>
      <p className="studies__paragraph">
        Durante el verano de 2019, decidí comenzar a aprender desarrollo
        frontend 👨🏽‍💻, por lo que durante mi viaje, estuve aprendiendo HTML, CSS,
        y JavaScript. Cada tarde, después de conocer nuevos lugares en mis
        vacaciones🌴, practicaba mis habilidades en tecnologías frontend,
        construyendo esta página.
      </p>
      <h3 className="studies__cursos">Cursos que hice</h3>
      <div className="studies__cursos--buttonWrap">{RenderCourses()}</div>
    </>
  );
};
export default Studies;
