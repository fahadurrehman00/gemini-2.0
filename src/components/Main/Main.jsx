import React, { useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { assets } from "../../assets/assets";
import Card from "../comman/Card";
import { FcIdea } from "react-icons/fc";
import { RiPencilFill } from "react-icons/ri";
import { IoCompassOutline } from "react-icons/io5";
import { FaBroadcastTower } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { IoMdMic } from "react-icons/io";
import { VscSend } from "react-icons/vsc";
import { Context } from "../../context/Context";
import { IoMdMenu } from "react-icons/io";

const Main = () => {
  const cardData = [
    {
      content: "Evaluate and rank common camera categories",
      Icon: FcIdea,
    },
    {
      content: "Come up with a product name for a new app",
      Icon: RiPencilFill,
    },
    {
      content: "Walk me through how to apply for a new role",
      Icon: IoCompassOutline,
    },
    {
      content: "Help me craft an OOO message based on a few details",
      Icon: FaBroadcastTower,
    },
  ];
  const {
    inputs,
    setInputs,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
    toggleSidebar,
  } = useContext(Context);

  return (
    <div className="absolute lg:relative flex flex-col justify-between min-h-screen w-full">
      {/* Top Bar */}
      <div className="flex justify-between w-11/12 mx-auto py-4">
        <div className="flex items-center text-xl gap-1 cursor-pointer">
          <div
            className="hover:bg-btn-background w-fit p-3 ml-px cursor-pointer rounded-full transition-all lg:hidden"
            onClick={() => {
              toggleSidebar();
            }}
          >
            <IoMdMenu className="text-2xl " />
          </div>
          <p>Gemini</p>
          <IoMdArrowDropdown />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 p-2 bg-background rounded-lg cursor-pointer hover:bg-btn-background">
            <img src={assets.logo} alt="" className="w-5" />
            <p className="hidden md:block">Try Gemini Advance</p>
          </div>
          <div>
            <CgMenuGridO className="text-2xl cursor-pointer" />
          </div>
          <div>
            <img
              className="rounded-full cursor-pointer w-8 h-8"
              src={assets.user}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto w-full flex flex-col justify-between flex-grow">
        {!showResult ? (
          <>
            <div className="fading text-4xl sm:text-5xl md:text-6xl text-light-gray font-medium py-8 mb-14 pl-4">
              <p>
                <span className="gradient-text">Hello, Fahad Ur</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="card-container flex space-x-3 overflow-x-auto pb-4">
              {cardData.map((data, index) => (
                <Card key={index} paragraph={data.content} Icon={data.Icon} />
              ))}
            </div>
          </>
        ) : (
          <div className="result px-3 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center gap-5 mb-12">
              <img src={assets.user} alt="" className="rounded-full" />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5">
              <img
                src={assets.logo}
                alt=""
                className={`w-6 mt-1 ${loading ? "rotate" : ""}`}
              />
              {loading ? (
                <div className="loader w-full flex flex-col gap-2 ">
                  <hr className="rounded-md border-none bg-[#f6f7f8] h-5" />
                  <hr className="rounded-md border-none bg-[#f6f7f8] h-5" />
                  <hr className="rounded-md border-none bg-[#f6f7f8] h-5 w-1/2" />
                </div>
              ) : (
                <p
                  className="text-base font-normal leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        {/* Input Field */}
        <div className="mt-auto w-full">
          <div className="flex items-center justify-between p-5 bg-background rounded-full mx-2">
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
            <div className="flex items-center text-xl gap-6">
              <RiGalleryFill className=" cursor-pointer" />
              <IoMdMic className="cursor-pointer" />
              {inputs ? (
                <VscSend onClick={() => onSent()} className="cursor-pointer" />
              ) : null}
            </div>
          </div>
          <div className="text-center my-2 px-2">
            <p className="text-sm">
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
