import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-14 items-center justify-between">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">Kayathri.Dev</span>
                    </Link>
                    <div className="flex gap-6 text-sm font-medium">
                        <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
                        <Link href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
                        <Link href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">Skills</Link>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search or extra content */}
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="https://github.com" target="_blank" rel="noreferrer">
                            <Button variant="ghost" size="icon">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <Button variant="ghost" size="icon">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>
                        <Link href="mailto:hello@example.com">
                            <Button variant="ghost" size="icon">
                                <Mail className="h-4 w-4" />
                                <span className="sr-only">Email</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
