const ReasonsToVacay = () => {
  const benefits = [
    { icon: "as fa-brain", text: "Mejora la salud mental" },
    { icon: "ar fa-smile-beam", text: "Incrementa la motivación" },
    { icon: "fas fa-fire-extinguisher", text: "Reduce el burnout" },
    { icon: "fas fa-cogs", text: "Mejora tu productividad y creatividad" },
  ];

  const RenderBenefits = benefits.map((benefit) => {
    <li>
      <i class={benefit.icon}></i>
      <p>{benefit.text}</p>
    </li>;
  });
  return (
    <>
      <h3>La importancia de las vacaciones</h3>
      <p>
        Aprender a programar y escribir código, puede ser estresante, por eso es
        muy importante que periódicamente nos desconectemos y descansemos
        apropiadamente
      </p>
      <h4>
        Durante mis vacaciones aprendí que existen distintos beneficios de
        descansar:
      </h4>
      <ul>{RenderBenefits}</ul>
    </>
  );
};
export default ReasonsToVacay;
