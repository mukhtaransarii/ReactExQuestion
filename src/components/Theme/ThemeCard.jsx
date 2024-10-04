import React from 'react'
import {useTheme} from './ThemeContext.jsx'
const ThemeCard = () => {
  const {theme, themeToggle} = useTheme()
  
  return (
    <div className="p-5">   
      <div className={`card max-w-[450px] ${theme === 'light'? "lightMode": "darkMode"}`}>
            <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1533677264057-b42317cc3177?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
                alt="Placeholder"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Card Title</h2>
                <p className="text-[#aaa] mb-4">
                    This is a brief description of the card content. It can contain relevant information and details that you want to highlight.
                </p>      
                <button onClick={themeToggle} className={theme === 'dark'? "lightMode": "darkMode"}>{theme === "light"? "Dark Mode": "Light Mode"}</button> 
            </div>
        </div>
    </div>
  )
}
export default ThemeCard