// components/OurServices.tsx
import React from "react";
import Image from "next/image"; // Importing Image from Next.js
import { FaRegHandshake, FaChalkboardTeacher, FaBriefcase, FaUsers, FaPlus } from 'react-icons/fa';
import { cn } from "@/lib/utils";

// Function to render the OurServices component
const OurServices = () => {
  return (
    <div className="mt-24 mb-16 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-purple-500 mb-12">
          Our Services
        </h2>
        
        {/* BentoGrid component to display service cards in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-300 hover:bg-purple-600 hover:text-white hover:shadow-lg transition-all duration-300 group flex flex-col justify-between rounded-lg p-4`}
            >
              {/* Image with adjusted size for square-shaped cards */}
              <div className="relative w-full h-[300px] overflow-hidden rounded-xl mb-4">
                {service.header}
              </div>
              <div className="flex flex-col justify-between h-full">
                <div className="font-semibold text-lg mb-2">{service.title}</div>
                <p className="text-sm mb-2 flex-1 text-gray-600 group-hover:text-white">
                  {service.description}
                </p>
                
                {/* Add additional items under the respective services */}
                {service.additionalInfo && (
                  <ul className="text-sm mb-2 flex flex-wrap gap-2">
                    {service.additionalInfo.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center py-1 px-4 rounded-full bg-purple-600 text-white opacity-100 group-hover:bg-white group-hover:text-purple-600 group-hover:opacity-100 transition-all duration-300"
                      >
                        <FaPlus className="mr-2 text-white group-hover:text-purple-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center text-gray-600 group-hover:text-white">
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Service items for BentoGrid
const services = [
  {
    title: "Career Growth",
    description: "Access exclusive job opportunities and career resources.",
    header: (
      <Image
        src="/womenbg7.jpeg" // Path to your image
        alt="Career Growth"
        width={400}
        height={300} // Adjusted height to match square size
        className="object-cover w-full h-full"
      />
    ),
    icon: <FaRegHandshake className="h-4 w-4" />,
    additionalInfo: [
      "Job Board",
      "Resume Reviews",
      "Interview Prep"
    ], // Added extra points under Career Growth
  },
  {
    title: "Upskilling",
    description: "Enhance your technical and professional skills.",
    header: (
      <Image
        src="/womenbg8.jpeg" // Path to your image
        alt="Upskilling"
        width={400}
        height={300} // Adjusted height to match square size
        className="object-cover w-full h-full"
      />
    ),
    icon: <FaChalkboardTeacher className="h-4 w-4" />,
    additionalInfo: [
      "Online Courses",
      "Workshops",
      "Mentorship"
    ], // Added extra points under Upskilling
  },
  {
    title: "Consultancy",
    description: "Expert consulting services for your projects.",
    header: (
      <Image
        src="/womenbg5.jpeg" // Path to your image
        alt="Consultancy"
        width={400}
        height={300} // Adjusted height to match square size
        className="object-cover w-full h-full"
      />
    ),
    icon: <FaBriefcase className="h-4 w-4" />,
    additionalInfo: [
      "Project Support",
      "Technical Consulting",
      "Strategy Planning"
    ], // Added extra points under Consultancy
  },
  {
    title: "Community",
    description: "Connect with like-minded professionals.",
    header: (
      <Image
        src="/womenbg6.jpeg" // Path to your image
        alt="Community"
        width={400}
        height={300} // Adjusted height to match square size
        className="object-cover w-full h-full"
      />
    ),
    icon: <FaUsers className="h-4 w-4" />,
    additionalInfo: [
      "Discussion Forum",
      "Networking Events",
      "Resource Sharing"
    ], // Added extra points under Community
  },
];

export default OurServices;
