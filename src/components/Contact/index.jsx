import React from "react";
import { Contact, Box } from "./style";
import Link from "components/Link";
import { FaGithub, FaFacebook, FaLinkedin, FaCode } from "react-icons/fa";

const socialNetworks = [
  {
    name: "Github",
    username: "HectorMtz22",
    href: "https://github.com/HectorMtz22",
    component: <FaGithub />,
  },
  {
    name: "Linkedin",
    username: "hectormtz22",
    href: "https://www.linkedin.com/in/hectormtz22/",
    component: <FaLinkedin />,
  },
  {
    name: "Página Web",
    href: "https://hmtzdev.tech/",
    component: <FaCode />,
  },
];

const ContactComponent = () => {
  return (
    <Contact>
      <h2>Me puedes encontrar en varias Redes Sociales:</h2>

      <Box>
        {socialNetworks.map((network) => (
          <Link key={network.name} {...network}>
            {network.component} {network.name} {network.username}
          </Link>
        ))}
      </Box>
    </Contact>
  );
};

export default ContactComponent;
