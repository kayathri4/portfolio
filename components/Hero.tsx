import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONTENT } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const { hero } = SITE_CONTENT;

    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                    {hero.role} <br className="hidden sm:inline" />
                    <span className="text-primary">{hero.tagline}</span>
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground sm:text-x">
                    {hero.description}
                </p>
            </div>
            <div className="flex flex-wrap gap-2">
                {hero.badges.map((badge) => (
                    <Badge key={badge} variant="secondary">{badge}</Badge>
                ))}
            </div>
            <div className="flex gap-4">
                <Link href="#projects">
                    <Button size="lg">
                        View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
                <Link href="#contact">
                    <Button variant="outline" size="lg">
                        Contact Me
                    </Button>
                </Link>
            </div>
        </section>
    );
}
