"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function BeamModel() {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.24;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.55) * 0.12;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={groupRef} scale={1.05}>
      <mesh position={[0, 0.98, 0]} castShadow>
        <boxGeometry args={[1.38, 0.18, 3.9]} />
        <meshStandardMaterial color="#95a6bd" metalness={0.95} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.2, 1.8, 3.9]} />
        <meshStandardMaterial color="#708097" metalness={0.96} roughness={0.28} />
      </mesh>
      <mesh position={[0, -0.98, 0]} castShadow>
        <boxGeometry args={[1.38, 0.18, 3.9]} />
        <meshStandardMaterial color="#95a6bd" metalness={0.95} roughness={0.2} />
      </mesh>

      {[-1.5, -0.75, 0, 0.75, 1.5].map((offset) => (
        <mesh key={`top-${offset}`} position={[0.56, 1.04, offset]}>
          <sphereGeometry args={[0.055, 14, 14]} />
          <meshStandardMaterial
            color="#4b7bff"
            emissive="#4b7bff"
            emissiveIntensity={0.9}
            metalness={0.8}
            roughness={0.18}
          />
        </mesh>
      ))}

      {[-1.5, -0.75, 0, 0.75, 1.5].map((offset) => (
        <mesh key={`bottom-${offset}`} position={[-0.56, -1.04, offset]}>
          <sphereGeometry args={[0.055, 14, 14]} />
          <meshStandardMaterial
            color="#ff8a33"
            emissive="#ff8a33"
            emissiveIntensity={0.95}
            metalness={0.8}
            roughness={0.18}
          />
        </mesh>
      ))}
    </group>
  );
}

export function BeamScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [4.3, 2.2, 5.2], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 6, 4]} intensity={1.35} color="#89baff" />
      <directionalLight position={[-5, -3, -4]} intensity={0.9} color="#ff9645" />
      <pointLight position={[0, 3.5, 3]} intensity={1.2} color="#ffffff" />
      <pointLight position={[2, -1.2, -2]} intensity={0.7} color="#ff8a33" />
      <BeamModel />
    </Canvas>
  );
}
