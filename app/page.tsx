import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TopographicGrid from "@/components/backgrounds/TopographicGrid";
import ScanLines from "@/components/effects/ScanLines";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col relative bg-[#0B0E14]">
            <TopographicGrid />
            <ScanLines />
            <Navbar />
            <main className="flex-1">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
