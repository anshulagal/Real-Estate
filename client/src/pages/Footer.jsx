import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-90 h-40 mx-auto mt-10 mt-80 tracking-wider flex flex-wrap items-center justify-evenly relative bottom-0 text-center">
      <h4 className="m-0 mx-25 font-semibold">Developed by Anshul Agal</h4>
      <h4 className="m-0 mx-25 font-semibold">Copyright &copy; 2023 SD</h4>
      <div className="flex w-180 text-18 justify-evenly ">
        <a href="https://github.com/anshulagal" target="_blank" className="no-underline text-current p-1"><FaGithub /></a>
        <a href="www.linkedin.com/in/anshul-agal-789712236" target="_blank" className="no-underline text-current p-1"><FaLinkedin /></a>
        <a href="mailto:anshulagal21@gmail.com" target="_blank" className="no-underline text-current p-1"><GrMail /></a>
      
      </div>
    </footer>
  );
}

export default Footer;
