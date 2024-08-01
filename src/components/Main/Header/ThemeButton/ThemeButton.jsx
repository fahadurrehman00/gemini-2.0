import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(Context);

  return (
    <button
      onClick={toggleDarkMode}
      className={`${isDarkMode ? "hover:bg-darkHoverBg" : "hover:bg-buttonBg"} p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center`}
    >
      {isDarkMode ? (
        <FiSun className="text-yellow" size={24} />
      ) : (
        <FiMoon className="text-blue" size={24} />
      )}
    </button>
  );
};

export default ThemeButton;
