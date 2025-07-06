import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';


export function WoodenCrate(props) {
  const crateRef = useRef();
  const { scene } = useGLTF('/models/woodencrate.glb');

  useFrame(() => {
    if (crateRef.current) {
      crateRef.current.rotation.y += 0.004; 
    }
  });

  return <primitive ref={crateRef} object={scene} {...props} />;
}

function ShadowPlane() {
  const shadow = useTexture('/shadow.png');

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.11, -1.7 , 0]}>
      <planeGeometry args={[7, 7,]} />
      <meshBasicMaterial map={shadow} transparent opacity={1.8} />
    </mesh>
  );
}

function Woodenbox() {
  return (
    <div style={{ height: '100%', width:'100%' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={5} />

        <WoodenCrate position={[0, 0, 0]} rotation={[0, 0.6, 0]} />
        <ShadowPlane />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Woodenbox;


