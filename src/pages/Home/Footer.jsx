import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const handleScrollWithOffset = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Scroll the element into view
      window.scrollTo({
        top: targetElement.offsetTop - 200, // Adjust this value for your desired offset (e.g., 100px)
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full flex flex-col items-center pt-16 font-inter  lg:mt-0">
      <div className="w-[90vw] border-[1.5px] lg:border-2 border-black mb-10" />
      <div className=" flex gap-10 w-full justify-around lg:flex-row flex-col">
        <div className=" flex flex-col px-10">
          <h1 className="font-semibold text-4xl mb-8 font-archivo">
            The Agenc-E
          </h1>
          <a
            href="tel:+917003439240"
            className="hover:underline transition-all duration-300 mb-1 font-medium"
          >
            +91 7003 439 240
          </a>
          <a
            href="tel:+917003439240"
            className="hover:underline transition-all duration-300 mb-1 font-medium"
          >
            +91 9051 584 158
          </a>
          <a
            href="mailto:contact.theagenc.e@gmail.com"
            className="underline font-medium"
          >
            info@theagence.in
          </a>
          <p className="mt-5 font-medium">
            81/13 Manmohan Bhawan 3rd Floor, <br />
            Regent Colony, Tollygunge, <br />
            Kolkata 700040
          </p>
        </div>
        <div className="hidden lg:flex flex-col px-10 lg:px-14 gap-[2px]">
          <h1 className="font-semibold text-xl mb-2 py-3">Services</h1>
          <a href="/">Social Media</a>
          <a href="/">Website Development</a>
          <a href="/">Brand Identity</a>
          <a href="/">Campaign</a>
          <a href="/">SEO Optimization</a>
        </div>
        <div className="hidden lg:flex flex-col px-14 gap-[2px]">
          <h1 className="font-semibold text-xl mb-2 py-3">Company</h1>
          <a
            href="#about"
            onClick={(e) => handleScrollWithOffset(e, "about")}
            className="text-lg font-medium text-gray-700  cursor-pointer mb-2"
          >
            About Us
          </a>
          <a className="text-lg font-medium text-gray-700  cursor-pointer">
            Contact Us
          </a>
        </div>
        <div className="hidden px-14 py-3 lg:flex gap-5 w-[250px] lg:justify-end">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={25} />
          </a>
          <a
            href="https://www.linkedin.com/company/the-agenc-e/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
        </div>

        {/* Mobile Section  */}
        <div className="flex lg:hidden">
          <div className="flex flex-col px-10 gap-[2px]">
            <h1 className="font-semibold text-xl mb-2 py-3">Services</h1>
            <a href="/">Social Media</a>
            <a href="/">Website Development</a>
            <a href="/">Brand Identity</a>
            <a href="/">Campaign</a>
            <a href="/">SEO Optimization</a>
          </div>
          <div className="flex flex-col px-10 gap-[2px]">
            <h1 className="font-semibold text-xl mb-2 py-3">Company</h1>
            <a
              href="#about"
              onClick={(e) => handleScrollWithOffset(e, "about")}
              className="text-lg font-medium text-gray-700  cursor-pointer mb-2"
            >
              About Us
            </a>
            <a className="text-lg font-medium text-gray-700  cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>
        <div className="px-10 py-3  flex lg:hidden gap-5 w-[250px] lg:justify-end">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={25} />
          </a>
          <a
            href="https://www.linkedin.com/company/the-agenc-e/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
        {/* Mobile Section  */}
      </div>
      <div className="mt-10 mb-3">
        &copy;{" "}
        <span className="font-medium text-lg">
          2024. The Agenc-E. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
