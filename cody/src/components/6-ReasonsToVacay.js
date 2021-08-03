const ReasonsToVacay = () => {
  const benefits = [
    { icon: "fas fa-brain fa-lg", text: "Mejora la salud mental" },
    { icon: "far fa-smile-beam fa-lg", text: "Incrementa la motivación" },
    { icon: "fas fa-fire-extinguisher fa-lg", text: "Reduce el burnout" },
    {
      icon: "fas fa-cogs fa-lg",
      text: "Mejora tu productividad y creatividad",
    },
  ];

  const RenderBenefits = benefits.map((benefit, index) => {
    return (
      <li className="benefits__reasons-container" key={index}>
        <i className={`benefits__reasons-container__icon ${benefit.icon}`}></i>
        <p className="benefits__reasons-container__text">{benefit.text}</p>
      </li>
    );
  });
  return (
    <section className="benefits">
      <h3 className="benefits__title">La importancia de las vacaciones</h3>
      <p className="benefits__paragraph">
        Aprender a programar y escribir código, puede ser estresante, por eso es
        muy importante que periódicamente nos desconectemos y descansemos
        apropiadamente💆
      </p>
      <p className="benefits__paragraph">
        Durante mis vacaciones aprendí que descansar tiene varios beneficios✨
      </p>
      <h4 className="benefits__subtitle">Beneficios de descansar</h4>
      <ul className="benefits__reasons">{RenderBenefits}</ul>
    </section>
  );
};
export default ReasonsToVacay;
