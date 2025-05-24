import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const cards =[
  {
    img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
    date: "MAY 20, 2025",
    title: "Stitch Returns in Season 04"
  },
  {
    img:'https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg',
    date:"MAY 15,2025",
    title:'Support C.O.D.E. Military Appreciation Month with USAA'
  },
  {
    img:"https://www.activision.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
    date:"MAY 09,2025",
    title:"Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre"
  },
  {
    img:"https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
    date:'MAY 07,2025',
    title:'#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone'
  },
   {
    img:"https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
    date:'MAY 01,2025',
    title:'C.O.D.E. celebrates Military Appreciation Month with USAA'
  },
   {
    img:"https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
    date:'APR 29,2025',
    title:'Black Ops 6 Season 03 Reloaded: All the Details'
  },
]

function Card() {
  return (
    <div className='bg-black text-white px-4 py-20'>
      <h1 className='mt-5 font-bold text-center text-[1.5rem] mb-4 lg:mt-0'>Latest News & Articles</h1>
      <hr className="border-gray-700 mb-1" />
      
      <div className=' hidden lg:flex flex-wrap justify-center gap-4 mb-1'>
      <h1 className='px-4 py-1 text-sm font-bold text-white text-hover flex items-center' >ALL NEWS</h1>
   <img className='w-20 grayscale-100 hover:grayscale-0 hover:bg-[rgba(7,105,175,0.67)] hover:border-b-2 hover:border-[rgba(7,105,175,0.67)] px-2 duration-500  cursor-pointer' src="/activision-logo (1).svg"  />
        <img className='w-20  grayscale-100 hover:text-hover hover:grayscale-0 hover:bg-[rgba(7,105,175,0.67)] hover:border-b-2 hover:border-[rgba(7,105,175,0.67)] px-2 duration-500  cursor-pointer'  src="/cod-logo.svg"  />
        <img className='w-20  grayscale-100 hover:text-hover hover:grayscale-0 hover:bg-[rgba(7,105,175,0.67)] hover:border-b-2 hover:border-[rgba(7,105,175,0.67)] px-2 duration-500  cursor-pointer'  src="/THPS3+4_Logo.svg"/>
        <img className='w-20  grayscale-100 hover:text-hover hover:grayscale-0 hover:bg-[rgba(7,105,175,0.67)] hover:border-b-2 hover:border-[rgba(7,105,175,0.67)] px-2 duration-500  cursor-pointer'  src="/crash-bandicoot-logo.png" />
      </div>
      {/* sm-screen */}
<div className='flex gap-20 p-5 lg:hidden'>
<h1 className='pl-35 text-center text-[1.2rem] font-bold'>  ALL NEW </h1>
<h1 className='font-bold text-[1.5rem]'> <IoMdArrowDropdown /></h1>
</div>
      <hr className="border-gray-700 mb-6" />
{/* Cards */}
<div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 p-10">
        {cards.map((card, i) => (
<div key={i} className='group relative rounded  text-white bg-neutral-900 hover:scale-105 duration-500 delay-75'>
<img src={card.img} className='w-full h-48 object-cover' />
<div className='p-4 bg-gradient-to-b from-white/12'>
<h6 className='text-gray-400 text-xs text-[10px]'>{card.date}</h6>
     <h2 className='font-bold text-md pb-4'>{card.title}</h2>

<div className="relative w-full h-[10px] mb-5">
<div className="absolute w-[85%] h-[1px] bg-gray-400 group-hover:bg-blue-900 duration-300"></div>
<div className="absolute w-[25%] h-[1.8vh] bg-gray-400 group-hover:bg-blue-900 duration-300 "></div>
</div>
<h3 className='flex items-center font-bold text-[.5rem] hover:text-blue-900 cursor-pointer'>READ MORE <IoIosArrowForward className='ml-1' /></h3>
</div>
          </div>
        ))}
      </div>

<div className='flex justify-center pt-5'>
  <button className='border rounded-3xl w-40 text-[12px] py-3 font-bold btn-hover '>VIEW ALL</button>
</div>


    </div>
  );
}

export default Card;
