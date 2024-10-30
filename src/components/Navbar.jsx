import React, { useState } from 'react';
import logo from "/assets/logo.svg";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close
  const navigation = [
    { name: 'ABOUT', href: '#' },
    { name: 'SERVICES', href: '#' },
    { name: 'WORK', href: '#' },
    { name: 'BLOGS', href: '#' },
    { name: 'CONTACT', href: '#' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen); // Function to toggle the menu

  return (
    <nav className="py-6 px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-800 hover:text-gray-600 tracking-wider"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FaBars className="text-gray-800 w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg">
            {/* <div className="flex justify-between items-center px-4 py-2">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={toggleMenu} className="focus:outline-none">
                <FaTimes className="text-gray-800 w-6 h-6" />
              </button>
            </div> */}
            <div className="flex flex-col items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-gray-800 hover:text-gray-600 tracking-wider py-2"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
