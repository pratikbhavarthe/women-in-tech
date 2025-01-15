import Navbar from "./components/Navabr";
import Hero from "./components/Hero";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />
            <Hero />
        </div>
    );
}
