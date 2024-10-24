import React from "react";

function Navbar() {
  
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="mx-2 w-10 text-white text-2xl font-bold">KN</span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-xl">
        <a className="font-bold trackinglight" href="#work">Work</a>
        <a className="font-bold trackinglight" href="#projects">Projects</a>
        <a className="font-bold trackinglight" href="https://drive.google.com/file/d/1KGKIUvIQdoNP3DI6iXidxDoB-k3bxJAT/view?usp=sharing">Resume</a>
        <a className="font-bold trackinglight" href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
