import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../../Store/CartSlice.js';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function handleRemove(product) {
    dispatch(remove(product));
  }

  // Calculate Total price
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="flex flex-col justify-between gap-1 w-full bg-[#f7f9fc] px-5 p-3 max-h-[80vh]">
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-sm font-semibold">Your Cart is Empty !!</p>
          <p className="text-[10px] text-gray-500">Go to Products and Click Add to Cart Button</p>
        </div>
      ) : (
          <div className="flex-1 overflow-hidden overflow-y-scroll">
            <h2 className="font-semibold text-[10px] mb-2">Your Cart</h2>
            {
            cart.map(product => (
               <div key={product.id} className="flex items-center gap-4 bg-white mb-3 p-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                 <img src={product.image} alt={product.title} className="w-[30%] aspect-square object-contain rounded-md" />
                 <div className="flex flex-col justify-between text-[9px] leading-tight">
                   <h3 className="font-semibold text-[10px]">{product.title}</h3>
                   <h6 className="text-[8px] text-gray-600">{product.description.slice(0, 80)}...</h6>
                   <div className="flex justify-between items-center mt-1">
                     <h6 className="font-bold text-green-700">$ {product.price}</h6>
                     <button
                       className="text-[9px] bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md transition-colors duration-300"
                       onClick={() => handleRemove(product)}
                     >
                        Remove
                      </button>
                    </div>
                  </div>
               </div>
           ))}
          </div>
      )}

      {cart.length > 0 && (
        <div className="bg-white px-2 py-[5px] rounded-lg shadow">
          <p className="text-[10px] font-semibold">Total Price: <span className="text-green-700">$ {totalPrice}</span></p>
        </div>
      )}
    </div>
  );
}
