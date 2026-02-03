"use client";

import { motion } from "framer-motion";
import { Award, Trophy, ExternalLink } from "lucide-react";
import Image from "next/image";
import { SITE_CONTENT } from "@/lib/data";
import dialogAward from "@/public/dialog-award.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Achievements() {
    return (
        <section id="achievements" className="container py-24 relative overflow-hidden">
            <div className="flex flex-col gap-4 mb-16 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono tracking-widest mx-auto uppercase">
                    <Trophy className="w-3 h-3" />
                    Milestone_Log: Achievements
                </div>
                <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Achievements</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                    Recognition and awards for innovation and sustainable solutions in the field.
                </p>
            </div>

            <div className="max-w-5xl mx-auto">
                {SITE_CONTENT.achievements.map((achievement, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden p-8 relative group"
                    >
                        {/* Terminal scan effect */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 group-hover:bg-primary/50 group-hover:translate-y-full transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100" />

                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-colors shadow-2xl">
                            <Image
                                src={achievement.image === "/dialog-award.jpg" ? dialogAward : achievement.image}
                                alt={achievement.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-primary">
                                    <Award className="w-5 h-5" />
                                    <span className="font-mono text-xs uppercase tracking-widest">{achievement.organization}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                                    {achievement.title}
                                </h3>
                                <p className="text-primary/80 font-mono text-sm uppercase tracking-tighter">
                                    {achievement.project}
                                </p>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                {achievement.description}
                            </p>

                            {/* @ts-ignore */}
                            {achievement.link && (
                                <Link href={achievement.link} target="_blank" className="mt-4">
                                    <Button className="bg-white/5 text-white/80 hover:bg-primary/20 hover:text-primary border-white/10 hover:border-primary/30 transition-all font-mono text-[10px] uppercase h-11 px-6 tracking-widest">
                                        Access News Report <ExternalLink className="ml-2 h-3.5 w-3.5" />
                                    </Button>
                                </Link>
                            )}

                            {/* <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase opacity-60">
                                <span>Award_Status</span>
                                <span className="text-primary italic">Distinction Received</span>
                            </div> */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
