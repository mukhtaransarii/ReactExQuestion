import React from "react";

const Contact = () => {
  return (
    <div className="relative w-full h-full p-[5%] bg-white flex justify-center items-center">
      <div className="w-[80%] h-[80%] bg-white shadow-lg rounded-lg p-[5%] flex flex-col">
        {/* Header */}
        <h1 className="text-[8%] font-bold text-center mb-[4%] text-gray-800">
          Contact Sydney Sweeney
        </h1>

        {/* Contact Information */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[4%] mb-[2%] text-gray-600">
            Instagram Model and Actress
          </p>
          <p className="text-[4%] mb-[2%] text-gray-600">
            Instagram: @sydney_sweeney
          </p>
          <p className="text-[4%] mb-[2%] text-gray-600">Email: info@sydney.com</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-auto flex justify-center space-x-[5%]">
          <a
            href="https://www.instagram.com/sydney_sweeney"
            className="text-[6%] text-gray-800 hover:text-blue-500"
          >
            Instagram
          </a>
          <a
            href="mailto:info@sydney.com"
            className="text-[6%] text-gray-800 hover:text-blue-500"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
