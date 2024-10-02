import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-full p-[5%] bg-white">
      <div className="h-full flex flex-col items-center bg-white shadow-lg rounded-lg p-[5%]">
        <div className="h-[30%] rounded-full overflow-hidden bg-amber-100">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4AQw9gEkqvo2ZRzi9QDsyul5dQkijMJRkw&usqp=CAU"
            alt="Sydney Sweeney"
          />
        </div>
        <h2 className="text-[12px] font-bold mt-[4%]">Sydney Sweeney</h2>
        <h4 className="text-[8px] text-zinc-500">@Sydney_Sweeney</h4>
        <p className="text-[8px] text-zinc-500 leading-none">Spokane, Washington, USA</p>
        <p className="text-[7px] text-zinc-600 mt-[2%] text-center">
          Sydney Sweeney is an actress and model known for her roles in Euphoria and The White Lotus.
        </p>
        <div className="flex space-x-[2%] mt-[4%] w-full justify-center">
          <button className="bg-blue-400 px-[3%] py-[1%] text-[6px] rounded-[2px]">View Profile</button>
          <button className="bg-red-400 px-[3%] py-[1%] text-[6px] rounded-[2px]">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
