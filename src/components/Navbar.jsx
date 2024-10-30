import React from 'react';
import logo from "/assets/logo.svg";

const Navbar = () => {
  const navigation = [
    { name: 'ABOUT', href: '#' },
    { name: 'SERVICES', href: '#' },
    { name: 'WORK', href: '#' },
    { name: 'BLOGS', href: '#' },
    { name: 'CONTACT', href: '#' },
  ];

  return (
    <nav className=" py-6 px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </a>
        </div>

        <div className="flex items-center space-x-12">
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
      </div>
    </nav>
  );
};

export default Navbar;
