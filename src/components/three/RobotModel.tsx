import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const RobotModel = () => {
    const groupRef = useRef<THREE.Group>(null);
    const coreRef = useRef<THREE.Mesh>(null);
    const ringRef = useRef<THREE.Group>(null);
    const glowRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!groupRef.current || !coreRef.current || !ringRef.current || !glowRef.current) return;

        // Match the futuristic rotation logic
        const targetX = (state.mouse.x * Math.PI) / 10;
        const targetY = (state.mouse.y * Math.PI) / 10;

        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            targetX,
            0.1
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            -targetY,
            0.1
        );

        // Procedural animations
        const time = state.clock.elapsedTime;
        coreRef.current.position.y = Math.sin(time * 2) * 0.1;
        glowRef.current.position.y = coreRef.current.position.y;

        // Pulse the glow scale
        const pulse = 1 + Math.sin(time * 4) * 0.05;
        glowRef.current.scale.set(pulse, pulse, pulse);

        ringRef.current.rotation.z += 0.02;
        ringRef.current.rotation.x = Math.sin(time) * 0.2;
    });

    return (
        <group ref={groupRef}>
            {/* Native Glow Effect (Fake Bloom) */}
            <mesh ref={glowRef}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshBasicMaterial
                    color="#00f3ff"
                    transparent
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Main Core Body */}
            <mesh ref={coreRef} castShadow receiveShadow>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#00f3ff"
                    emissive="#00f3ff"
                    emissiveIntensity={2}
                    metalness={0.9}
                    roughness={0.1}
                />

                {/* Internal HUD data points */}
                <pointLight intensity={2} distance={2} color="#00f3ff" />
            </mesh>

            {/* Orbital Rings */}
            <group ref={ringRef}>
                {/* Horizontal Ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.5, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#bc13fe" opacity={0.5} transparent />
                </mesh>

                {/* Vertical Ring */}
                <mesh rotation={[0, Math.PI / 2, 0]}>
                    <torusGeometry args={[1.8, 0.01, 16, 100]} />
                    <meshBasicMaterial color="#00f3ff" opacity={0.3} transparent />
                </mesh>

                {/* Floating "Sensors" / Satellites */}
                {[0, 1, 2].map((i) => (
                    <mesh key={i} position={[
                        Math.cos(i * (Math.PI * 2 / 3)) * 1.5,
                        0,
                        Math.sin(i * (Math.PI * 2 / 3)) * 1.5
                    ]}>
                        <boxGeometry args={[0.1, 0.1, 0.1]} />
                        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={5} />
                    </mesh>
                ))}
            </group>

            {/* Base Glowing Platform Shadow (Fake) */}
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[4, 4]} />
                <meshBasicMaterial color="#00f3ff" opacity={0.05} transparent />
            </mesh>
        </group>
    );
};
