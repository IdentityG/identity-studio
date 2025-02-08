import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

const LetterEG = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <group position={[-2, 0, 0]}>
        <Text
          position={[0, 0, 0]}
          rotation={[0, Math.PI, 0]}
          fontSize={5}
          depth={2}
        >
         G
        </Text>
      </group>
      <group position={[2, 0, 0]}>
        <Text
          position={[0, 0, 0]}
          rotation={[0, Math.PI, 0]}
          fontSize={5}
          depth={2}
        >
          E
        </Text>
      </group>
    </Canvas>
  );
};

export default LetterEG;