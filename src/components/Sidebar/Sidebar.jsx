import React, { useContext, useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { IoChatboxOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { LuHistory, LuSettings } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Context } from "../../context/Context";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar = () => {
  const {
    onSent,
    prevPrompts,
    setRecentPrompt,
    newChat,
    toggleSidebar,
    isOpenSidebar,
    isDarkMode,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timer;
    if (isOpenSidebar) {
      timer = setTimeout(() => {
        setShowText(true);
      }, 150);
    } else {
      setShowText(false);
    }
    return () => clearTimeout(timer);
  }, [isOpenSidebar]);
  return (
    <div
      className={`sidebar z-10 min-h-screen flex-col justify-between py-3 px-3 transition-all duration-1000 hidden lg:inline-flex 
    ${isOpenSidebar ? "open" : ""} ${
        isDarkMode ? "bg-darkBackground text-white" : "bg-background text-black"
      }`}
    >
      <div>
        <div className="flex items-center gap-1">
          <div
            className={`${
              isDarkMode ? "hover:bg-darkHoverBg " : "hover:bg-hoverBg"
            } w-fit p-3 cursor-pointer rounded-full transition-all`}
            onClick={() => {
              toggleSidebar();
            }}
          >
            <IoMdMenu className="text-2xl " />
          </div>
          <div className="flex items-center gap-1 text-xl lg:hidden">
            <p>Gemini</p>
            <IoMdArrowDropdown />
          </div>
        </div>
        <div
          onClick={() => newChat()}
          className={`${
            isDarkMode ? "bg-darkHoverBg text-darkTextColor" : "bg-buttonBg "
          } ${
            isOpenSidebar ? "py-2 px-3" : null
          } fading mt-11 flex w-fit items-center gap-4 cursor-pointer p-3 rounded-full`}
        >
          <FiPlus className="text-lg  text-grayColor" />
          {isOpenSidebar && showText && (
            <p className="mr-1 text-grayColor">New chat</p>
          )}
        </div>
        {isOpenSidebar ? (
          <div className="flex flex-col p-3 ">
            <p className="my-2">Recent</p>
            {prevPrompts.map((item) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="fading flex items-center justify-between gap-2 py-2 px-4 rounded-full hover:bg-btn-background cursor-pointer transition-all"
                >
                  <div className="flex items-center">
                    <IoChatboxOutline className="mr-3" />
                    <p>{item.slice(0, 18)}...</p>
                  </div>
                  <BsThreeDotsVertical className="" />
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="px-1 flex flex-col mb-6">
        <div
          className={`${
            isDarkMode ? "hover:bg-darkHoverBg" : "hover:bg-buttonBg"
          } flex items-center gap-4 pl-3 py-3 rounded-full cursor-pointer transition-all`}
        >
          <BsQuestionCircle className="text-lg" />
          {isOpenSidebar ? <p>Help</p> : null}
        </div>
        <div
          className={`${
            isDarkMode ? "hover:bg-darkHoverBg" : "hover:bg-buttonBg"
          } flex items-center gap-4 pl-3 py-3 rounded-full cursor-pointer transition-all`}
        >
          <LuHistory className="text-lg" />
          {isOpenSidebar ? <p>History</p> : null}
        </div>
        <div
          className={`${
            isDarkMode ? "hover:bg-darkHoverBg" : "hover:bg-buttonBg"
          } flex items-center gap-4 pl-3 py-3 rounded-full cursor-pointer transition-all`}
        >
          <LuSettings className="text-lg" />
          {isOpenSidebar ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
