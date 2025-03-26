import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-black text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">FitLife</h1>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-green-400 transition duration-300">Home</a>
            <a href="#workouts" className="hover:text-green-400 transition duration-300">Workouts</a>
            <a href="#nutrition" className="hover:text-green-400 transition duration-300">Nutrition</a>
            <a href="#contact" className="hover:text-green-400 transition duration-300">Contact</a>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300">
              Get Started
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-2">
            <a href="#" className="block hover:text-green-400 transition duration-300 py-2">Home</a>
            <a href="#workouts" className="block hover:text-green-400 transition duration-300 py-2">Workouts</a>
            <a href="#nutrition" className="block hover:text-green-400 transition duration-300 py-2">Nutrition</a>
            <a href="#contact" className="block hover:text-green-400 transition duration-300 py-2">Contact</a>
            <button className="w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300 mt-2">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;