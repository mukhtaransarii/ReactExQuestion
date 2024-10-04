import React from 'react'
import {useTheme} from './ThemeContext.jsx'
const ThemeCard = () => {
  const {theme, themeToggle} = useTheme()
  
  return (
    <div className="p-5"> 
      <div className={`card max-w-[450px]  overflow-hidden ${theme === 'light'? 'light': 'dark'}`}>
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Shoes"
          className="w-full h-52 object-cover rounded-[18px]"
        />

        <div className="pt-4">
          {/* Title and description */}
          <div className="flex justify-between">
             <h2 className="text-xl font-semibold dark:text-white">Men's Running Shoes</h2>
             <button className="bg-blue-500 font-semibold">Add to Cart</button>
          </div>
          <p className="text-[#808080] text-sm mt-2">
            Breathable, lightweight shoes designed for maximum comfort and style.
          </p>

          {/* Price */}
          <div className="mt-4">
            <span className="text-lg font-bold">$79.99</span>
          </div>

          {/* Rating */}
          <div className="mt-3 flex items-center">
            <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
            <span className="text-sm text-[#808080] ml-2">(120 reviews)</span>
          </div>

          {/* Add to Cart Button */}
          <button 
          className={`mt-4 w-full py-2 px-4 font-semibold rounded-md ${theme === 'dark'? 'light': 'dark'}`}
          onClick={themeToggle}>
            {theme === 'light'? 'Dark Mode': 'Light Mode'}
          </button>
        </div>
      </div>
  </div>
  )
}
export default ThemeCard



