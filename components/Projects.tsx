import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    const { projects } = SITE_CONTENT;

    return (
        <section id="projects" className="container py-8 md:py-12 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Featured Projects</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Applying machine learning and remote sensing to real-world problems.
                </p>
            </div>
            <div className="grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-2 mx-auto mt-12">
                {projects.map((project) => (
                    <Card key={project.id} className="flex flex-col justify-between">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                {/* Placeholder for project image or icon if desired */}
                            </div>
                            <CardDescription className="text-md font-medium text-foreground">{project.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="outline">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link href={project.link} className="w-full">
                                <Button className="w-full" variant="secondary">
                                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
