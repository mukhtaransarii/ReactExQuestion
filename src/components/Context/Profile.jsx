import React, { useContext } from 'react';
import UserContext from './UserContext';


// Generate random numbers for posts, followers, and following
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function nameCapitalised(username){
  return username.charAt(0).toUpperCase() + username.slice(1)
}

// Predefined bios list to randomly pick from
const bios = [
  "Love to explore new things!",
  "Frontend Developer | Coffee Addict",
  "Traveler | Foodie | Dreamer",
  "Building web apps, one line of code at a time.",
  "Creating cool things on the internet."
];

function Profile() {
  const { user } = useContext(UserContext);
  // Pick a random bio
  const randomBio = bios[Math.floor(Math.random() * bios.length)];

  // Generate random numbers for posts, followers, and following
  const randomPosts = getRandomNumber(10, 100);
  const randomFollowers = getRandomNumber(100, 9000);
  const randomFollowing = getRandomNumber(50, 1000);

  if (user) 
  return (
     <div className="bg-[#fff] p-5 flex flex-col gap-5">
      <div className=" bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {user.username}
        </h2>
        
        {/* Profile Picture Placeholder | Posts, Followers, Following */}
        <div className="flex justify-between gap-10">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-6"></div>
          <div className="flex flex-1 justify-between items-center text-center text-gray-800 font-semibold mb-6">
             <div>
               <p className="text-[16px]">{randomPosts}</p>
               <p className="text-[11px] text-gray-500">Posts</p>
             </div>
             <div>
               <p className="text-[16px]">{randomFollowers}</p>
               <p className="text-[11px] text-gray-500">Followers</p>
             </div>
             <div>
               <p className="text-[16px]">{randomFollowing}</p>
               <p className="text-[11px] text-gray-500">Following</p>
             </div>
          </div>
        </div>
        
        <p className="font-semibold">{nameCapitalised(user.username)}</p>
        {/* Random Bio */}
        <p className="text-gray-600 mb-4">{randomBio}</p>

        {/* Edit Profile Button */}
        <button
          className="mt-4 bg-blue-500 text-white p-2 rounded-lg w-full font-semibold hover:bg-blue-600 transition-colors duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
