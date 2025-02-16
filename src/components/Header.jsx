import { NavLink, Link } from "react-router-dom";
// Import icons from a library like react-icons
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
            {/* Add more social icons here */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
