import React, { useState } from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import { Container } from "./style";
import Image from "components/Image";
import Section from "../Section";

const GalleryComponent = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <AnimateSharedLayout type="crossfade">
      {items.map((item) => (
        <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
          <Image filename={item.filename} alt={item.alt} />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <Container onClick={() => setSelectedId(null)} layoutId={selectedId}>
            <Section>
              <Image
                filename={items.find((item) => item.id === selectedId).filename}
                alt={items.find((item) => item.id === selectedId).alt}
              />
            </Section>
          </Container>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default GalleryComponent;
