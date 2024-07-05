import React from 'react';
import logo from "../assets/logo-1 (2).png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/aditya-pratap-singh-941b35203/"><FaLinkedin /></a>
        <a href="https://github.com/Adi30TyaDTU"><FaGithub /></a>
        <a href="https://www.instagram.com/aditya_30_aps/?igsh=MTM3dHdoOHg1bjA0aw%3D%3D"><FaInstagram /></a>
        <a href="https://twitter.com/"><FaTwitterSquare /></a>
      </div>
    </nav>
  );
}

export default Navbar;
