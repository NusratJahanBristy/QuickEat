import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Header = () => {
    const menuItems=<>
    <li  className='font-semibold'><Link to='/'>Home</Link></li>
    <li  className='font-semibold'><Link to='/login'>Login</Link></li>
    <li  className='font-semibold'><Link to='/login'>Services</Link></li>
    <li  className='font-semibold'><Link to='/login'>Blogs</Link></li>
    </>
    return (
       <div className="navbar h-22 mb-12  bg-base-100 bg-orange-400 text-neutral-content">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-500 text-neutral-content rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl w-20 h-20">
        <img src={logo} alt=""/>QuickEat</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
   <button className='btn btn-outline btn-warning'>Appointment</button>
  </div>
</div>
    );
};

export default Header;