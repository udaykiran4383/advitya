"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import dynamic from "next/dynamic";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Example of social media icons

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Fullscreen Background for Scene */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene
         
        
         
         
          
          
        />
      </div>

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
        <h2 className="heading lg:max-w-[45vw] text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to take <span className="text-purple-500">your</span> digital
          presence to the next level?
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300 text-center max-w-2xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="mt-10">
          <a href="mailto:contact@jsmastery.pro" className="inline-block">
            <MagicButton
              title="Let's get in touch"
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
            &copy; {new Date().getFullYear()} Adrian Hajdin. All rights
            reserved.
          </p>

          {/* Manually added social media links */}
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
