import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/data";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    const { hero } = SITE_CONTENT;
    return (
        <section id="contact" className="container py-8 md:py-12 lg:py-24 bg-slate-50 dark:bg-slate-900/50 rounded-lg my-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Open to collaborations on geospatial analysis, SAR processing, and machine learning projects.
                </p>
                <div className="flex gap-4 mt-6">
                    <Link href={hero.socials.email}>
                        <Button size="lg">
                            <Mail className="mr-2 h-4 w-4" /> Email Me
                        </Button>
                    </Link>
                    <Link href={hero.socials.linkedin} target="_blank">
                        <Button variant="outline" size="lg">
                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
