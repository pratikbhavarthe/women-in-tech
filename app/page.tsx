import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JoinOurCommunity from "./components/JoinOurCommunity";
import AboutUs from "./components/AboutUs";
import OurMission from "./components/OurMission";
import OurServices from "./components/OurServices";
import Footer from "./components/Footer";
import Vision from "./components/Vision";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />
            <Hero />
            <Vision />
            <AboutUs />
            <OurMission />
            <JoinOurCommunity />
            <OurServices />
            <Footer />
            
        </div>
    );
}
