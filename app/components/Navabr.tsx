import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-purple-600 text-white">
            <div className="text-xl font-bold">Women in Tech Community</div>

            {/* Right side */}
            <div>{/* Placeholder for navigation links */}</div>
        </nav>
    );
};

export default Navbar;
