import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#F7F7F7] w-[35%] text-[9px] px-3 flex items-center">
      <li className="flex flex-col gap-1 flex-1">
         <NavLink to="/" className="no-underline na pl-1  rounded-[2px]">Home</NavLink>
         <NavLink to="/about" className="no-underline na pl-1 rounded-[2px]">About</NavLink>
         <NavLink to="/contact" className="no-underline na pl-1 rounded-[2px]">Contact</NavLink>
         <NavLink to="/help" className="no-underline na pl-1 rounded-[2px]">Help</NavLink>
      </li>
    </nav>
  );
};

export default Navbar;
