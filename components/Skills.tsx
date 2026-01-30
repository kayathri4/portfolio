import { SITE_CONTENT } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
    const { skills } = SITE_CONTENT;
    return (
        <section id="skills" className="container py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Technical Skills</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    A comprehensive toolkit for data science and geospatial analysis.
                </p>
            </div>

            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4 mt-12">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="flex flex-col gap-2">
                        <h3 className="font-semibold text-lg">{category}</h3>
                        <div className="flex flex-col gap-1">
                            {items.map(skill => (
                                <div key={skill} className="text-sm text-muted-foreground flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
