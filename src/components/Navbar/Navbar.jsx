import React from "react";
import Logo from "../../assets/website/hero_main.jpg";
// import { AiOutlineRocket } from "react-icons/ai";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Services",
    link: "#services",
    target: "_self",
  },
  {
    id: 2,
    name: "About",
    link: "#about",
    target: "_self",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <Link
                to="/"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider"
              >
                XDS AI Studio
              </Link>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                      target={menu.target}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* <button className=" bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
                Get Started
                <AiOutlineRocket className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
