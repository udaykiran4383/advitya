"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import dynamic from "next/dynamic";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa"; // Updated social media icons

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-10">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full opacity-50"
          aria-hidden="true"
        />
      </div>

      {/* Footer Content */}
      <div className="flex flex-col items-center relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-auto max-w-xl">
          {" "}
          {/* Reduced max-width */}
          <img
            src="/logo_white.svg" // Replace with the actual image path
            alt="Abhyuday IIT Bombay"
            className="w-full h-auto object-cover max-w-full" // Adjust the width and add max-width to control size
          />
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-300 text-center max-w-2xl">
          Inspiring Individuals, Transforming Communities.
        </p>
        <div className="mt-10">
          <a href="https://www.abhyuday-iitb.org" className="inline-block">
            <MagicButton
              title="Visit Website" // Updated button text
              icon={<FaLocationArrow className="ml-2" />}
              position="right"
            />
          </a>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Abhyuday, IIT Bombay. All rights
            reserved.
          </p>

          {/* Manually added social media links */}
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <a
              href="https://www.instagram.com/iitbombay_abhyuday/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/Abhyuday_IITB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/abhyuday-iit-bombay/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@abhyudayiitbombay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
