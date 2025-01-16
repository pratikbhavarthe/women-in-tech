import Navbar from "./components/Navabr";
import Hero from "./components/Hero";
import JoinOurCommunity from "./components/JoinOurCommunity";
import AboutUs from "./components/AboutUs";
import OurMission from "./components/OurMission";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />
            <Hero />
            <AboutUs />
            <OurMission />
            <JoinOurCommunity />
            
        </div>
    );
}
