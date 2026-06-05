import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Float } from "@react-three/drei";

interface ThreeCanvasProps {
    children: React.ReactNode;
}

export const ThreeCanvas = ({ children }: ThreeCanvasProps) => {
    return (
        <div className="relative w-full h-full z-0 overflow-hidden pointer-events-none">
            <Canvas
                shadows
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: false,
                    stencil: false,
                    depth: true
                }}
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 5], fov: 50 }}
            >
                <Suspense fallback={null}>
                    {/* ENHANCED NATIVE LIGHTING to compensate for lack of post-processing */}
                    <ambientLight intensity={0.4} />
                    <hemisphereLight intensity={0.5} color="#00f3ff" groundColor="#bc13fe" />

                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={1.5}
                        castShadow
                    />

                    <pointLight position={[-10, -10, -10]} intensity={1.5} color="#bc13fe" />
                    <pointLight position={[10, 5, 5]} intensity={1.5} color="#00f3ff" />
                    <directionalLight position={[0, 5, 5]} intensity={0.5} color="#ffffff" />

                    <Float
                        speed={1.5}
                        rotationIntensity={0.5}
                        floatIntensity={0.5}
                    >
                        {children}
                    </Float>

                    {/* 
                        EFFECT COMPOSER REMOVED PERMANENTLY.
                        The 'lov' error is caused by the post-processing library's 
                        handling of WebGL context loss.
                    */}
                </Suspense>
            </Canvas>
        </div>
    );
};
