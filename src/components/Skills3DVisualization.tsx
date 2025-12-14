import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function RotatingSphere({ color, position }: { color: string; position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.4, 32, 32]} position={position}>
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5} 
        metalness={0.8} 
        roughness={0.2} 
      />
    </Sphere>
  );
}

export default function Skills3DVisualization() {
  return (
    <div className="w-full h-48">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingSphere color="#8b5cf6" position={[-1.5, 0, 0]} />
        <RotatingSphere color="#a78bfa" position={[1.5, 0, 0]} />
        <RotatingSphere color="#c4b5fd" position={[0, 1.5, 0]} />
        <RotatingSphere color="#e9d5ff" position={[0, -1.5, 0]} />
      </Canvas>
    </div>
  );
}
