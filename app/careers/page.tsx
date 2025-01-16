"use client";

import React from "react";
import Navbar from "../components/Navbar"; // Ensure the path is correct
import Image from "next/image";
import Head from "next/head";

const Careers: React.FC = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <div className="overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-[#f1ede6] py-8 px-4 sm:py-16 sm:px-6">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between relative">
            {/* Left Section */}
            <div className="w-full sm:w-1/2 text-left mb-8 sm:mb-0">
              <h1 className="text-3xl text-purple-600 sm:text-5xl font-bold mb-4">
                Join at Women in Tech
              </h1>
              <p className="text-base text-purple-500 sm:text-xl font-semibold mb-4">
                Elevate your impact. Join our team and grow with us.
              </p>
              <p className="text-sm text-purple-400 sm:text-lg max-w-md">
                Join us in fostering innovation and creating opportunities for
                women in the technology industry. Together, we'll break barriers
                and shape a more inclusive future.
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
              <Image
                src="/bg3.jpeg"
                alt="Careers at Women in Tech"
                width={500}
                height={400}
                className="rounded-lg mx-auto"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="w-full mt-8 sm:absolute sm:bottom-[-200px] sm:left-0">
              <Image
                src="/bg2.jpeg"
                alt="Decorative Bottom Left"
                width={400}
                height={400}
                className="rounded-lg mx-auto sm:mx-0"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 px-4 sm:py-16 sm:px-6">
          <div className="container mx-auto flex justify-end">
            {/* Right-Aligned Content with Left Justified Text */}
            <div className="lg:w-2/3 text-left lg:pl-16">
              <h2 className="text-3xl sm:text-4xl text-purple-600 font-bold mb-6">
                Careers at Women In Tech
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 text-left">
                At Women In Tech, we believe in equal opportunities for women in
                tech. Our mission is to empower women, foster innovation, and
                promote diversity in the technology industry.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 text-left">
                Join a team that’s passionate about driving change and creating
                a future where women lead, inspire, and shape the technological
                landscape. At Uprise, we work on groundbreaking projects,
                leveraging cutting-edge tools like machine learning and
                optimization to build a sustainable future.
              </p>
              <p className="text-lg sm:text-xl text-gray-700 text-left">
                If you're ready to break barriers and thrive in a collaborative
                and supportive environment, we’d love to hear from you.
                Together, we can redefine what’s possible.
              </p>
            </div>
          </div>
        </section>

        {/* Aim Higher - Why Join Us Section */}
        <section className="py-8 px-4 sm:py-16 sm:px-6 bg-white text-gray-800 relative">
          <div className="container mx-auto text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-600">
              Aim Higher - Why Join Us?
            </h2>
            {/* Card Grid - Stacked on mobile, 3 columns on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div
                className="bg-cover bg-center text-white p-6 rounded-lg relative"
                style={{ backgroundImage: "url('/gr1 copy.jpg')" }}
              >
                <h3 className="text-xl text-purple-700 font-semibold mb-4">Innovation</h3>
                <p className="text-base">
                  Work on groundbreaking projects using cutting-edge
                  technologies and make a lasting impact on the world.
                </p>
                <div className="absolute inset-0 bg-noise opacity-20"></div>
              </div>

              {/* Card 2 */}
              <div
                className="bg-cover bg-center text-white p-6 rounded-lg relative"
                style={{ backgroundImage: "url('/gr1 copy.jpg')" }}
              >
                <h3 className="text-xl text-purple-700 font-semibold mb-4">
                  Diversity & Inclusion
                </h3>
                <p className="text-base">
                  Be part of a community where women in tech are celebrated,
                  supported, and empowered to excel in their careers.
                </p>
                <div className="absolute inset-0 bg-noise opacity-20"></div>
              </div>

              {/* Card 3 */}
              <div
                className="bg-cover bg-center text-white p-6 rounded-lg relative"
                style={{ backgroundImage: "url('/gr1 copy.jpg')" }}
              >
                <h3 className="text-xl text-purple-700 font-semibold mb-4">
                  Collaborative Culture
                </h3>
                <p className="text-base">
                  Thrive in a collaborative environment where creativity and
                  diverse ideas come together to shape the future.
                </p>
                <div className="absolute inset-0 bg-noise opacity-20"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
