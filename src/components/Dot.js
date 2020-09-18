import styled from "styled-components";
import React from "react";
import spin from "../anim";

const generateRandomNegative = () => (Math.round(Math.random()) === 1 ? 1 : -1);
const Dot = styled.a`
  height: ${(props) => (props.radius * 2) / 50}px;
  color: #363636;
  border-radius: 50%;
  display: ${(props) => (props.displayDot ? "flex" : "none")};
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
  transform: ${(props) => {
    const phi = Math.random() * 180;
    const z = props.radius * generateRandomNegative() * Math.random();
    const x =
      Math.sqrt(Math.pow(props.radius, 2) - Math.pow(z, 2)) * Math.cos(phi);
    const y =
      Math.sqrt(Math.pow(props.radius, 2) - Math.pow(z, 2)) * Math.sin(phi);
    return `translate3d(${x}px,${y}px,${z}px)`;
  }};
  animation-play-state: inherit;
  &::before {
    content: "";
    display: block;
    border-radius: 50%;
    background-color: ${(props) => (props.filled ? "black" : "white")};
    border: 1px solid black;
    width: ${(props) => (props.radius * 2) / 50}px;
    height: ${(props) => (props.radius * 2) / 50}px;
    animation: ${spin} 10s linear reverse infinite;
    animation-play-state: inherit;
  }
  &::after {
    content: "${(props) => props.title}";
    display: ${(props) => (props.displayMessage ? "flex" : "none")};
    border-radius: 10px;
    color: black;
    font-size: 16px;
    position: relative;
    animation: ${spin} 10s linear reverse infinite;
    animation-play-state: inherit;
    align-items: center;
    padding: 10px;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid black;
  }
`;

const DotComp = (props) => (
  <Dot
    target="_blank"
    href={`https://${props.link}`}
    title={props.message}
    filled={Math.random() > 0.4}
    radius={props.radius}
    displayDot={props.displayDot}
    displayMessage={props.displayMessage}
  />
);

export default DotComp;
