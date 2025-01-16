"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Hamburger icon
import { IoClose } from "react-icons/io5"; // Close icon
import { motion } from "framer-motion"; // Motion for animations

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track menu state
  const [mounted, setMounted] = useState(false); // For SSR

  const navLinks = [
    { label: "Careers", href: "/careers" },
    { label: "Upskilling", href: "#upskilling" },
    { label: "Consultancy", href: "#consultancy" },
    { label: "Forum", href: "#forum" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-purple-600 text-white">
      <div className="text-xl font-bold">Women in Tech Community</div>

      {/* Hamburger icon for mobile view */}
      <div className="sm:hidden">
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="focus:outline-none"
        >
          {menuOpen ? (
            <IoClose size={28} className="text-white" />
          ) : (
            <HiOutlineMenuAlt3 size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Menu drawer for mobile */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="absolute top-16 right-4 bg-white rounded-xl shadow-lg w-60 p-4 z-50"
        >
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-gray-700 font-semibold hover:text-purple-600 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Desktop menu */}
      <div className="hidden sm:block">
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white hover:text-[#3c096c] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
