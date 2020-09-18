import React from "react";
import "./styles.css";
import SphereWrapper from "./components/Sphere";

export default function App() {
  return (
    <SphereWrapper
      messageCount="10" // displayed messages ciynt
      dotCount="100" // dot count
      radius="150"
    />
  );
}
