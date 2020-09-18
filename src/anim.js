import { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const spinO = keyframes`
0% {
  transform: rotateY(90deg);
}
100% {
  transform: rotateY(450deg);
}
`;

export default spin;
