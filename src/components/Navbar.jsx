import React, { useState } from "react";
//hamgburger to x menu logic
import hamburger from "../images/hamburger.png";
import x from "../images/x.png";
//logo
import logo from "../images/logo.png";
//link icons
import home from "../images/home.png";
import projects from "../images/projects.png";
import services from "../images/services.png";
import about from "../images/about.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Projects", "Services", "About Me"];
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav
        style={{ background: "#faeee7" }}
        className="flex h-[60px] w-full items-center justify-between text-neutral-900 "
      >
        <img src={logo} className="w-16"></img>
        <ul className="mr-8 flex hidden w-full items-center justify-end gap-8 md:flex">
          {menuItems.map((item) => (
            <li>
              <a className="cursor-pointer text-xl opacity-100 hover:opacity-50">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="mr-8 flex cursor-pointer md:hidden" onClick={openMenu}>
          {isMenuOpen ? (
            <img src={x} className="w-8"></img>
          ) : (
            <img src={hamburger}></img>
          )}
        </div>
      </nav>
      {/* {isMenuOpen && (
        <ul className="bg-purple-600 py-8 text-center text-3xl text-white">
          <li className="mb-4 flex justify-center  opacity-100 hover:opacity-50">
            <img src={home} className="mr-2 w-8 " />
            <a className="cursor-pointer ">Home</a>
          </li>
          <li className="mb-4 flex justify-center opacity-100 hover:opacity-50">
            <img src={projects} className="mr-2 w-8" />
            <a className="cursor-pointer"> Projects</a>
          </li>
          <li className="mb-4 flex justify-center opacity-100 hover:opacity-50">
            <img src={services} className="mr-2 w-8" />
            <a className="cursor-pointer">Services</a>
          </li>
          <li className="mb-4 flex justify-center opacity-100 hover:opacity-50">
            <img src={about} className="mr-2 w-8" />
            <a className="cursor-pointer"> About Me</a>
          </li>
        </ul>
      )} */}
    </div>
  );
};

export default Navbar;
