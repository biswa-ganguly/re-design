import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "ABOUT", to: "about" },
    { name: "SERVICES", to: "services" },
    { name: "WORK", to: "work" },
    { name: "CONTACT", to: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 ${
        isScrolled ? "bg-white " : "bg-transparent"
      } z-[100] transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-12" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="font-semibold text-gray-800 hover:text-[#6735EA] tracking-wide cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="text-gray-800 w-6 h-6" />
            ) : (
              <FaBars className="text-gray-800 w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
          <div className="flex flex-col items-center space-y-6 py-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-800 hover:text-gray-600 tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
