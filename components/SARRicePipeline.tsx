"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SARRicePipeline() {
    return (
        <div className="flex flex-col gap-3 w-full">
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Processing Pipeline</span>
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-2 p-3 rounded bg-white/5 border border-white/5 font-mono text-[9px]">

                {/* INPUT */}
                <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-primary italic font-bold">INPUT</span>
                        <div className="h-[1px] flex-1 bg-white/10"></div>
                    </div>
                    <ul className="flex flex-col gap-1.5 text-white/70">
                        <li className="flex items-start gap-1.5">
                            <span className="text-primary/50 mt-[2px]">&gt;</span>
                            <span>Sentinel-1 SAR (VV & VH)</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                            <span className="text-primary/50 mt-[2px]">&gt;</span>
                            <span>Ground-observation Data</span>
                        </li>
                    </ul>
                </div>

                {/* Arrow Divider */}
                <div className="flex items-center justify-center text-white/10 md:px-1">
                    <ArrowRight className="w-3 h-3 rotate-90 md:rotate-0" />
                </div>

                {/* PROCESS / MODEL */}
                <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-primary italic font-bold">MODEL</span>
                        <div className="h-[1px] flex-1 bg-white/10"></div>
                    </div>
                    <ul className="flex flex-col gap-1.5 text-white/70">
                        <li className="flex items-start gap-1.5">
                            <span className="text-primary/50 mt-[2px]">&gt;</span>
                            <span>SAR Pre-processing (SNAP)</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                            <span className="text-primary/50 mt-[2px]">&gt;</span>
                            <span>Multitemporal Feature Engineering</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                            <span className="text-primary/50 mt-[2px]">&gt;</span>
                            <span>OBIA / ML Classification</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                            <span className="text-primary/50 mt-[2px]">&gt;</span>
                            <span>Accuracy Assessment</span>
                        </li>
                    </ul>
                </div>

                {/* Arrow Divider */}
                <div className="flex items-center justify-center text-white/10 md:px-1">
                    <ArrowRight className="w-3 h-3 rotate-90 md:rotate-0" />
                </div>

                {/* OUTPUT */}
                <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-primary italic font-bold">OUTPUT</span>
                        <div className="h-[1px] flex-1 bg-white/10"></div>
                    </div>
                    <ul className="flex flex-col gap-1.5 text-white/70">
                        <li className="flex items-start gap-1.5">
                            <span className="text-primary/50 mt-[2px]">&gt;</span>
                            <span>Georeferenced Shapefiles</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                            <span className="text-secondary/50 mt-[2px]">&gt;</span>
                            <span>Object-level labels</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                            <span className="text-secondary/50 mt-[2px]">&gt;</span>
                            <span>Reliability Metrics</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
