import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Product from './Products.jsx'
import Cart from './Cart.jsx'

const AppRedux = () => {
  return (
     <div className="bg-[#CDEA68] p-5">
        <h5>05 Redux || Ecommerce Website </h5>
        <div className="flex aspect-video max-w-[450px] bgShadow rounded-[8px] overflow-hidden my-4">
          <Router>
            <Navbar />
              <Routes>
                 <Route path="/" element={<Product/>}></Route>
                 <Route path="/CartRedux" element={<Cart/>}></Route>
              </Routes>
          </Router>
        </div>
    </div>
  )
}

export default AppRedux