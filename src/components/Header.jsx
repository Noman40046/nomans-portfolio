/* import { NavLink, Link } from "react-router-dom";
import { FaHome, FaRoad, FaServicestack, FaProjectDiagram, FaEnvelope, FaUser, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';


const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="navbar justify-center  shadow-slate-400  items-center flex flex-col h-screen">

        <div className="img  pb-5">
        <img className=" w-52" src="../../nomandipto.png" alt="" />
        </div>

        <div className="flex-none w-full ">
          <Link className="text-2xl font-bold text-white ps-2 " to="">NOMAN DIPTO</Link>
        </div>

        <div className="flex-none w-full pb-5">
          <ul className="menu menu-vertical font-semibold">
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F] w-full" : "text-gray-300 w-full"}`} to="">
                <FaHome className={({ isActive }) => `${isActive ? "text-[#FF014F]" : "text-white"} text-xl mr-2 pr-1`} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F] w-full" : "text-gray-300 w-full"}`} to="/about">
                <FaUser className={({ isActive }) => `${isActive ? "text-[#FF014F]" : "text-white"} text-xl mr-2 pr-1`} /> About
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F] w-full" : "text-gray-300 w-full"}`} to="/journey">
                <FaRoad className={({ isActive }) => `${isActive ? "text-[#FF014F]" : "text-white"} text-xl mr-2 pr-1`} /> Journey
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F] w-full" : "text-gray-300 w-full"}`} to="/services">
                <FaServicestack className={({ isActive }) => `${isActive ? "text-[#FF014F]" : "text-white"} text-xl mr-2 pr-1`} /> Services
              </NavLink>
            </li>   
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F] w-full" : "text-gray-300 w-full"}`} to="/projects">
                <FaProjectDiagram className={({ isActive }) => `${isActive ? "text-[#FF014F]" : "text-white"} text-xl mr-2 pr-1`} /> Projects
              </NavLink>
            </li>        
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F] w-full" : "text-gray-300 w-full"}`} to="/contact">
                <FaEnvelope className={({ isActive }) => `${isActive ? "text-[#FF014F]" : "text-white"} text-xl mr-2 pr-1`} /> Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="line flex flex-col items-start  w-full border-t-[1px] border-neutral-700 pt-4">
          <div>
            <h2 className="text-xl font-bold text-gray-300">Find Me Here</h2>
          </div>
          <div className="flex pt-2">
            <div className="flex gap-3 ">
              <a href="https://www.facebook.com/dipto.dipto.589583" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white rounded-full text-4xl bg-[#302126] p-2" />
              </a>
              <a href="https://www.linkedin.com/in/noman-dipto-a8b7b3263/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white rounded-full text-4xl bg-[#302126] p-2" />
              </a>
              <a href="https://twitter.com/noman40046" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white rounded-full text-4xl bg-[#302126] p-2" />
              </a>
              <a href="https://github.com/Noman40046" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white rounded-full text-4xl bg-[#302126] p-2" />
              </a>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
 

 */


import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaRoad, FaServicestack, FaProjectDiagram, FaEnvelope, FaUser, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      {/* Hamburger Button */}
      <button 
        className="absolute top-5 left-5 text-white bg-[#FF014F] p-1 rounded-md text-3xl md:hidden z-50" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div 
        className={`navbar shadow-slate-400 flex flex-col h-screen fixed top-0 left-0 lg:bg-none main-header    text-white p-5 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:w-80 w-80 `}>
        
        <div className="img pb-5 text-center">
          <img className="w-52" src="../../nomandipto.png" alt="Noman Dipto" />
        </div>

        <div className="flex  w-full text-center">
          <Link className="text-2xl font-bold text-white" to="">NOMAN DIPTO</Link>
        </div>

        <div className="flex  w-full pb-5">
          <ul className="menu menu-vertical font-semibold">
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F]" : "text-gray-300"} w-full flex items-center p-2`} to="">
                <FaHome className="text-xl mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F]" : "text-gray-300"} w-full flex items-center p-2`} to="/about">
                <FaUser className="text-xl mr-2" /> About
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F]" : "text-gray-300"} w-full flex items-center p-2`} to="/journey">
                <FaRoad className="text-xl mr-2" /> Journey
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F]" : "text-gray-300"} w-full flex items-center p-2`} to="/services">
                <FaServicestack className="text-xl mr-2" /> Services
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F]" : "text-gray-300"} w-full flex items-center p-2`} to="/projects">
                <FaProjectDiagram className="text-xl mr-2" /> Projects
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "bg-[#2D121A] text-[#FF014F]" : "text-gray-300"} w-full flex items-center p-2`} to="/contact">
                <FaEnvelope className="text-xl mr-2" /> Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="line flex flex-col items-start w-full border-t-[1px] border-neutral-700 pt-4">
          <h2 className="text-xl font-bold text-gray-300">Find Me Here</h2>
          <div className="flex pt-2 gap-3">
            <a href="https://www.facebook.com/dipto.dipto.589583" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white rounded-full text-3xl bg-[#302126] p-2" />
            </a>
            <a href="https://www.linkedin.com/in/noman-dipto-a8b7b3263/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white rounded-full text-3xl bg-[#302126] p-2" />
            </a>
            <a href="https://twitter.com/noman40046" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white rounded-full text-3xl bg-[#302126] p-2" />
            </a>
            <a href="https://github.com/Noman40046" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white rounded-full text-3xl bg-[#302126] p-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
