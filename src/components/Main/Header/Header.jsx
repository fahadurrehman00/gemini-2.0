import React, { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import { assets } from "../../../assets/assets";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import ThemeButton from "./ThemeButton/ThemeButton";
const Header = () => {
  const { toggleSidebar, isDarkMode } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen();
  };
  return (
    <div className="flex justify-between w-[97%] mx-auto py-3">
      <div className="flex items-center text-xl gap-1 cursor-pointer">
        <div
          className="hover:bg-btn-background w-fit p-3 ml-px cursor-pointer rounded-full transition-all lg:hidden"
          onClick={() => {
            toggleSidebar();
          }}
        >
          <IoMdMenu className="text-2xl " />
        </div>
        <p className={`${isDarkMode ? "text-lightGray" : "text-grayText"}`}>
          Gemini
        </p>
        <IoMdArrowDropdown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={handleToggle}
        />
        {isOpen && (
          <p className=" p-2 bg-gray-200 rounded-md">
            This Gemini Clone developed by Fahad ur Rehman
          </p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <ThemeButton />
        <div
          className={`${
            isDarkMode
              ? "bg-darkHoverBg text-white hover:bg-darkBackground"
              : "bg-hoverBg text-black hover:bg-buttonBg"
          } flex items-center gap-1 p-3 rounded-lg cursor-pointer`}
        >
          <img src={assets.logo} alt="" className="w-4" />
          <p className="hidden md:block text-xs font-medium">
            Try Gemini Advance
          </p>
        </div>
        <div
          className={`${
            isDarkMode ? "hover:bg-darkHoverBg" : "hover:bg-buttonBg"
          } p-3 rounded-full cursor-pointer`}
        >
          <CgMenuGridO className="text-2xl" />
        </div>

        <div>
          <img
            className="rounded-full cursor-pointer w-8 h-8 hover:scale-110 transition-all"
            src={assets.user}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
