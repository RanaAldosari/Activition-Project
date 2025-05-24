import React from 'react'

function PannerHome() {
  return (
   <>
   <div className=' bg-black flex flex-col-reverse lg:flex-row justify-between items-center py-5 gap-8'>
    {/* content */}
    <hr />
    <div className='flex flex-col items-center text-white gap-4 p-5 text-center lg:items-start lg:text-start'>
        <h1 className='text-[1.4rem] font-bold lg:text-[1.7rem] '>We're here to help!</h1>
        <p>Get answers to frequently asked questions, check server status, and engage with a support expert</p>
        <button className='border rounded-3xl w-40 text-[12px] py-3 font-bold btn-hover '  ><a href="http://localhost:5173/support" target="_blank" rel="noopener noreferrer">VISIT SUPPORT</a></button>
    </div>
    {/* img */}
    <div>
        <img src="/support-banner-v3.jpg" alt="section-image" />
    </div>
    <hr />
   </div>
   </>
  )
}

export default PannerHome