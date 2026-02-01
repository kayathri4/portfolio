"use client";

import { SITE_CONTENT } from "@/lib/data";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function About() {
    const { about } = SITE_CONTENT;
    return (
        <section id="about" className="container py-24 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Subtle background decoration */}
                    <div className="absolute top-0 right-0 p-4 opacity-5 hover:opacity-20 transition-opacity">
                        <Terminal className="w-32 h-32" />
                    </div>

                    <div className="flex flex-col gap-8 relative z-10">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Module: Profile_Summary</span>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Mission Objective</h2>
                        </div>

                        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                            <div className="flex flex-col gap-4">
                                <div className="aspect-square rounded bg-slate-800/50 border border-white/5 overflow-hidden flex items-center justify-center relative group">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                                    <span className="text-xs font-mono text-primary/40 uppercase tracking-widest text-center px-4">Biometric Data Placeholder</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-mono text-muted-foreground uppercase">Status: ACTIVE</span>
                                    <span className="text-[10px] font-mono text-muted-foreground uppercase">Role: GS-DATA_SCIENTIST</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed md:text-lg">
                                <p>{about.summary}</p>
                                <p>{about.details}</p>

                                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono text-primary uppercase">Core_Focus</span>
                                        <span className="text-sm font-semibold text-foreground">Computer Vision for EO</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono text-primary uppercase">Primary_Input</span>
                                        <span className="text-sm font-semibold text-foreground">SAR & Optical Fusion</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono text-primary uppercase">Location</span>
                                        <span className="text-sm font-semibold text-foreground">10.21°N, 78.45°E</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
