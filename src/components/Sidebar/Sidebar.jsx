import React, { useContext, useState } from "react";
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
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div
      className={`${
        isOpenSidebar ? "open" : ""
      } sidebar z-10 min-h-screen flex-col justify-between bg-background py-4 px-4 transition-all duration-1000 hidden lg:inline-flex`}
    >
      <div>
        <div className="flex items-center gap-1">
          <div
            className="hover:bg-btn-background w-fit p-3 ml-px cursor-pointer rounded-full transition-all"
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
          className="fading mt-11 flex w-fit items-center gap-3 cursor-pointer py-2 px-3 bg-btn-background rounded-full text-gray-400 scale-110 ml-3 font-medium"
        >
          <FiPlus className="text-lg" />
          {isOpenSidebar ? <p className="text-sm mr-1">New chat</p> : ""}
        </div>
        {isOpenSidebar ? (
          <div className="flex flex-col p-4 font-medium ">
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
      <div className="px-1 flex flex-col ">
        <div className="flex items-center gap-4 px-2 rounded-full hover:bg-btn-background cursor-pointer transition-all">
          <BsQuestionCircle className="my-2 text-lg" />
          {isOpenSidebar ? <p>Help</p> : null}
        </div>
        <div className="flex items-center gap-4 px-2  rounded-full hover:bg-btn-background cursor-pointer transition-all">
          <LuHistory className="my-2 text-lg" />
          {isOpenSidebar ? <p>History</p> : null}
        </div>
        <div className="flex items-center gap-4  px-2  rounded-full hover:bg-btn-background cursor-pointer transition-all">
          <LuSettings className="my-2 text-lg" />
          {isOpenSidebar ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
