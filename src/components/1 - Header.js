import { useState } from "react";

//COMPONENTS
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  //States
  let [isClosed, setClosed] = useState();

  //Menu handler that closes the menu when an option is clicked
  const closeMenuHandler = () => {
    if (isClosed === false) {
      return setClosed(true);
    } else {
      setClosed(false);
    }
  };
  return (
    <header className="header">
      <Menu isOpen={isClosed} width={280}>
        <a className="menu__item" href="#top" onClick={closeMenuHandler}>
          Home
        </a>
        <a className="menu__item" href="#about" onClick={closeMenuHandler}>
          Sobre mi
        </a>
        <a className="menu__item" href="#vacations" onClick={closeMenuHandler}>
          Mis vacaciones
        </a>
        <a className="menu__item" href="#benefits" onClick={closeMenuHandler}>
          Beneficios de descansar
        </a>
        <a className="menu__item" href="#colab" onClick={closeMenuHandler}>
          Colabora conmigo
        </a>
      </Menu>

      <div className="header__bar">
        <svg
          className="header__bar--svg"
          data-name="HeaderBarLine"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="header__bar--fill"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
