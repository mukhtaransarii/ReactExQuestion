import React, {createContext, useContext, useState} from 'react'
const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light")
  
  function themeToggle(){
    setTheme((prev) => (prev === "light"? "dark": "light"))
  }
  
  return (
    <ThemeContext.Provider value={{theme, themeToggle}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) 