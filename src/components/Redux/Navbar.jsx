import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Navbar = () => {
 const cart = useSelector(state => state.cart)
 console.log(cart)
  return (
     <nav className="bg-[#F7F7F7] w-[35%] text-[9px] px-3 flex items-center">
        <li className="flex flex-col gap-1 flex-1">         
           <NavLink to="/" className="no-underline na pl-1  rounded-[2px]">Products</NavLink>
           <NavLink to="/CartRedux" className="no-underline na pl-1  rounded-[2px]">Cart <mark className="text-green-500 bg-transparent font-semibold">{cart.length == 0 ? '': cart.length}</mark></NavLink>
        </li>
    </nav>
  )
}

export default Navbar