"use client";

import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/data";
import { ExternalLink, Layers, Cpu, CheckCircle2, FlaskConical } from "lucide-react";
import Link from "next/link";
import SmartAquaPipeline from "./SmartAquaPipeline";

export default function Projects() {
    const { projects } = SITE_CONTENT;

    return (
        <section id="projects" className="container py-24 relative overflow-hidden">
            <div className="flex flex-col gap-4 mb-16 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono tracking-widest mx-auto uppercase">
                    <FlaskConical className="w-3 h-3" />
                    Analysis_Report: Case_Studies
                </div>
                <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Intelligence Portfolio</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                    Scientific visualizations of mission-critical geospatial pipelines.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:max-w-6xl mx-auto">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="glass-card flex flex-col justify-between group h-full hover:border-primary/40 transition-all duration-500 overflow-hidden relative">
                            {/* Scanline effect on card hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <CardHeader className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-mono text-primary/60">ID: {project.id.toUpperCase()}</span>
                                        <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                    </div>
                                    <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors">
                                        {idx % 2 === 0 ? <Layers className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
                                    </div>
                                </div>
                                <div className="font-mono text-[11px] text-primary bg-primary/10 px-2 py-1 rounded inline-block w-fit uppercase">
                                    {project.subtitle}
                                </div>
                            </CardHeader>

                            <CardContent className="flex flex-col gap-6 relative z-10">
                                <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-white/10 pl-4">
                                    "{project.description}"
                                </p>

                                {/* Pipeline Visualization */}
                                {/* Pipeline Visualization */}
                                {project.id === 'smartaqua' ? (
                                    <SmartAquaPipeline />
                                ) : (
                                    <div className="flex flex-col gap-3">
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Processing pipeline</span>
                                        <div className="flex items-center justify-between px-4 py-3 rounded bg-white/5 border border-white/5 font-mono text-[9px] text-white/50">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-primary italic">INPUT</span>
                                                <span>Raw Pixel</span>
                                            </div>
                                            <div className="h-[1px] w-8 bg-white/10" />
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-primary italic">MODEL</span>
                                                <span>Inference</span>
                                            </div>
                                            <div className="h-[1px] w-8 bg-white/10" />
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="text-primary italic">OUTPUT</span>
                                                <span>INSIGHT</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Metrics */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 rounded border border-white/5 bg-white/5 flex flex-col gap-1">
                                        <span className="text-[9px] font-mono text-muted-foreground uppercase">Precision_Score</span>
                                        <span className="text-lg font-mono text-primary font-bold">94.2%</span>
                                    </div>
                                    <div className="p-3 rounded border border-white/5 bg-white/5 flex flex-col gap-1">
                                        <span className="text-[9px] font-mono text-muted-foreground uppercase">Lat_Refresh</span>
                                        <span className="text-lg font-mono text-primary font-bold"><span className="text-xs">NRT</span></span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} className="bg-white/5 text-muted-foreground text-[9px] font-mono uppercase tracking-tighter hover:bg-white/10 hover:text-white transition-colors border-none">
                                            #{tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="pt-6 relative z-10">
                                <Link href={project.link} className="w-full">
                                    <Button className="w-full bg-white/5 text-white/80 hover:bg-primary hover:text-white border-white/10 transition-all font-mono text-xs uppercase h-11 tracking-widest">
                                        Access Data <ExternalLink className="ml-2 h-3 w-3" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
