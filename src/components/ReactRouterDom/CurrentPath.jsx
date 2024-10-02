import React from "react";
import { useLocation } from "react-router-dom";

const CurrentPath = () => {
  const location = useLocation(); // Get the current location object
  const fullUrl = `${window.location.origin}${location.pathname}`; // Construct the full URL

  return (
      <p className="bg-[#EDF2FA] text-[#444746] max-w-[450px] p-3 rounded-full text-[13px] flex gap-2 items-center"> 
        <img className="h-4 w-4 mb-[2px]" src="secureIcon.webp" />
        {fullUrl}
      </p> 
  );
};

export default CurrentPath;