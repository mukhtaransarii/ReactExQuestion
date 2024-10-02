import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full h-full p-[5%] bg-white flex justify-center items-center">
      <div className="w-[80%] h-[80%] bg-white shadow-lg rounded-lg p-[5%] flex flex-col">
        <h2 className="text-[6%] font-bold text-center mb-[4%]">About Sydney Sweeney</h2>
        <div className="flex flex-col items-center text-center mb-[4%] text-[3.5%] text-gray-600">
          <p>
            Sydney Sweeney is a talented actress and Instagram model, known for her roles in hit TV shows and movies. 
          </p>
          <p className="mt-[3%]">
            With millions of followers on Instagram, she continues to inspire and connect with fans worldwide.
          </p>
        </div>
        <div className="w-full flex flex-col gap-2 space-y-[3%] items-center text-[3.5%]">
          <div className="w-[70%] h-[15%]">
            <h3 className="text-[6px] font-semibold">Career Highlights</h3>
            <p className="text-[5px]">Starred in Euphoria and The White Lotus*.</p>
          </div>
          <div className="w-[70%] h-[15%]">
            <h3 className="text-[6px] font-semibold">Social Media</h3>
            <p className="text-[5px]">Follow her on Instagram: @sydney_sweeney</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
