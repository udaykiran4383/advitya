"use client";

import dynamic from "next/dynamic";
import ContactUs from "@/components/ContactUs";

// Dynamically import the Scene component to avoid SSR issues
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const ContactUsPage = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Scene as background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* ContactUs content */}
      <div className="relative z-10 bg-opacity-90 px-5 py-10 sm:px-10">
        <ContactUs />
      </div>
    </div>
  );
};

export default ContactUsPage;
