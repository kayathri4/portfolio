"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Map as MapIcon, Crosshair } from "lucide-react";

const SUBTITLES = [
    "•Optical •SAR •ML/DL •Computer Vision",
    "Satellite Analytics for Real-World Systems",
    "Geospatial Intelligence & Remote Sensing",
    "Reproducible Geospatial Pipelines"
];

export default function Hero() {
    const { hero } = SITE_CONTENT;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % SUBTITLES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
            {/* Coordinate Overlay */}
            <div className="absolute top-10 right-10 flex flex-col items-end opacity-80 select-none hidden md:flex">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-primary">
                    <Crosshair className="w-3 h-3" />
                    <span>LOCKED_LOC: 35.67°N, 139.65°E</span>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground mt-1 uppercase">
                    Sector: Tokyo, Japan // Pacific_Rim
                </div>
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono uppercase tracking-widest animate-pulse">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            System Online: Active Monitoring
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-muted-foreground text-[10px] font-mono uppercase tracking-widest">
                            <MapIcon className="w-3 h-3 text-primary" />
                            Tokyo, Japan
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter max-w-4xl text-balance">
                        {hero.role}
                    </h1>

                    <div className="h-8 md:h-10 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="text-lg md:text-2xl font-mono text-primary/80"
                            >
                                {SUBTITLES[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="max-w-[700px] text-muted-foreground text-sm md:text-base leading-relaxed"
                >
                    {hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 mt-4"
                >
                    <Link href="#projects">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-12 px-8 group">
                            Explore Intelligence <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="outline" size="lg" className="h-12 px-8 border-primary/30 hover:bg-primary/10">
                            Initiate Contact
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative HUD corners */}
            <div className="absolute bottom-10 left-10 w-20 h-20 border-l border-b border-primary/20 pointer-events-none" />
            <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-primary/20 pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-primary/20 pointer-events-none" />
        </section>
    );
}
