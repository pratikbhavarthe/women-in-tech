// components/AboutUs.tsx
import Image from 'next/image';
import { InteractiveHoverButton } from '../../components/ui/interactive-hover-button'; // Import your InteractiveHoverButton component

const AboutUs = () => {
  return (
    <div className="mt-24 mb-16 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-between">
        {/* Left side content with text aligned to outer card */}
        <div className="w-full md:w-1/2 p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-left">
              At Women In Tech, we believe that diversity and inclusion are the driving forces behind groundbreaking innovation. As the tech industry continues to evolve, we are committed to creating a space where women not only participate but thrive, lead, and shape the future of technology.
            </p>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 relative h-[400px] mt-8 md:mt-0 md:ml-4 lg:ml-8 xl:ml-16 px-4 sm:px-6">
          <Image
            src="/womenbg2.jpeg" // Replace with your actual image path
            alt="Women in Technology"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
