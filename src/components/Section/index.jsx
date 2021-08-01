import React from "react";
import { Section, TitleBar } from "./style";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import { motion } from "framer-motion";

const Motion = ({ children }) => (
  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.995 }}>
    {children}
  </motion.div>
);

const SectionView = ({ children }) => {
  return (
    <Section>
      <TitleBar>
        <VscChromeMinimize />
        <VscChromeMaximize />
        <VscChromeClose />
      </TitleBar>
      {children}
    </Section>
  );
};

const SectionComponent = ({ children, noanimations }) => {
  if (noanimations) {
    return <SectionView>{children}</SectionView>;
  }

  return (
    <Motion>
      <SectionView>{children}</SectionView>
    </Motion>
  );
};

export default SectionComponent;
