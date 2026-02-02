"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, Info, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RiverGaugePage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white font-sans selection:bg-primary/30">
            {/* Ambient Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
            </div>

            <div className="container relative z-10 py-12 md:py-20">
                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/#projects">
                        <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all font-mono text-xs uppercase tracking-widest">
                            <ArrowLeft className="w-4 h-4" /> Back to Intelligence_Portfolio
                        </Button>
                    </Link>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Project Info */}
                    <div className="lg:col-span-12 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono tracking-widest mb-6 uppercase">
                                <Info className="w-3 h-3" /> System_Analysis: RiverGauge_v1.0
                            </div>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                                Automated River Gauge Reading
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed italic border-l-4 border-primary/20 pl-6 mb-8">
                                "A hybrid framework combining YOLOv8 object detection, pose estimation, and multimodal LLMs to automate water level extraction from field imagery in the Limpopo Basin."
                            </p>
                        </motion.div>
                    </div>

                    {/* Paper Embed Section */}
                    <motion.div
                        className="lg:col-span-8 flex flex-col gap-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="relative aspect-[3/4] md:aspect-auto md:h-[800px] rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl group">
                            <iframe
                                src="https://arxiv.org/pdf/2512.23454.pdf#toolbar=0"
                                className="w-full h-full rounded-xl"
                                title="arXiv Paper: Automated river gauge plate reading"
                            />

                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-[1px] border-white/5 pointer-events-none rounded-xl" />
                            <div className="absolute top-4 left-4 flex gap-1.5 pointer-events-none">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                            <div className="absolute top-4 right-6 font-mono text-[10px] text-primary/60 pointer-events-none uppercase tracking-widest">
                                Research_Paper_Embed
                            </div>

                            <div className="absolute bottom-6 right-6 z-20">
                                <Link href="https://arxiv.org/abs/2512.23454" target="_blank">
                                    <Button size="sm" className="bg-primary hover:bg-primary/80 text-white font-mono text-[10px] uppercase tracking-widest shadow-xl">
                                        View Full Paper <ExternalLink className="ml-2 w-3 h-3" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { label: "Object_Detection", value: "YOLOv8 & Pose" },
                                { label: "Reasoning_Engine", value: "GPT-4o / Gemini 2.0" },
                                { label: "Data_Domain", value: "Limpopo River Basin" }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/5 font-mono">
                                    <div className="text-[9px] text-muted-foreground uppercase mb-1">{item.label}</div>
                                    <div className="text-sm font-bold text-primary">{item.value}</div>
                                </div>
                            ))}
                        </div> */}
                    </motion.div>

                    {/* Technical Breakdown */}
                    <motion.div
                        className="lg:col-span-4 flex flex-col gap-8"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="glass-card p-8 rounded-xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" /> Core Methodology
                            </h3>
                            <ul className="space-y-4 font-mono text-xs">
                                {[
                                    "Hybrid Object Detection (YOLOv8)",
                                    "Pose-based scale extraction",
                                    "Multimodal LLM reasoning",
                                    "Automated discharge calculation",
                                    "Resilient to environmental noise"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground group-hover:text-white transition-colors">
                                        <span className="text-primary font-bold">{`[0${i + 1}]`}</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border border-dashed border-white/10 bg-white/[0.02]">
                            <h4 className="text-sm font-bold mb-4 uppercase tracking-widest opacity-60">Tech_Stack_Audit</h4>
                            <div className="flex flex-wrap gap-2">
                                {["YOLOv8", "YOLOv8-Pose", "GPT-4o", "Gemini 2.0", "Python", "Computer Vision"].map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-white/5 rounded text-[10px] text-muted-foreground font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* <div className="p-6 rounded-xl border border-white/10 bg-primary/5">
                            <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                                <FileText className="w-4 h-4" /> Publication_Info
                            </h4>
                            <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">
                                This research introduces a resilient framework for environmental monitoring, specifically designed for sparse data regions like the Limpopo Basin.
                            </p>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

