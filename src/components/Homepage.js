import React from 'react';
import Navbar from './Navbar';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import FloatingContainer from './Floating';
import 'bootstrap/dist/css/bootstrap.min.css';

function Model(props) {
  const { scene } = useGLTF("/pcparts.glb");
  return <primitive object={scene} {...props} />
}

const Homepage = () => {
    return (
        <div>
            <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute", "touchAction": "none"}}>
            <color attach="background" args={["#101010"]} />
              <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={"sunset"}>
                <Model scale={0.005}/>
                </Stage>
              </PresentationControls>
            </Canvas>
        </div>
    );
}

export default Homepage;