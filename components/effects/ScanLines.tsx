"use client";

export default function ScanLines() {
    return (
        <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden opacity-20">
            <div className="w-full h-[2px] bg-primary/20 animate-scan blur-[1px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%]" />
        </div>
    );
}
