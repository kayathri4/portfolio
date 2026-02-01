"use client";

export default function TopographicGrid() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Topo lines using the CSS pattern */}
            <div className="absolute inset-0 topo-bg opacity-50" />

            {/* Radial Gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#0B0E14_80%)]" />

            {/* Pulse points */}
            <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse-data blur-[1px]" />
            <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-primary rounded-full animate-pulse-data blur-[1px] delay-700" />
            <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-primary rounded-full animate-pulse-data blur-[1px] delay-1000" />
        </div>
    );
}
