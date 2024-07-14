import Image from "next/image";
import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import { FloatingNav } from "../Components/ui/FloatingNav";
import { navItems } from "@/data";
import LatestProject from "../Components/LatestProject";
import Experience from "@/Components/Experince";
import Approach from "@/Components/Achivement";
import Footer from "../Components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        
        <Hero />
        <Grid/>
        <LatestProject/>
        <Experience/>
        <Approach/>
        <Footer/>
        
      </div>
    </main>
  );
}
