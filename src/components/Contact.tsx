import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-lighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="" className="border-b">
          {CONTACT.email}
        </a>
        <div className="m-8 flex items-center justify-center gap-4 text-xl">
          <a href="https://www.linkedin.com/in/karthiknarayanan26"><FaLinkedin /></a>
          <a href="https://github.com/karthik261201"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
