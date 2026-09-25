"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

function AbstractShape() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.getElapsedTime();

        // Slow continuous rotation
        groupRef.current.rotation.x = Math.cos(t / 4) / 4;
        groupRef.current.rotation.y = Math.sin(t / 4) / 4;
        groupRef.current.rotation.z = Math.sin(t / 1.5) / 4;

        // Pointer parallax (subtle)
        groupRef.current.position.x = THREE.MathUtils.lerp(
            groupRef.current.position.x,
            (state.mouse.x * 0.8),
            0.05
        );
        groupRef.current.position.y = THREE.MathUtils.lerp(
            groupRef.current.position.y,
            (state.mouse.y * 0.8),
            0.05
        );
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* Outer wireframe */}
                <mesh>
                    <icosahedronGeometry args={[2.2, 1]} />
                    <meshBasicMaterial
                        color="#4F46E5"
                        wireframe={true}
                        transparent
                        opacity={0.15}
                    />
                </mesh>

                {/* Inner solid geometry (light matching the background) */}
                <mesh scale={0.9}>
                    <icosahedronGeometry args={[2.2, 0]} />
                    <meshStandardMaterial
                        color="#FAFAFA"
                        roughness={0.2}
                        metalness={0.3}
                        envMapIntensity={1}
                    />
                </mesh>
            </Float>
        </group>
    );
}

export function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (containerRef.current) {
            const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (prefersReduced) {
                gsap.set(containerRef.current, { opacity: 0.6, scale: 1 });
            } else {
                gsap.fromTo(containerRef.current,
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 0.6, duration: 1.5, ease: "power3.out", delay: 0.2 }
                );
            }
        }
    }, []);

    if (!isMounted) return null;

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 opacity-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#4F46E5" />
                <directionalLight position={[-10, -10, -5]} intensity={2} color="#ffffff" />
                <AbstractShape />
            </Canvas>
        </div>
    );
}
