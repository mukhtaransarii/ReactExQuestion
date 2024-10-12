import React,{useState, useContext} from 'react'
import UserContext from './UserContext.js'

function Login(){
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const {setUser} = useContext(UserContext)
   const {user} = useContext(UserContext)
   const [loginStatus, setLoginStatus] = useState("Please login to access your Profile")
   
    const handleSubmit = (e) => {
      if (username && password) {
      e.preventDefault();
      setUser({ username, password });
     }else{
      setLoginStatus("Please Enter your Username and Password")
     }
    };

  return (
 <div className="bg-[#fff] p-5 flex flex-col gap-5">
  <h5>04 useContext Passing Golbal props</h5>
 
  <div className="card bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
    
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
      className="w-full p-2 text-sm border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="w-full p-2 text-sm border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    
    <button
      onClick={handleSubmit}
      className="w-full py-2 px-4 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-600 dark:hover:bg-blue-500"
    >
      Submit
    </button>
  
    {!user && (
          <p className="mt-4 text-center text-zinc-400 text-xs">
            {loginStatus}
          </p>
    )}
  
  </div>
  </div>
  )
}
export default Login