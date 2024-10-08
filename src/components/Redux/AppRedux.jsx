import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Product from './Products.jsx'
import Cart from './Cart.jsx'


const AppRedux = () => {
  return (
    <div className="bg-[#CDEA68] p-5">
      <h5 className="">05 Redux Ecommerce Website</h5>
      <div className="flex aspect-video max-w-[450px] bgShadow rounded-[8px] overflow-hidden my-4">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/CartRedux" element={<Cart />} />
          </Routes>
        </Router>
      </div>
      
      {/* Project Overview Section */}
      <div className="bg-white p-4 rounded-md shadow mt-4">
        <h2 className="text-[12px] font-bold">Project Overview</h2>
        <p className="text-[10px]">
          This project is an e-commerce website built using React and Redux. It allows users to view products, add them to a cart, and manage their selections seamlessly.
        </p>

        <h2 className="text-[12px] font-bold mt-2">How to Use It</h2>
        <p className="text-[10px]">
          1. <strong>Installation</strong>: Clone the repository from GitHub. Run <code>npm install</code> to install the necessary packages. Start the application using <code>npm start</code>.
        </p>
        <p className="text-[10px]">
          2. <strong>Navigation</strong>: Use the Navbar to navigate between the Products page and the Cart page. On the Products page, browse the available items. Click Add to Cart to select a product. View the Cart page to see selected items and their total price. Use the Remove button to delete items from the cart.
        </p>

        <h2 className="text-[12px] font-bold mt-2">Technologies Used</h2>
        <p className="text-[10px]">
          - React: For building the user interface and managing component states. <br />
          - Redux: For state management, enabling a seamless flow of data between components. <br />
          - React Router: For handling routing between different pages of the application. <br />
          - Tailwind CSS: For styling the components with a utility-first approach. <br />
          - JavaScript (ES6): For writing functional components and handling asynchronous data fetching.
        </p>

        <h2 className="text-[12px] font-bold mt-2">Achievements After Making This</h2>
        <p className="text-[10px]">
          - Enhanced Skills: Improved proficiency in React, Redux, and Tailwind CSS, gaining a solid understanding of state management and component lifecycles. <br />
          - Real-world Application: Built a functional e-commerce platform that demonstrates practical application of web development skills. <br />
          - User Experience: Designed a user-friendly interface that enhances the shopping experience with responsive design and interactive elements. <br />
          - Data Fetching: Successfully implemented data fetching from an external API, showcasing the ability to integrate backend data with a frontend application. <br />
          - Reusable Components: Developed reusable components that can be easily adapted for future projects or enhancements.
        </p>
      </div>
    </div>
  );
}

export default AppRedux;

