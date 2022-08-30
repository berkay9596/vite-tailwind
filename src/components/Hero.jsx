import React from "react";
import hero from "../assets/images/hero.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";

const Hero = () => {
  return (
    <div className="mt-0 flex flex-col-reverse items-center  justify-between md:mt-24 md:flex-row">
      <div>
        <h1
          style={{ color: "#33272a" }}
          className="text-center text-6xl font-semibold md:text-left"
        >
          Hi, my name is Berkay
        </h1>
        <p className="w-12/12 mt-8 text-3xl md:w-6/12">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet
        </p>
        <div className="mt-8 flex justify-center gap-12 md:justify-start ">
          <a href="https://www.instagram.com/berkayyuksel1/" target="_blank">
            {" "}
            <img
              src={instagram}
              className="cursor-pointer   hover:opacity-50"
            />{" "}
          </a>
          <a href="https://twitter.com/Berkaayyuksel" target="_blank">
            <img src={twitter} className="cursor-pointer  hover:opacity-50" />
          </a>
          <a href="https://github.com/berkay9596" target="_blank">
            <img src={github} className="cursor-pointer  hover:opacity-50" />
          </a>
          <a href="https://tr.linkedin.com/in/berkay9596" target="_blank">
            <img src={linkedin} className="cursor-pointer  hover:opacity-50" />
          </a>
        </div>
      </div>
      <div>
        <img className="mb-16 rounded-full md:mb-0" src={hero}></img>
      </div>
    </div>
  );
};

export default Hero;
