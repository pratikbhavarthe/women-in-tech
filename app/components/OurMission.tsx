// components/OurMission.tsx
import Image from "next/image";

const OurMission = () => {
    return (
        <div className="mt-24 mb-16 px-4 md:px-0">
            <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-between">
                {/* Left side image */}
                <div className="w-full md:w-1/2 relative h-[400px] mt-8 md:mt-0 md:mr-4 lg:mr-8 xl:mr-16 px-4 sm:px-6">
                    <Image
                        src="/womenbg3.jpeg" // Replace with your actual image path
                        alt="Our Mission"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                {/* Right side content with text */}
                <div className="w-full md:w-1/2 p-6 rounded-lg flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 mb-6 text-justify">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 text-justify">
                            Our mission is to create opportunities for women in
                            the tech industry, bridging the gender gap and
                            providing a platform for innovation, leadership, and
                            growth. We aim to build a future where diversity in
                            tech becomes the norm, not the exception.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
