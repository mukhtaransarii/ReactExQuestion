import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../../Store/CartSlice.js'

export default function Products(){
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log("Error fetching data:", error))
  }, []);
  
  function addHandler(products) {
    dispatch(add(products))
  }

  return (
  <div className="w-full bg-[#fdfdfd] px-5 py-4 overflow-y-scroll">
  <h2 className="font-semibold text-[10px] mb-2">Products</h2>
  
  {data.map((products) => (
    <div
      key={products.id}
      className="flex items-center gap-4 bg-white mb-4 px-1 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={products.image}
        alt={products.title}
        className="w-[30%] aspect-square object-contain rounded-md"
      />
      <div className="flex flex-col justify-between text-[10px] leading-tight">
        <h3 className="font-semibold text-[10px]">{products.title}</h3>
        <p className="text-[8px] text-gray-500 mb-1">{products.description.slice(0, 80)}...</p>
        <p className="text-[10px] font-bold text-green-700">$ {products.price}</p>
        <button
          className="mt-2 text-white bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded-md text-[9px] font-medium transition-colors duration-300"
          onClick={() => addHandler(products)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>

  )
}




