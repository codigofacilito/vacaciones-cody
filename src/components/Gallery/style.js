import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  max-width: 1000px;
  width: 90%;
  position: fixed;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
`;
