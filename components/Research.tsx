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
import { ExternalLink, BookOpen, Quote, FileText, Calendar } from "lucide-react";
import Link from "next/link";

const PUBLICATIONS = [
    {
        type: "Manuscript (Submitted)",
        date: "12/2025",
        title: "Automated river gauge plate reading using a hybrid object detection and generative AI framework in the Limpopo River Basin",
        authors: "Kayathri Vigneswaran, Hugo Retief, Jai Clifford Holmes, Mariangel Garcia Andarcia, Hansaka Tennakoon",
        link: "https://arxiv.org/abs/2512.23454"
    },
    {
        type: "Manuscript (Submitted)",
        date: "07/2025",
        title: "Satellite-Surface-Area Machine Learning Models for Reservoir Storage Estimation: Regime-Sensitive Evaluation and Operational Deployment at Loskop Dam, South Africa",
        authors: "Hugo Retief, Kayathri Vigneswaran, Surajit Ghosh, Mariangel Garcia Andarcia, Chris Dickens",
        link: "https://arxiv.org/abs/2502.19989"
    },
    {
        type: "Technical Report",
        date: "N/A",
        title: "Performance evaluation of ECMWF monthly rainfall forecasts in the Limpopo River Basin",
        authors: "Kayathri Vigneswaran, Surajit Ghosh, Hugo Retief, Mariangel Garcia Andarcia, Chris Dickens",
        link: "https://cgspace.cgiar.org/items/a7431840-ef88-4ee1-8556-922a88d0495c"
    },
    {
        type: "Technical Report",
        date: "N/A",
        title: "Experimental drought forecast for Limpopo River Basin",
        authors: "Kayathri Vigneswaran, Surajit Ghosh, Hugo Retief, Mariangel Garcia Andarcia, Chris Dickens",
        link: "https://cgspace.cgiar.org/items/8a00ab81-85da-479d-81ff-fcfbc201762c"
    }
];

export default function Research() {
    return (
        <section id="research" className="container py-24 relative overflow-hidden">
            <div className="flex flex-col gap-4 mb-16 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono tracking-widest mx-auto uppercase">
                    <BookOpen className="w-3 h-3" />
                    Archive_Index: Research_Output
                </div>
                <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Research</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                    Peer-reviewed manuscripts and technical documentation of geospatial research.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:max-w-6xl mx-auto">
                {PUBLICATIONS.map((pub, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="glass-card flex flex-col justify-between group h-full hover:border-primary/40 transition-all duration-500 overflow-hidden relative border-white/5 bg-white/5">
                            {/* Terminal scan effect */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 group-hover:bg-primary/50 group-hover:translate-y-full transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100" />

                            <CardHeader className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <Badge className="bg-primary/10 text-primary text-[9px] font-mono uppercase tracking-widest border-primary/20">
                                                {pub.type}
                                            </Badge>
                                            {pub.date !== "N/A" && (
                                                <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" /> {pub.date}
                                                </span>
                                            )}
                                        </div>
                                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors leading-tight mt-2">
                                            {pub.title}
                                        </CardTitle>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors flex-shrink-0">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="flex flex-col gap-4 relative z-10 flex-grow">
                                <div className="flex items-start gap-3">
                                    <Quote className="w-4 h-4 text-primary/40 flex-shrink-0 mt-1" />
                                    <p className="text-[13px] text-muted-foreground leading-relaxed font-mono">
                                        {pub.authors}
                                    </p>
                                </div>

                                {/* Metadata Visualization */}
                                <div className="mt-auto pt-4 border-t border-white/5 space-y-3">
                                    <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase opacity-60">
                                        <span>Citation_Status</span>
                                        <span className="text-primary italic">Verified</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-primary/40"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                        />
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="pt-4 relative z-10">
                                <Link href={pub.link} target="_blank" className="w-full">
                                    <Button className="w-full bg-white/5 text-white/80 hover:bg-primary/20 hover:text-primary border-white/10 hover:border-primary/30 transition-all font-mono text-[10px] uppercase h-10 tracking-widest">
                                        Identify Resource <ExternalLink className="ml-2 h-3 w-3" />
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
