import styled from "styled-components";
import React, { useState, useEffect } from "react";
import DotComp from "./Dot";
import spin from "../anim";

const Wrapper = styled.div`
  transition: 0.2s ease-in-out;
  :hover {
    animation-play-state: paused;
  }
`;

const Container = styled.div`
  height: ${(props) => props.radius * 2}px;
  width: ${(props) => props.radius * 2}px;
  margin: auto;
  position: relative;
  transform-style: preserve-3d;
  animation: ${spin} 10s linear infinite;
  animation-play-state: inherit;
`;

const Sphere = (props) => (
  <Container {...props}>
    {props.data.map((el) => (
      <DotComp
        displayMessage={el.displayMessage}
        displayDot={el.displayDot}
        message={el.title}
        link={el.link}
        key={el.title}
        radius={props.radius}
      />
    ))}
  </Container>
);

const SphereWrapper = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://next.json-generator.com/api/json/get/EkKjgy0Vt")
      .then((resp) => resp.json())
      .then((data) => {
        let counter = 1;
        const dotCount = props.dotCount > 100 ? 100 : props.dotCount;

        const mutatedData = [];

        while (counter < dotCount) {
          const newItem = data.items[counter];
          if (counter <= props.messageCount) {
            newItem.displayMessage = true;
          }
          newItem.displayDot = true;
          counter++;
          mutatedData.push(newItem);
        }

        setData(mutatedData);
      })
      .then(() => setLoading(false));
  }, []);

  return <Wrapper>{loading || <Sphere data={data} {...props} />}</Wrapper>;
};

export default SphereWrapper;
