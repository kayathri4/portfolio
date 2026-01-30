export default function Footer() {
    return (
        <footer className="border-t py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built with Next.js, Tailwind CSS, and Shadcn UI.
                </p>
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} Kayathri.Dev
                </p>
            </div>
        </footer>
    );
}
