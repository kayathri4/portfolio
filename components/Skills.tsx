"use client";

import { SITE_CONTENT } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Database, Zap, Binary, Cloud } from "lucide-react";

export default function Skills() {
    const { skills } = SITE_CONTENT;

    const iconMap: Record<string, any> = {
        "Remote Sensing & SAR": Database,
        "Machine Learning": Binary,
        "Geospatial Dev": Zap,
        "Cloud & Tools": Cloud
    };

    return (
        <section id="skills" className="container py-24 relative">
            <div className="max-w-4xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-2 text-center items-center">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Resource_Allocation: Tech_Stack</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">System Capabilities</h2>
                </div>

                <div className="grid gap-6">
                    {Object.entries(skills).map(([category, items], idx) => {
                        const Icon = iconMap[category] || Database;
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-primary/30 transition-colors"
                            >
                                <div className="w-16 h-16 shrink-0 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Icon className="w-8 h-8" />
                                </div>

                                <div className="flex flex-col gap-4 flex-1">
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
                                        <h3 className="text-xl font-bold tracking-tight">{category}</h3>
                                        <span className="text-[9px] font-mono text-muted-foreground uppercase">Layer_0{idx + 1} // Index_Verified</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        {items.map(skill => (
                                            <Badge key={skill} variant="secondary" className="bg-primary/5 hover:bg-primary/15 text-primary border-primary/20 font-mono text-[10px] uppercase tracking-tighter cursor-default">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Visual data bar */}
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-primary to-primary/20"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
