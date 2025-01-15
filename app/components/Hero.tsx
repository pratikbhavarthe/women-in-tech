import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <section className="relative h-[80vh] w-full">
            {/* Hero Image */}
            <div className="absolute inset-0">
                <Image
                    src="/womengroup.jpeg" // Replace with your hero image path
                    alt="Hero background"
                    layout="fill" // Ensures the image spans the entire container
                    objectFit="cover" // Maintains aspect ratio while covering the area
                    priority // Optimizes loading for the hero image
                />
            </div>
            {/* Text Overlay */}
            <div className="absolute bottom-10 right-10 text-white p-6 max-w-md">
                <h1 className="text-4xl font-bold mb-4">
                    Empowering Women in Technology
                </h1>
                <p className="text-lg">
                    Join our community of talented women transforming the tech
                    industry.
                </p>
            </div>
        </section>
    );
};

export default Hero;
