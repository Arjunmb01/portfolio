import React from "react";

export const CyberBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
            {/* Primary Grid */}
            <div className="absolute inset-0 hud-grid opacity-[0.07]" />

            {/* Radial Gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.05)_0%,transparent_70%)]" />

            {/* Animated Vertical Data Lines */}
            <div className="absolute inset-0 opacity-[0.03]">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-0 bottom-0 w-[1px] bg-cyan animate-pulse"
                        style={{
                            left: `${i * 10}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${3 + i}s`
                        }}
                    />
                ))}
            </div>

            {/* Diagonal Technical Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="diag-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M 100 0 L 0 100 M -25 25 L 25 -25 M 75 125 L 125 75" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyan" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diag-grid)" />
            </svg>

            {/* Floating technical particles / dust */}
            <div className="absolute inset-0 noise" />
        </div>
    );
};
