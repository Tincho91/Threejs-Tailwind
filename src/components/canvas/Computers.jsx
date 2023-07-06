import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { PointLight, SpotLight } from 'three';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

//This code is a function that sets the state of isMobile to true or false depending on the size of the window. 
const ComputersCanvas = () => {
  //Declares a new state variable called isMobile and sets it to false
  const [isMobile, setIsMobile] = useState(false);

  //Runs the code inside the useEffect hook when the component mounts and when it updates
  useEffect(() => {
    //Creates a media query that checks if the window size is less than 500px
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    //Sets isMobile to true or false depending on whether or not the media query matches
    setIsMobile(mediaQuery.matches);

    //Declares a function that will be called when the media query changes
    const handleMediaQueryChange = event => {
      //Sets isMobile to true or false depending on whether or not the media query matches
      setIsMobile(event.matches);
    }

    //Adds an event listener that calls handleMediaQueryChange when the media query changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    //Returns a function that removes the event listener when the component unmounts 
    return () => {
      mediaQuery.addEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;