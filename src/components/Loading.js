import React from "react";
const Loading = () => {
  const style = {
    background: `radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%)`,
  };

  return (
    <div className="relative flex justify-center items-center h-screen w-full">
      <div style={style} className=" h-full w-full absolute top-0"></div>
      <img src="/assets/loading.gif" alt="" />
    </div>
  );
};

export default Loading;
