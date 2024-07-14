"use client"
import { useState, useEffect } from "react";
import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";

import LatestProject from "../Components/LatestProject";
import Experience from "@/Components/Experince";
import Approach from "@/Components/Achivement";
import Footer from "../Components/Contact";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/Components/Preloader";
import Scrollup from "@/Components/Scrollup";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
      <div className="max-w-7xl w-full">
        
        
        <Hero />
        <Grid/>
        <LatestProject/>
        <Experience/>
        <Approach/>
        <Footer/>
        <Scrollup/>
        
      </div>
    </main>
  );
}
