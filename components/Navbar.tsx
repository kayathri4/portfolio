"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Cpu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-background/60 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/30 transition-colors">
                            <Cpu className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-mono font-bold text-sm tracking-tighter uppercase">
                            Kayathri Vigneswaran
                        </span>
                    </Link>
                    <div className="hidden md:flex gap-8">
                        <Link href="#about" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"> About</Link>
                        <Link href="#projects" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"> Projects</Link>
                        <Link href="#research" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"> Research</Link>
                        <Link href="#achievements" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"> Achievements</Link>
                        <Link href="#skills" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"> Skills</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Link href="https://github.com/kayathri4" target="_blank">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                <Github className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="https://linkedin.com/in/kayathri-vig" target="_blank">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                <Linkedin className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
                    <Link href="#contact">
                        <Button className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 text-[10px] font-mono h-8 px-4 uppercase tracking-wider">
                            Let&apos;s connect
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
