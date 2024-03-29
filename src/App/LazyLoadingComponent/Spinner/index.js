import React from "react";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: ${rotation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export default () => (
  <LdsRing>
    <div />
    <div />
    <div />
    <div />
  </LdsRing>
);
