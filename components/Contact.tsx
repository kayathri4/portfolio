"use client";

import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/data";
import { Mail, Linkedin, Radio, Wifi } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
    const { hero } = SITE_CONTENT;
    return (
        <section id="contact" className="container py-24 relative mb-20">
            <div className="max-w-3xl mx-auto glass-card p-8 md:p-16 text-center flex flex-col items-center gap-8 relative overflow-hidden">
                {/* Animated signal rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                    <motion.div
                        animate={{ scale: [1, 2], opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
                        className="absolute w-64 h-64 border border-primary rounded-full"
                    />
                    <motion.div
                        animate={{ scale: [1, 2], opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeOut", delay: 1 }}
                        className="absolute w-64 h-64 border border-primary rounded-full"
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent animate-pulse">
                        <Radio className="w-8 h-8" />
                    </div>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em]">Signal_Locked: Awaiting_Input</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Let&apos;s Connect</h2>
                    <p className="max-w-xl text-muted-foreground leading-relaxed">
                        Ready to collaborate on geospatial intelligence, Earth observation, or applied AI systems.
                        Open to research, engineering, and ML-focused roles in satellite analytics and computer vision.
                    </p>
                </div>

                <div className="relative z-10 w-full max-w-2xl flex flex-col gap-12 mt-4">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={hero.socials.email} className="min-w-[160px]">
                                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 group relative overflow-hidden">
                                    <Mail className="mr-2 h-4 w-4" /> Email
                                </Button>
                            </Link>
                            <Link href={hero.socials.linkedin} target="_blank" className="min-w-[160px]">
                                <Button variant="outline" className="w-full h-12 border-white/10 hover:bg-white/5 font-mono text-xs uppercase tracking-widest">
                                    <Linkedin className="mr-2 h-4 w-4 text-primary" /> LinkedIn
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* 
                    <div className="flex flex-col gap-8 pt-12 border-t border-white/5 items-center">
                        <h4 className="text-sm md:text-base font-mono text-primary uppercase tracking-[0.3em] font-bold">Open to Opportunities In</h4>
                        <div className="flex flex-col gap-4 text-center">
                            {[
                                "Geospatial Data Science",
                                "Computer Vision Engineer (Geospatial Focus)",
                                "Machine Learning Engineer (Geospatial Focus)"
                            ].map((role) => (
                                <div key={role} className="text-lg md:text-2xl font-bold tracking-tight text-foreground/90 hover:text-primary transition-colors cursor-default">
                                    {role}
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>

                <div className="relative z-10 pt-8 mt-8 border-t border-white/5 w-full flex items-center justify-center gap-2 text-[9px] font-mono text-muted-foreground uppercase opacity-50 tracking-tighter">
                    <Wifi className="w-3 h-3" />
                    Telemetry_Stable // Connection_Encrypted
                </div>
            </div>
        </section>
    );
}
