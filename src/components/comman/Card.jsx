import React from "react";

const card = ({ paragraph, Icon }) => {
  return (
    <div className="fading h-52 w-52 flex flex-col justify-between relative bg-background p-4 rounded-xl cursor-pointer hover:bg-card-bg">
      <div>
        <p>{paragraph}</p>
      </div>
      <div className="absolute bottom-4 right-4 text-xl p-2 bg-white rounded-full">
        <Icon className />
      </div>
    </div>
  );
};

export default card;
