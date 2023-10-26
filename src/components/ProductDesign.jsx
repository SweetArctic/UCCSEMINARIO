import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
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
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
      La analítica de datos es una disciplina en constante evolución. A medida que las tecnologías de datos y análisis continúan desarrollándose, la analítica de datos se volverá aún más poderosa y se utilizará en una gama aún más amplia de aplicaciones.
      </Desc>
    </>
  );
};

export default ProductDesign;
