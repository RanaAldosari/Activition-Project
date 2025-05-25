import React from 'react';
import { Link } from 'react-router';
import Headerpage from '../containers/Header-page';
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";


function nav(){
  const menubar=document.getElementById('display');
  if(menubar){
    menubar.classList.toggle('hidden')
  }
}
function Nav() {

  return (
    <>
 <div className='flex lg:justify-between fixed top-0 left-0 w-full z-50 bg-black/50
 px-10 py-2 items-center text-white '>
      <div className='flex justify-around gap-8'>
        <div>
          <img className='hidden lg:flex w-20' src="/activision-logo (1).svg" alt="" />
        </div>
        <div className='hidden lg:flex gap-7 text-[.7rem] font-medium items-center text-gray-400 '>
      <Link to="/">
      <h4 className='hover:text-white delay-75 cursor-pointer duration-700  '>HOME</h4>
      </Link>
      <Link to="/about">
      <h4 className='hover:text-white delay-75 cursor-pointer duration-700  '>ABOUT</h4>
      </Link>
      <Link to="/carrer">
      <h4 className='hover:text-white delay-75 cursor-pointer duration-700  '>CARRERS</h4>
      </Link>
      <Link to="/support">
      <h4 className='hover:text-white delay-75 cursor-pointer duration-700  '>SUPPORT</h4>
      </Link>
        </div>
      </div>
      <div className='hidden text-[.6rem] font-bold lg:flex gap-5'>
        <button className='border rounded-4xl px-5 py-2 btn-hover2 '>SIGN UP</button>
        <button className='rounded text-gray-400 hover:text-white delay-75 cursor-pointer duration-700'>LOGIN</button>
      </div>
      {/* sm-screen */}
<div onClick={nav} className='flex justify-between w-55 items-center lg:hidden text-white hover:cursor-pointer'>
<h1 className='text-[1.2rem] font-bold' ><CiMenuFries /></h1>
 <div>
   <img className='w-20' src="/activision-logo (1).svg" alt="" />
        </div>
</div>
  <div id="display" className='hidden w-full fixed top-[30px] left-0 bg-black  text-white py-5 px-10 lg:hidden'>
<div className='flex justify-end'>
    <div className='text-2xl cursor-pointer' onClick={nav}>
<h1>  <HiOutlineXMark /></h1>
          </div>
        </div>
<div className='flex flex-col gap-3'>
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT</Link>
    <Link to="/carrer">CARRERS</Link>
    <Link to="/support">SUPPORT</Link>
     <div className='flex justify-start text-[.6rem] font-bold gap-5'>
        <button className='border rounded-4xl px-5 py-2 btn-hover2 text-[.8rem]'>SIGN UP</button>
        <button className='rounded text-gray-400 hover:text-white delay-75 cursor-pointer duration-700 text-[.8rem]'>LOGIN</button>
      </div>
        </div>
      </div>
    </div>

      </>
  );
}

export default Nav;
