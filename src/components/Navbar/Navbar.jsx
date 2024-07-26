import React from "react";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  }
]


const Navbar = ({handlePopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 sticky z-40 top-0">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex items-center justify-between">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>

          {/* search bar and order button */}
          <div className="flex justify-between items-center gap-4 dark:text-white  ">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[150px] group-hover:w-[200px] md:w-[200px] md:group-hover:w-[300px]  transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary text-gray-900 dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute right-3 bottom-[8px]" />
            </div>

            {/* order button*/}
            <button
              onClick={() => handlePopup() }
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group transition-all duration-[5000ms]"
            >
              <span className="group-hover:block hidden ">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor pointer" />
            </button>

            {/* Theme Toggler  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center px-2 ">
        <ul className="sm:flex hidden item items-center gap-5">
          {Menu.map((data) => {
            return (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="px-2 hover:text-primary duration-200 inline-block md:px-4"
                >
                  {data.name}
                </a>
              </li>
            );
          })}
          <li className="group relative cursor-pointer ">
            <a href="" className="flex items-center gap-[2px] py-2 hover:text-primary duration-200">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-[200] group-hover:rotate-180 " />
              </span>
            </a>
            <div className="absolute -right-5 z-[999] hidden group-hover:block duration-200 w-[120px] border shadow-md rounded-md bg-white text-black text-center p-0.5">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className="inline-block hover:bg-primary/20 w-full rounded-md p-2">{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
