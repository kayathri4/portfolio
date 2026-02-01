export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background/50 backdrop-blur-sm relative z-50">
            <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col md:items-start gap-1">
                    <p className="text-center text-[10px] font-mono leading-loose text-muted-foreground md:text-left uppercase tracking-tighter">
                        Build_Manifest: NEXT_JS + TAILWIND + SHADCN
                    </p>
                    <p className="text-[9px] font-mono text-primary/40 text-center md:text-left">
                        V_1.0.4 // GEOSPATIAL_CORE_ESTABLISHED
                    </p>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    <span>{new Date().getFullYear()} © Kayathri.Dev</span>
                    <span className="opacity-20">|</span>
                    <span className="text-primary italic">Status: Nominal</span>
                </div>
            </div>
        </footer>
    );
}
