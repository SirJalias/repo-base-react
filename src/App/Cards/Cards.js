import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Card from "./Card";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
};

const MotionWrapper = props => (
  <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    {...props}
  />
);

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-evenly",
  alignContent: "space-around",
  height: "300px",
  flexWrap: "wrap",
  backgroundColor: "lightgreen"
});

const MotionCard = props => <motion.div variants={item} {...props} />;

export default () => (
  <MotionWrapper>
    <Wrapper variants={container} initial="hidden" animate="visible">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => (
        <MotionCard key={index} variants={item}>
          <Card />
        </MotionCard>
      ))}
    </Wrapper>
  </MotionWrapper>
);
