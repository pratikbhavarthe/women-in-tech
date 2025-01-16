// components/Footer.tsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing social media icons
import { ArrowRight } from "lucide-react"; // Importing ArrowRight icon from lucide-react
import { cn } from "@/lib/utils"; // Utility to manage classNames

// Interactive Hover Button component
const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full bg-purple-600 text-white py-2 px-6 text-center font-semibold hover:bg-purple-700 transition duration-300 max-w-max", // Limit the max width of the button
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="text-sm mb-4">
              <p>Contact Information</p>
              <p className="mt-2">Email: <a href="mailto:contact@womenintech.com" className="text-purple-400">contact@womenintech.com</a></p>
              <p>Phone: <a href="tel:+15551234567" className="text-purple-400">+1 (555) 123-4567</a></p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-purple-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-purple-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-purple-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-purple-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Drop Us a Message</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <textarea
                placeholder="Your message"
                className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                rows={4}
              />
              {/* Adjusted Button Size and Width */}
              <InteractiveHoverButton className="py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300 max-w-max">
                Send
              </InteractiveHoverButton>
            </form>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm">© 2025 Women in Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
