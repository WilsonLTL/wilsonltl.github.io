// React 
import React from "react";
// Mui
import { Breadcrumbs, Link } from "@mui/material";
 // Compontent
 import About from "../components/homeCompontent/about"
 import Contact from "../components/homeCompontent/contact"
 import Work from "../components/homeCompontent/work"

const Home = () => {

  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-screen items-center justify-between">
        <p className="text-pink-400 text-base font-bold mt-8">An Engineer & A Photographer & An athlete</p>
        <img className="w-96 h-84 transform-gpu hover:scale-110 transition duration-150 hover:ease-inn" src="/assets/icon.png"/>
        <div className="mb-8">
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/#about" underline="hover" className="text-base text-pink-400">ABOUT</Link>
            <Link href="/#work" underline="hover" className="text-base text-pink-400">WORK</Link>
            <Link href="/#contact" underline="hover" className="text-base text-pink-400">CONTACT</Link>
          </Breadcrumbs>
        </div>
      </div>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
};

export default Home;
