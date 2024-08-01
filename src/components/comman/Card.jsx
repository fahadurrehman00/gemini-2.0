import React, { useContext } from "react";
import { Context } from "../../context/Context";

const card = ({ paragraph, Icon }) => {
  const { isDarkMode } = useContext(Context);
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-darkBackground text-white hover:bg-darkHoverBg"
          : "bg-background text-black hover:bg-hoverBg"
      } fading h-52 w-52 flex flex-col justify-between relative bg-background p-4 rounded-xl cursor-pointer `}
    >
      <div>
        <p>{paragraph}</p>
      </div>
      <div
        className={`${
          isDarkMode ? "bg-black" : "bg-white"
        } absolute bottom-4 right-4 text-xl p-2 rounded-full`}
      >
        <Icon className />
      </div>
    </div>
  );
};

export default card;
