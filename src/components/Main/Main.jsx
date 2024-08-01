import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets";
import Card from "../comman/Card";
import { FcIdea } from "react-icons/fc";
import { RiPencilFill } from "react-icons/ri";
import { IoCompassOutline } from "react-icons/io5";
import { FaBroadcastTower } from "react-icons/fa";
import Header from "./Header/Header";
import Input from "./InputField/Input";

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
  const { recentPrompt, showResult, loading, resultData, isDarkMode } =
    useContext(Context);

  return (
    <div
      className={`absolute lg:relative flex flex-col justify-between min-h-screen w-full ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Top Bar */}
      <Header />
      {/* Main Content */}
      <div className="max-w-4xl mx-auto w-full flex flex-col justify-between flex-grow">
        {!showResult ? (
          <>
            <div
              className={`${
                isDarkMode ? "text-darkGray" : "text-lightGray"
              } fading text-4xl sm:text-5xl md:text-6xl font-medium py-8 mb-14 pl-4`}
            >
              <p>
                <span className="gradient-text">Hello, Fahad Ur Rehman</span>
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
        <Input />
      </div>
    </div>
  );
};

export default Main;
