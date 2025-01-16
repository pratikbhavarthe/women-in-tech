"use client";

import { TextAnimate } from "../../components/ui/text-animate"; // Make sure the path is correct
import { TextGenerateEffect } from "../../components/ui/text-generate-effect"; // Import the new component
import React from "react";

const Vision = () => {
  return (
    <div className="mt-16 mb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Vision Title with Text Animation */}
        <TextAnimate
          animation="fadeIn" // You can change the animation type here
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-500 mb-6"
        >
          Equal Opportunities for Women in Tech
        </TextAnimate>

        {/* Vision Description with Text Generate Effect */}
        <TextGenerateEffect
          words="Our vision is to create equal representation for women in tech, fostering innovation and diversity. We aim to empower women, break barriers, and shape a dynamic, inclusive future in the industry."
          className="text-lg sm:text-xl text-gray-600 mb-6 max-w-3xl mx-auto"
          filter={true} // You can toggle the blur effect
          duration={0.5} // Adjust the duration of the animation
        />
      </div>
    </div>
  );
};

export default Vision;
