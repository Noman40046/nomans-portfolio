import { NavLink, Link } from "react-router-dom";
// Import icons from a library like react-icons
import { FaHome, FaInfoCircle, FaRoad, FaServicestack, FaProjectDiagram, FaEnvelope, FaUser } from 'react-icons/fa';


const Header = () => {
  return (
    <div className="flex items-center justify-start">
      <div className="navbar justify-center w-[225px] shadow-slate-400 rounded-e-[80px] items-center flex flex-col h-[550px]">

        <div className="img  pb-5">
        <img className="rounded-full w-32" src="../../noman.jpg" alt="" />
        </div>

        <div className="">
          <Link className="text-2xl font-bold text-white " to="">NOMAN DIPTO</Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-vertical font-semibold">
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "text-green-400" : "text-gray-300"}`} to="">
                <FaHome className="text-white text-xl mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "text-green-400" : "text-gray-300"}`} to="/about">
                <FaUser className="text-white text-xl mr-2" /> About
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "text-green-400" : "text-gray-300"}`} to="/journey">
                <FaRoad className="text-white text-xl mr-2" /> Journey
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "text-green-400" : "text-gray-300"}`} to="/services">
                <FaServicestack className="text-white text-xl mr-2" /> Services
              </NavLink>
            </li>   
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "text-green-400" : "text-gray-300"}`} to="/projects">
                <FaProjectDiagram className="text-white text-xl mr-2" /> Projects
              </NavLink>
            </li>        
            <li>
              <NavLink className={({ isActive }) => `${isActive ? "text-green-400" : "text-gray-300"}`} to="/contact">
                <FaEnvelope className="text-white text-xl mr-2" /> Contact
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Header;
