import { SITE_CONTENT } from "@/lib/data";

export default function About() {
    const { about } = SITE_CONTENT;
    return (
        <section id="about" className="container py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-start gap-4 text-center md:items-center">
                <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {about.summary}
                </p>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {about.details}
                </p>
            </div>
        </section>
    );
}
