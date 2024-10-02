import React from 'react'

export default function Card({
  sNo = '00',
  name = 'Empty', 
  email = 'Empty', 
  phone = 'Empty', 
  address = 'Empty'
}){
  return (
  <div className="bg-[#fff] p-5 flex flex-col gap-5">
  <h5>02 Props Method</h5>
  <h5 className="text-green-500">//Fetching data from : <a className="text-blue-400"  href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a></h5>
 
    <div className="card text-zinc-600">
       <p className="text-left text-zinc-400 text-[8px]">Card id: {sNo}</p>
       <p className="text-black font-semibold">Name : {name}</p>
       <p>Email : {email}</p>
       <p>Phone : {phone}</p>
       <p>Address : {address}</p>
    </div>
  </div>
  )
}