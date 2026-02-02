"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, Info, CheckCircle2, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RainfallDroughtPage() {
    const papers = [
        {
            title: "Performance evaluation of ECMWF monthly rainfall forecasts",
            url: "https://cgspace.cgiar.org/items/a7431840-ef88-4ee1-8556-922a88d0495c",
            pdf: "https://cgspace.cgiar.org/bitstreams/52491020-8318-4d05-8ab7-d2024040a2c4/download",
            type: "Monthly Rainfall Forecasts"
        },
        {
            title: "Experimental drought forecast for Limpopo River Basin",
            url: "https://cgspace.cgiar.org/items/8a00ab81-85da-479d-81ff-fcfbc201762c",
            pdf: "https://cgspace.cgiar.org/bitstreams/6dd6f289-64a0-4c35-8bcf-b793a43a4af7/download",
            type: "Experimental Drought Forecast"
        }
    ];

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
                                <Info className="w-3 h-3" /> System_Analysis: RainfallDrought_v1.2
                            </div>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                                Rainfall & Drought Analysis
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed italic border-l-4 border-primary/20 pl-6 mb-8">
                                "Evaluating ECMWF-based seasonal rainfall and SPI drought forecasts in the Limpopo Basin using satellite and in-situ observations to quantify forecast skill and uncertainty across diverse climatic zones."
                            </p>
                        </motion.div>
                    </div>

                    {/* Papers Section */}
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        {papers.map((paper, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex items-center justify-between px-2">
                                    <h3 className="text-lg font-mono font-bold text-primary/80 uppercase tracking-wider flex items-center gap-2">
                                        <FileText className="w-4 h-4" /> {paper.type}
                                    </h3>
                                    <div className="flex gap-2">
                                        <Link href={paper.url} target="_blank">
                                            <Button variant="outline" size="sm" className="h-8 text-[10px] font-mono uppercase bg-white/5 border-white/10 hover:bg-primary/20 transition-all">
                                                Go to Item <ExternalLink className="ml-2 w-3 h-3" />
                                            </Button>
                                        </Link>
                                        <Link href={paper.pdf} target="_blank">
                                            <Button size="sm" className="h-8 text-[10px] font-mono uppercase bg-primary hover:bg-primary/80 text-white transition-all">
                                                Download PDF <Download className="ml-2 w-3 h-3" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative aspect-[3/4] md:aspect-auto md:h-[600px] rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl group">
                                    <iframe
                                        src={`https://docs.google.com/viewer?url=${encodeURIComponent(paper.pdf)}&embedded=true`}
                                        className="w-full h-full rounded-xl"
                                        title={paper.title}
                                    />
                                    <div className="absolute inset-0 border-[1px] border-white/5 pointer-events-none rounded-xl" />
                                    <div className="absolute top-4 right-6 font-mono text-[10px] text-primary/40 pointer-events-none uppercase tracking-widest">
                                        Source: CGSpace_CGIAR
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground px-2 font-mono italic">
                                    {paper.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technical Breakdown */}
                    <motion.div
                        className="lg:col-span-4 flex flex-col gap-8"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="glass-card p-8 rounded-xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" /> Core Methodology
                            </h3>
                            <ul className="space-y-4 font-mono text-xs">
                                {[
                                    "ECMWF Seasonal Forecast Performance Evaluation",
                                    "Validation against ground data and CHIRPS Data",
                                    "Standardized Precipitation Index (SPI)",
                                    "Climatology & Temporal Variability",
                                    "Error Metrics & Uncertainty Quant",
                                    "Limpopo Basin Cross-Region Analysis"
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
                                {["Python", "ECMWF", "CHIRPS", "SPI", "Spatial Analysis", "Geospatial Statistics"].map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-white/5 rounded text-[10px] text-muted-foreground font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* <div className="p-6 rounded-xl border border-white/10 bg-primary/5">
                            <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                                <FileText className="w-4 h-4" /> Research_Context
                            </h4>
                            <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">
                                This research provides critical insights into the reliability of global precipitation forecasts for regional water management in the Limpopo River Basin, supporting better drought preparedness and agricultural planning.
                            </p>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

