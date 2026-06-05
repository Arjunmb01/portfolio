import React, { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { ThreeCanvas } from "../three/ThreeCanvas";
import { RobotModel } from "../three/RobotModel";

class ThreeErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Three.js Error Boundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex flex-col items-center justify-center bg-white/[0.02] border border-white/[0.06] rounded-2xl">
                    <div className="text-neutral-500 text-sm text-center max-w-[200px]">
                        3D scene unavailable
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export const HeroScene = () => {
    return (
        <div className="w-full h-full relative z-0">
            <ThreeErrorBoundary>
                <div className="w-full h-full relative">
                    <Suspense fallback={
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-neutral-600 text-sm animate-pulse-subtle">
                                Loading...
                            </div>
                        </div>
                    }>
                        <ThreeCanvas>
                            <RobotModel />
                        </ThreeCanvas>
                    </Suspense>

                    {/* Subtle frame overlay */}
                    <div className="absolute inset-0 pointer-events-none border border-white/[0.05] rounded-2xl z-10" />
                </div>
            </ThreeErrorBoundary>
        </div>
    );
};
