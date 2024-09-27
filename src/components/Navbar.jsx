import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (<nav className="  flex items-center justify-between py-6">
    <div className="text-5xl text-gray-200 font-semibold pl-6 pr-12">HK</div>
    <div className="flex justify-around items-center gap-4 text-3xl text-gray-200 pr-4">
      <a href="https://www.linkedin.com/in/katuri-hemanth-018a1028a" target="_blank"><FaLinkedin />
      </a>
      <a href="https://github.com/HemanthKaturi19" target="_blank"><FaGithub />
      </a>
      <a href="https://www.instagram.com/hemanth_katuri_19/" target="_blank"><FaInstagram />
      </a>
      <a href="https://x.com/KaturiHemanth1" target="_blank"><FaSquareXTwitter />
      </a>
    </div>
  </nav>)
}

export default Navbar
