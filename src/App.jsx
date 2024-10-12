import React, {useState, useEffect} from 'react'
import Home from './components/Home.jsx'
import Hook from './components/Hook.jsx'
import Card from './components/Card.jsx'
import AppRouterDom from './components/ReactRouterDom/AppRouterDom.jsx'
import UserContextProvider from './components/Context/UserContextProvider.jsx'
import Login from './components/Context/Login.jsx'
import Profile from './components/Context/Profile.jsx'
import {ThemeProvider} from './components/Theme/ThemeContext.jsx'
import ThemeCard from './components/Theme/ThemeCard.jsx'
import AppRedux from './components/Redux/AppRedux.jsx'
import {Provider} from 'react-redux'
import store from './Store/Store.js'

export default function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setData(data.slice(0, 1)))
  }, [])
  
  return(
  <div>
    <Home />
    <Hook />
   
    {data.map(item => (
     <Card key={item.id}
         
          name={item.name}
          email={item.email}
          phone={item.phone}
          address={`${item.address.street} ${item.address.city} ${item.address.zipcode}`}
          sNo={item.id}
     />
    ))}
    
    <AppRouterDom />
  
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
    
    <ThemeProvider>
      <ThemeCard />
    </ThemeProvider>
   
    <Provider store={store}>
      <AppRedux />
    </Provider>
  </div> 
)}