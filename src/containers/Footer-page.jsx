import React from 'react'
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";

const scrollToUp=()=>{
  window.scrollTo({
      top:0,
      behavior:"smooth"
  })
}  
function Footerpage() {


  return (
   <>
   <div className='bg-black text-white bg-gradient-to-b from-white/15'>

   <div className=' flex flex-col lg:items-center gap-10 lg:pt-16 lg:flex-row lg:gap-0 justify-around items-center'>
    {/* icons-social */}
    <div>
<h1>FOLLOW US</h1>
<div className='flex flex-col gap-10'>
        <div className='flex gap-2'>
     <h1 className='border rounded-4xl p-2 hover:bg-white hover:text-black delay-75 cursor-pointer duration-700 '><FaSquareFacebook /></h1>
     <h1 className='border rounded-4xl p-2 hover:bg-white hover:text-black delay-75 cursor-pointer duration-700 '><BsTwitterX /></h1>
       <h1 className='border rounded-4xl p-2 hover:bg-white hover:text-black delay-75 cursor-pointer duration-700 '><FaYoutube /></h1>
       <h1 className='border rounded-4xl p-2 hover:bg-white hover:text-black delay-75 cursor-pointer duration-700 '><FaLinkedin /></h1>
   <h1 className='border rounded-4xl p-2 hover:bg-white hover:text-black delay-75 cursor-pointer duration-700 '><FaInstagramSquare /></h1>
        </div>
        <div className='w-50 flex gap-4'>
<img className='w-30 h-15' src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/common/footer/esrb-e-m.jpg" alt="" />
<img className='h-15' src="	https://www.activision.com/content/dam/atvi/activision/home/footer/ESRB_updated.jpg" alt="" />
        </div>
         </div>
    </div>

    {/* popular-game */}
<div className='flex flex-col items-start lg:flex-row justify-between lg:items-start gap-10'>
 <div>
<h1>POPULAR GAME</h1>
<div>
    <h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Call of Duty <LuSquareArrowOutUpRight /></h6>
      <h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Tony Hawk Pro Skater <LuSquareArrowOutUpRight /></h6>
    <h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Crash Bandicoot <LuSquareArrowOutUpRight /></h6>
<h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Spyro<LuSquareArrowOutUpRight /></h6>
<h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Sekiro<LuSquareArrowOutUpRight /></h6>
</div>
    </div>
    <div>
<h1>COMPANY</h1>
<div>
    <h6 className='flex items-center text-xs text-gray-500 text-[.7rem]   hover:text-white delay-75 cursor-pointer duration-700'>Press <LuSquareArrowOutUpRight /></h6>
      <h6 className='flex items-center text-xs text-gray-500 text-[.7rem]   hover:text-white delay-75 cursor-pointer duration-700'>Research <LuSquareArrowOutUpRight /></h6>
    <h6 className='flex items-center text-xs text-gray-500 text-[.7rem]   hover:text-white delay-75 cursor-pointer duration-700'>Activision Blizzard <LuSquareArrowOutUpRight /></h6>
        <h6 className='flex items-center text-xs text-gray-500 text-[.7rem]   hover:text-white delay-75 cursor-pointer duration-700'>Contact Us<LuSquareArrowOutUpRight /></h6>
</div>
    </div>

       <div>
<h1 className='font-medium '>LEGAL</h1>
<div>
    <h6 className='flex items-center text-xs text-gray-500 text-[.7rem] hover:text-white delay-75 cursor-pointer duration-700'>Terms of Use </h6>
      <h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Privacy Policy </h6>
    <h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Cookie Policy</h6>
        <h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Cookie Settings</h6>
<h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Online Safety</h6>
<h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Applicant Privacy Policy</h6>
<h6 className='flex items-center text-xs text-gray-500 text-[.7rem]  hover:text-white delay-75 cursor-pointer duration-700 '>Your Privacy Choices <MdOutlinePrivacyTip/></h6>
</div>
    </div>
    <div onClick={scrollToUp}  className='flex ml-8 lg:ml-0 flex-col items-center hover:cursor-pointer'>
       <h6 className='border border-gray-400 text-gray-400 rounded-4xl w-[40px] flex items-center justify-center p-2'><FaArrowUpLong /></h6>
       <h1 className='text-xs text-gray-400'>Back to Top</h1>
    </div>
 </div>    
   </div>
<div className='flex flex-col justify-center items-center gap-2 pt-5 lg:pt-0'>
    <img className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
    <img  className="w-40" src="/activision-logo (1).svg" alt="" />
    <h5 className='text-xs pb-20'>Copyright 2025 Activision Publishing, Inc.</h5>
</div>
   </div>
   </>
  )
}

export default Footerpage