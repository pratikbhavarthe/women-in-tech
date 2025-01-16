import Image from "next/image";

const OurMission = () => {
    return (
        <div className="mt-12 mb-12 px-4 sm:px-6 md:px-0">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-8">
                {/* Left side image (image on the left in desktop and above in mobile view) */}
                <div className="w-full sm:w-1/2 relative h-[300px] sm:h-[400px] mt-4 sm:mt-0 px-4 sm:px-6 order-2 sm:order-1">
                    <Image
                        src="/womenbg3.jpeg" // Replace with your actual image path
                        alt="Our Mission"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                {/* Right side content with text (text on the right in desktop, above image in mobile view) */}
                <div className="w-full sm:w-1/2 p-4 sm:p-6 rounded-lg flex flex-col justify-between order-1 sm:order-2">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 mb-4 sm:mb-6 text-justify">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 mb-4 sm:mb-6 text-justify">
                            Our mission is to create opportunities for women in the tech industry, bridging the gender gap and providing a platform for innovation, leadership, and growth. We aim to build a future where diversity in tech becomes the norm, not the exception.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
