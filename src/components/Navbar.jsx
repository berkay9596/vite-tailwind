import React, { useState } from "react";
//hamgburger to x menu logic
import hamburger from "../assets/images/hamburger.png";
import x from "../assets/images/x.png";
//logo
import logo from "../assets/images/logo.png";
//link icons
// import home from "../assets/images/home.png";
// import projects from "../assets/images/projects.png";
// import services from "../assets/images/services.png";
// import about from "../assets/images/about.png";
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

        <div className="mr-8 flex cursor-pointer md:hidden">
          {isMenuOpen ? (
            <img
              src={x}
              className="fixed right-12 top-8
               z-10 mt-3 mr-1 w-8 bg-white"
              onClick={openMenu}
            ></img>
          ) : (
            <>
              <img src={hamburger} onClick={openMenu} className="z-10"></img>{" "}
              <p></p>
            </>
          )}
        </div>
      </nav>
      {isMenuOpen && (
        <ul
          style={{ width: "-webkit-fill-available" }}
          className="fixed top-0 left-0 flex min-h-screen flex-col justify-center gap-y-16 bg-neutral-900  py-8 text-center text-3xl text-white"
        >
          <li className="mb-4 flex justify-center  opacity-100 hover:opacity-50 ">
            {/* <img src={home} className="mr-2 w-8 " /> */}
            <a className="cursor-pointer" href="#hero" onClick={()=>setIsMenuOpen(false)}>Home </a>
          </li>
          <li className="mb-4 flex justify-center opacity-100 hover:opacity-50">
            {/* <img src={projects} className="mr-2 w-8" /> */}
            <a href="#projects" className="cursor-pointer" onClick={()=>setIsMenuOpen(false)}> Projects</a>
          </li>
          <li className="mb-4 flex justify-center opacity-100 hover:opacity-50">
            {/* <img src={services} className="mr-2 w-8" /> */}
            <a className="cursor-pointer" onClick={()=>setIsMenuOpen(false)}>Services</a>
          </li>
          <li className="mb-4 flex justify-center opacity-100 hover:opacity-50">
            {/* <img src={about} className="mr-2 w-8" /> */}
            <a className="cursor-pointer" onClick={()=>setIsMenuOpen(false)}> About Me</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
