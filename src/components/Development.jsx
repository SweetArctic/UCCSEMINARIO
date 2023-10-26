import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";

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
    Display: flex;
  }
`;

const Development = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Atom />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
      Es un conjunto de sistemas informáticos que se combinan para proporcionar una visión única de los datos de una empresa. Un SIE puede integrar datos de diferentes departamentos y unidades de negocio, lo que permite a los usuarios acceder a la información que necesitan de forma rápida y sencilla.
      </Desc>
    </>
  );
};

export default Development;
