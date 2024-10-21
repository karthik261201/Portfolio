import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="mx-2 w-10 text-white text-2xl font-bold">KN</span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/karthiknarayanan26"><FaLinkedin /></a>
        <a href="https://github.com/karthik261201"><FaGithub /></a>
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar;
