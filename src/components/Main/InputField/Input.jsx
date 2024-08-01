import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import { RiGalleryFill } from "react-icons/ri";
import { IoMdMic } from "react-icons/io";
import { VscSend } from "react-icons/vsc";
const Input = () => {
  const { inputs, setInputs, onSent, isDarkMode } = useContext(Context);
  return (
    <div className="mt-auto w-full">
      <div
        className={`flex items-center justify-between rounded-full mx-2 px-6 py-2 ${
          isDarkMode ? "bg-zinc-800 text-white" : "bg-background text-black"
        }`}
      >
        <input
          type="text"
          onChange={(e) => setInputs(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputs) {
              onSent();
            }
          }}
          value={inputs}
          placeholder="Enter Prompt here"
          className="bg-transparent outline-none focus:outline-none w-full"
        />
        <div className="flex items-center text-xl">
          <div
            className={`${
              isDarkMode ? "hover:bg-darkHoverBg" : "hover:bg-buttonBg"
            } p-4 rounded-full cursor-pointer`}
          >
            <RiGalleryFill />
          </div>
          <div
            className={`${
              isDarkMode ? "hover:bg-darkHoverBg" : "hover:bg-buttonBg"
            } p-4 rounded-full cursor-pointer`}
          >
            <IoMdMic />
          </div>
          {inputs ? (
            <div
              className={`${
                isDarkMode ? "hover:bg-darkHoverBg" : "hover:bg-buttonBg"
              } p-4 rounded-full cursor-pointer`}
            >
              <VscSend onClick={() => onSent()} />
            </div>
          ) : null}
        </div>
      </div>
      <div className="text-center my-3 px-2">
        <p className="text-xs">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default Input;
