import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Mac from "./Mac";

const Desc = styled.div`
  width: 200px;
  padding: 20px;
  background-color: RGBA(0, 0, 0, 0.5);
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  color: white;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Mac />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        Comprender que la inteligencia artificial es un campo de la ciencia de la computación que se ocupa de la creación de agentes inteligentes, que son sistemas que pueden razonar, aprender, actuar y resolver problemas de forma autónoma
      </Desc>
    </>
  );
};

export default WebDesign;
