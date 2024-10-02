import React from "react";

const HelpSection = () => {
  return (
    <div className="relative w-full h-full p-[5%] bg-white flex justify-center items-center">
      <div className="w-[80%] h-[80%] bg-white shadow-lg rounded-lg p-[5%] flex flex-col">
        {/* Header */}
        <h2 className="text-[8%] font-bold text-center mb-[4%] text-gray-800">
          How Can We Help You?
        </h2>

        {/* Help Options */}
        <div className="flex flex-col items-center text-center mb-[4%]">
          <p className="text-[4%] mb-[2%] text-gray-600">
            We're here to assist with any questions or concerns.
          </p>
          <p className="text-[4%] mb-[2%] text-gray-600">
            Choose an option below to get started.
          </p>
        </div>

        {/* New Help Options */}
        <div className="w-full flex flex-col space-y-[4%] items-center">
          <div className="w-[70%] h-[18%] bg-blue-100 rounded-lg flex items-center p-[3%]">
            <div className="w-[30%] h-full bg-blue-200 rounded-full flex justify-center items-center">
              <span className="text-[6%] font-bold text-blue-700">☎️</span>
            </div>
            <div className="ml-[4%]">
              <h3 className="text-[5px] font-semibold text-gray-700">Contact Us</h3>
              <p className="text-[3px] text-gray-600">
                Reach out to our team for direct support.
              </p>
            </div>
          </div>

          <div className="w-[70%] h-[18%] bg-green-100 rounded-lg flex items-center p-[3%]">
            <div className="w-[30%] h-full bg-green-200 rounded-full flex justify-center items-center">
              <span className="text-[6%] font-bold text-green-700">💬</span>
            </div>
            <div className="ml-[4%]">
              <h3 className="text-[5px] font-semibold text-gray-700">Live Chat</h3>
              <p className="text-[3px] text-gray-600">
                Chat live with a support representative.
              </p>
            </div>
          </div>

          <div className="w-[70%] h-[18%] bg-yellow-100 rounded-lg flex items-center p-[3%]">
            <div className="w-[30%] h-full bg-yellow-200 rounded-full flex justify-center items-center">
              <span className="text-[6%] font-bold text-yellow-700">📚</span>
            </div>
            <div className="ml-[4%]">
              <h3 className="text-[5px] font-semibold text-gray-700">Help Articles</h3>
              <p className="text-[3px] text-gray-600">
                Browse our library of support articles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
