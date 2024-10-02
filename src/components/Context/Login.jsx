import React,{useState, useContext} from 'react'
import UserContext from './UserContext.js'

function Login(){
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const {setUser} = useContext(UserContext)
   const {user} = useContext(UserContext)
   
    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username, password})
    }
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
      className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    
    <button
      onClick={handleSubmit}
      className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
    >
      Submit
    </button>
    {!user && (
          <p className="mt-4 text-center text-zinc-400 text-xs">
            Please login to access your Profile.jsx
          </p>
    )}
  </div>
  </div>
  )
}
export default Login