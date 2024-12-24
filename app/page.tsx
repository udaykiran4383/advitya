"use client";


import { navItems } from "@/data";

import Hero from "@/components/Hero";

import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Gallery from "@/components/gallery";




const Home = () => {
  return (
    <div className="relative bg-black-100 min-h-screen w-full overflow-hidden">
      
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto sm:px-10 px-5 w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          
          <RecentProjects />
          <Clients />
          <Gallery />
          <Experience />
          <Approach />
          
         
        
        </div>
      </main>

      
  
    </div>
  );
};

export default Home;
