import React from "react";
import { Section, TitleBar } from "./style";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import { motion } from "framer-motion";

const Motion = ({ children }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    {children}
  </motion.div>
);

const SectionComponent = ({ children }) => {
  return (
    <Motion>
      <Section>
        <TitleBar>
          <VscChromeMinimize />
          <VscChromeMaximize />
          <VscChromeClose />
        </TitleBar>
        {children}
      </Section>
    </Motion>
  );
};

export default SectionComponent;
