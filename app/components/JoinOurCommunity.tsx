// components/AboutUs.tsx
import Image from 'next/image';
import { InteractiveHoverButton } from '../../components/ui/interactive-hover-button'; // Import your InteractiveHoverButton component

const JoinOurCommunity = () => {
  return (
    <div className="mt-24 mb-16 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-between">
        {/* Left side content with text aligned to outer card */}
        <div className="w-full md:w-1/2 p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-left">
              Join our community of talented women transforming the tech industry.
              We are dedicated to providing a platform for women to thrive, innovate, 
              and lead in the technology space. Together, we push boundaries, inspire change, 
              and create a brighter future for tech.
            </p>
          </div>
          {/* Replace simple button with InteractiveHoverButton and make it wider */}
          <InteractiveHoverButton className="px-8 py-3 rounded-full bg-purple-500 text-black hover:bg-purple-600 text-base max-w-max">
            Join Us
          </InteractiveHoverButton>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 relative h-[400px] mt-8 md:mt-0 md:ml-4 lg:ml-8 xl:ml-16 px-4 sm:px-6">
          <Image
            src="/womenbg1.jpeg" // Replace with your actual image path
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

export default JoinOurCommunity;
