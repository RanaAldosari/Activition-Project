import React from 'react'



const cardsSupport=[
    {
        title:'CALL OF DUTY: BLACK OPS 6',
        img:'	https://support.activision.com/content/dam/atvi/support/home/modules/tall/BO6-home-tile2.jpg'
    },
    {
        title:'ACCOUNT & SECURITY',
        img:'https://support.activision.com/content/dam/atvi/support/home/modules/tall/account-security-en-silver-tall-2x.jpg'
    },
    {
        title:'CALL OF DUTY: WARZONE',
        img:'/WZV-home-tile.jpg'
    },
    {
        title:'CALL OF DUTY: MOBILE',
        img:'https://support.activision.com/content/dam/atvi/support/home/modules/tall/codmobile-module.jpg'
    },
    {
        title:'TONY HAWK PRO SKATER 3 + 4',
        img:'/THPS34-home-tile.png'
    },
    {
        title:'CALL OF DUTY: MODERN WARFARE III',
        img:'/MWIII-home-tile-1c.png'
    },
    {
        title:'CALL OF DUTY: MODERN WARFARE II',
        img:'https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg'
    },
    {
        title:'CALL OF DUTY: MODERN WARFARE',
        img:'/MW_module_001.jpg'
    },
    {
        title:'CALL OF DUTY: BLACK OPS COLD WAR',
        img:'/cold-war-home-page-tile.jpg'
    }
]

function CarrerPage() {
  return (
   <>
   <div className='bg-color'>
    <div className='bg-black h-[10vh]'>.</div>
<div className='bg-[url(https://support.activision.com/content/dam/atvi/support/home/carousel/hero/BO6_S3R_hero.jpg)] bg-cover bg-no-repeat bg-center w-full h-[35rem] sm:h-[45rem] md:h-[60rem] lg:h-screen'>
<div className='bg-blue-300 w-full h-[7vh] text-white text-[0.7rem] sm:text-sm px-5 sm:px-10 flex items-center justify-center sm:justify-start text-center sm:text-left'>NEED HELP RECOVERING A HACKED ACTIVISION ACCOUNT?  <a href="http://" target="_blank" rel="noopener noreferrer" className='font-bold underline ml-2'>LEARN MORE</a> </div>  
{/* content */}
  <div className='flex flex-col gap-5 p-5 sm:p-10 lg:p-20'>
    <img className='w-50 lg:w-60' src="public/BO6-S3R-logo-lockup.png" />

    <div className='flex items-center gap-3'>
      <img className='w-8' src="public/icon_game.png"/>
      <h1 className='text-white text-[0.7rem]  hover:delay-75 duration-700 hover:scale-105 cursor-pointer'>CHECK OUT WHAT'S NEW IN SEASON 03 RELOADED</h1>
    </div>

    <div className='flex items-center gap-3'>
      <img className='w-8' src="public/icon_support.png" />
      <h1 className='text-white text-[0.7rem]  hover:delay-75 duration-700 hover:scale-105 cursor-pointer'>BROWSE THE SUPPORT PAGE</h1>
    </div>
  </div>
</div>

{/* cards */}
<div className='grid grid-cols-1 lg:gap-2 lg:grid-cols-3'>
    {cardsSupport.map((card,i)=>(
<div key={i} className='flex flex-col p-5 items-center lg:p-10'>
<h2 className='text-gray-400 lg:text-[.7rem] font-bold'>{card.title}</h2>
<img src={card.img} className='w-full pt-2 object-cover  hover:delay-85 cursor-pointer duration-700 hover:scale-108' />
</div>
    ))}
</div>
   </div>
   </>
  )
}

export default CarrerPage