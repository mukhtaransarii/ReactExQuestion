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
      <div className="card max-w-[450px]">
      
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          {user.username}
        </h2>
        
        {/* Profile Picture Placeholder | Posts, Followers, Following */}
        <div className="flex justify-between gap-10 ">
          <img className="w-20 h-20 bg-gray-300 rounded-full mb-1" src="https://imgcdn.stablediffusionweb.com/2024/2/24/31aad3d9-a853-4296-88d7-58b3104a0527.jpg" />
          <div className="flex flex-1 justify-between items-center text-center text-gray-800 font-semibold ">
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
        
        <p className="font-semibold text-sm">{nameCapitalised(user.username)}</p>
        {/* Random Bio */}
        <p className="text-gray-600 mb-2 text-sm">{randomBio}</p>

        {/* Edit Profile Button */}
        <button
          className="bg-blue-500 text-white p-2 rounded-lg w-full font-semibold hover:bg-blue-600 transition-colors duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
