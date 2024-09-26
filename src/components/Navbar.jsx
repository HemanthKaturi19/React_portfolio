import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (<nav className="  flex items-center justify-between py-6">
    <div className="text-5xl text-gray-200 font-semibold pl-6 pr-12">HK</div>
    <div className="flex justify-around items-center gap-4 text-3xl text-gray-200 pr-4">
      <FaLinkedin />
      <FaGithub />
      <FaInstagram />
      <FaSquareXTwitter />
    </div>
  </nav>)
}

export default Navbar
