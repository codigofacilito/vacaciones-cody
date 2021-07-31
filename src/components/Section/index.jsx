import React from "react";
import { Section, TitleBar } from "./style";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";

const SectionComponent = ({ children }) => {
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

export default SectionComponent;
