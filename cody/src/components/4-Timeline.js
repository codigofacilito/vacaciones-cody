import learningPath from "../data/learningPath.json";

const Timeline = () => {
  const willDo = learningPath.map((data, i) => {
    return (
      <>
        <li className="path__timeline--container" key={data.id}>
          {data.tech}
        </li>
      </>
    );
  });
  if (learningPath.length > 0)
    return (
      <>
        <article className="path">
          <h3 className="path__title">Ruta de aprendizaje 2021</h3>
          <p className="path__paragraph">
            Este año me propuse aprender estas nuevas tecnologías🚀
          </p>
          <ul className="path__timeline">{willDo}</ul>
        </article>
      </>
    );
};

export default Timeline;
