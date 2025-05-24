import React from 'react'

function BannerTHome() {
  return (
    <>
   <div className='relative w-full '>
<img className='absolute' src="/Screenshot 2025-05-24 184718.png" alt="" />
<div className='absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/100 h-[100%] lg:h-[100]'></div>
<div className=' relative flex flex-col lg:justify-between lg:flex-row lg:p-10 text-white '>
{/* content */}
 <div className='bg-black flex flex-col items-center mt-25  lg:bg-transparent lg:m-0 lg:text-start gap-4 max-w-md text-white'>
            <h1 className='font-bold text-[1.8rem] lg:text-4xl lg:text-[2.5rem] text-color'>HAVE FUN</h1>
            <h4 className='text-lg'>Learn more about job opportunities</h4>
  <button className='border mb-5 rounded-3xl w-40 text-[12px] py-3 font-bold btn-hover'  ><a href="http://localhost:5173/carrer" target="_blank" rel="noopener noreferrer">JOIN US</a></button>
          </div>
<div className='bg-black mt-0 text-sm flex flex-col items-center pt-5 lg:p-0  lg:bg-transparent lg: gap-2'>
     <h2 className='font-bold text-lg drop-shadow-md'>OUR TEAMS</h2>
<div className='flex gap-12 pb-10'>
<div>
   <h6>Game Design</h6>
   <h6>Art & Animation</h6>
   <h6>Brand Management</h6>
   <h6>Production</h6>
   <h6>Quality Assurance</h6>
</div>
<div>
   <h6>Customer Support</h6>
   <h6>Studio Operations</h6>
   <h6>Programming</h6>
   <h6>Finance & Accounting</h6>
   <h6>Human Resources</h6>
</div>
            </div>
          </div>
</div>


 {/* <div className='flex flex-col  relative bg-cover bg-no-repeat bg-center bg-[url(https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/joinus-banner-img-spyro.png)]' style={{ backgroundImage: 'url()' }}></div> */}

      </div>
    </>
  )
}

export default BannerTHome
