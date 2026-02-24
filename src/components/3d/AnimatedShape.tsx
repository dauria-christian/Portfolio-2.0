"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, ContactShadows } from "@react-three/drei";

const AnimatedSphere = () => {
    return (
        <group>
            {/* Main morphing sphere */}
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                <Sphere args={[1, 100, 200]} scale={2.2}>
                    <MeshDistortMaterial
                        color="#4f46e5"
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Sphere>
            </Float>

            {/* Subtle background sphere for depth */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1} position={[3, -2, -2]}>
                <Sphere args={[0.5, 64, 64]} scale={1.5}>
                    <meshStandardMaterial
                        color="#8b5cf6"
                        roughness={0.1}
                        metalness={0.5}
                        transparent
                        opacity={0.5}
                    />
                </Sphere>
            </Float>
            
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1} position={[-3, 2, -3]}>
                <Sphere args={[0.4, 64, 64]} scale={1.2}>
                    <meshStandardMaterial
                        color="#3b82f6"
                        roughness={0.1}
                        metalness={0.5}
                        transparent
                        opacity={0.3}
                    />
                </Sphere>
            </Float>
        </group>
    );
};

export default function AnimatedShape() {
    return (
        <div className="absolute inset-0 z-0 opacity-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 5]} intensity={1.5} />
                <pointLight position={[5, 5, 5]} intensity={2} color="#8b5cf6" />
                <pointLight position={[-5, -5, 5]} intensity={2} color="#3b82f6" />
                
                <AnimatedSphere />
                
                <ContactShadows
                    position={[0, -2.5, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2.5}
                    far={4.5}
                />
            </Canvas>
        </div>
    );
};
