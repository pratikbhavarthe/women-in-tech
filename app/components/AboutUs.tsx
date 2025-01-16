import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="mt-12 mb-12 px-4 sm:px-6 md:px-0">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Left side content with text aligned to outer card */}
        <div className="w-full sm:w-1/2 p-4 sm:p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 mb-4 sm:mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-600 mb-4 sm:mb-6 text-left">
              At Women In Tech, we believe that diversity and inclusion are the driving forces behind groundbreaking innovation. As the tech industry continues to evolve, we are committed to creating a space where women not only participate but thrive, lead, and shape the future of technology.
            </p>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full sm:w-1/2 relative h-[300px] sm:h-[400px] mt-4 sm:mt-0 px-4 sm:px-6">
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
