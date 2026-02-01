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
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Initiate Uplink</h2>
                    <p className="max-w-md text-muted-foreground leading-relaxed">
                        Ready for mission deployment. Open for technical collaborations on geospatial analysis and deep learning research.
                    </p>
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-4">
                    <Link href={hero.socials.email}>
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 group relative overflow-hidden">
                            <span className="relative z-10 flex items-center">
                                <Mail className="mr-3 h-5 w-5" /> Establish Connection
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                        </Button>
                    </Link>
                    <Link href={hero.socials.linkedin} target="_blank">
                        <Button variant="outline" size="lg" className="h-14 px-10 border-white/10 hover:bg-white/5 transition-all text-sm font-mono uppercase tracking-widest">
                            <Linkedin className="mr-3 h-5 w-5 text-primary" /> LinkedIn_Auth
                        </Button>
                    </Link>
                </div>

                <div className="relative z-10 pt-8 mt-8 border-t border-white/5 w-full flex items-center justify-center gap-2 text-[9px] font-mono text-muted-foreground uppercase opacity-50 tracking-tighter">
                    <Wifi className="w-3 h-3" />
                    Telemetry_Stable // Connection_Encrypted
                </div>
            </div>
        </section>
    );
}
