import React from 'react'
import BannerTHome from './BannerT-Home'
function Aboutpage() {

    const leaderTeam=[
        {
        profileImg:'/rob-kostich.jpg',
        name:'Rob Kostich',
        job:'President'
    },
    {
 profileImg:'/josh-taub.jpg',
        name:'Josh Taub',
        job:'Chief Operating Officer'
    },
        {
 profileImg:'/suzie-carr.jpg',
        name:'Suzie Carr',
        job:'Chief People Officer'
    },
        {
 profileImg:'/terri-durham.jpg',
        name:'Terri Durham',
        job:'SVP & General Counsel'
    },
        {
 profileImg:'/dave-stohl.jpg',
        name:'David Stohl',
        job:'Head of Development, Call of Duty'
    },
        {
 profileImg:'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg',
        name:'Pat Kelly',
        job:'Head of Creative, Call of Duty'
    },
        {
 profileImg:'/tyler-bahl.jpg',
        name:'Tyler Bahl',
        job:'SVP, Head of Marketing'
    },
        {
 profileImg:'/natasha.jpg',
        name:'Natasha Tatarchuk',
        job:'SVP, Chief Technology Officer'
    },
        {
 profileImg:'/matt-cox.jpg',
        name:'Matt Cox',
        job:'GM, Call of Duty'
    },
]


const games=[
    {
        gameImg:'/gameImg-AboutPG/Screenshot 2025-05-23 212444.png',
        gameTitle:'Call of Duty Black Ops 6',
        gameclass:'MATRUE 17+'
    },
    {
        gameImg:'/gameImg-AboutPG/Screenshot 2025-05-23 212502.png',
        gameTitle:'Call of Duty®: Warzone',
        gameclass:'MATRUE 17+'
    },
     {
        gameImg:'/gameImg-AboutPG/Screenshot 2025-05-23 212520.png',
        gameTitle:'Call of Duty Modern Warfare III',
        gameclass:'MATRUE 17+'
    },
     {
        gameImg:'/gameImg-AboutPG/Screenshot 2025-05-23 212531.png',
        gameTitle:'Crash Team Rumble',
        gameclass:'EVERYONE 10+'
    },
     {
        gameImg:'/gameImg-AboutPG/Screenshot 2025-05-23 212539.png',
        gameTitle:'Tony Hawk™ Pro Skater™ 1 + 2',
        gameclass:'TEEN'
    },
     {
        gameImg:'/gameImg-AboutPG/Screenshot 2025-05-23 212554.png',
        gameTitle:'Call of Duty®: Mobile',
        gameclass:'MATRUE 17+'
    },
     {
        gameImg:'/gameImg-AboutPG/Screenshot 2025-05-23 212610.png',
        gameTitle:'Sekiro®: Shadows Die Twice',
        gameclass:'MATRUE 17+'
    },
     {
        gameImg:'/gameImg-AboutPG/Screenshot 2025-05-23 212619.png',
        gameTitle:'SPYRO® Reignited Trilogy',
        gameclass:'EVERYONE 10+'
    }
]

  return (
   <>
   <div className='bg-black  text-white'>
    <div className='flex pt-30 p-10 justify-center lg:p-30 bg-gradient-to-b from-white/15'>
        <img className='w-full lg:w-220 mask-t-from-50%' src="/Screenshot_2025-05-23_191809-removebg-preview.png" alt="" />
    </div>

    {/* content */}
    <div className='flex flex-col gap-20'>
  
    <div className='px-10 flex flex-col gap-2 text-center'>
        <h1 className='font-bold text-[1.5rem]'>OUR MISSION</h1>
        <hr />
        <p className='text-[.8rem]'>At Activision, we strive to create the most iconic brands in gaming and entertainment. We’re driven by our mission to deliver unrivaled gaming experiences for the world to enjoy, together.  Home to iconic franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™ Pro Skater™, we're a global leader in interactive entertainment. Our goal? Delight millions with innovative, fun, and engaging games. With a legacy of success, we're pushing boundaries with cutting-edge technology and inclusive practices. Join us in delivering unforgettable entertainment and seize the chance to level up your career.</p>
    </div>
    
     <div className='px-10 flex flex-col gap-2 text-center'>
        <h1  className='font-bold text-center text-[1.5rem]'>Activate Your Future</h1>
        <hr />
       <p className='text-[.9rem] lg:text-[.8rem]'>We unite our global player community with epic entertainment, focusing on three core pillars:</p>
       <p className='text-[.8rem] text-start'> • People - fostering talent and learning opportunities.</p>
       <p className='text-[.8rem] text-start'>• Innovation - consistently pushing to iterate and evolve.</p>
       <p className='text-[.8rem] text-start'>• Excellence - delivering high-quality games, consistently year in and year out.</p>
       <p className='text-[.8rem] text-start'>• Join us at Activision, where inclusivity thrives, and together we shape the future of entertainment for our players. Explore open roles now!</p>
    </div>

   <div className='px-10 flex flex-col gap-2 text-center justify-center items-center'>
        <h1  className='font-bold text-[1.5rem]'>OUR VALUES</h1>
     <hr className='border border-gray-100 w-full' />
        <img className='lg:px-10' src="/atvi-values.png" alt="" />
         <button className='border rounded-4xl px-10 py-2 btn-hover2 '>LEARN MORE</button>
    </div>

<div className='px-10 flex flex-col gap-2 text-center'>
    <h1 className='font-bold text-[1.5rem]'>OUR LEADERSHIP TEAM</h1>
    <hr />
<div className='grid grid-cols-2 md:grid-cols-3 gap-6 pt-5'>
    {leaderTeam.map((leaderName,i)=>(
        <div key={i} className='flex flex-col items-center'>
<img className='rounded-full w-45' src={leaderName.profileImg} alt="" />
            <h1 className='font-bold text-[.8rem]'>{leaderName.name}</h1>
            <h5 className='text-[.7rem]'>{leaderName.job}</h5>
        </div>

    ))}
</div>
</div>

<div className='px-10 flex flex-col gap-2 text-center'>
    <h1 className='font-bold text-[1.5rem]'>OUR GAMES</h1>
<hr />
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-6'>
{games.map((gameInfo,i)=>(
        <div key={i} className='flex flex-col items-center'>
    <img src={gameInfo.gameImg} className='rounded-sm w-45 hover:w-48 delay-75 cursor-pointer duration-500'/>
    <h1 className='font-bold text-[.8rem]'>{gameInfo.gameTitle}</h1>
    <p className='text-[.7rem] text-gray-500'>{gameInfo.gameclass}</p>
        </div>
))}
    </div>
</div>

<div className='px-10 flex flex-col gap-2 text-center pb-20'>
    <h1 className='font-bold text-[1.5rem]'>OUR STUDIOS</h1>
    <hr />
    <div className='grid grid-cols-2 text-center px-5 md:grid-cols-3 gap-6 place-items-center '>
    <img className='w-45 relative opacity-35 hover:opacity-100 delay-75 cursor-pointer duration-500' src="/logo_treyarch.png" alt="" /><img className='w-45 relative opacity-35 hover:opacity-100 delay-75 cursor-pointer duration-500 ' src="/logo_infinityward.png" alt="" /><img className='w-45 relative opacity-35 hover:opacity-100 delay-75 cursor-pointer duration-500 ' src="/logo_highmoon-studios.png" alt="" /><img className='w-45 relative opacity-35 hover:opacity-100 delay-75 cursor-pointer duration-500 ' src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_beenox.png" alt="" /><img className='w-45 relative opacity-35 hover:opacity-100 delay-75 cursor-pointer duration-500 ' src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_sledgehammer.png" alt="" /><img className='w-45 relative opacity-35 hover:opacity-100 delay-75 cursor-pointer duration-500 ' src="/logo_raven.png" alt="" /><img className='w-45 relative opacity-35 hover:opacity-100 delay-75 cursor-pointer duration-500 ' src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo-toysforbob.png" alt="" /><img className='w-45 relative opacity-35 hover:opacity-100 delay-75 cursor-pointer duration-500 ' src="/logo_atvi-shanghai-studio.png" alt="" /><img className='w-45 relative opacity-35 hover:opacity-100 delay-75 cursor-pointer duration-500 ' src="/logo_demonware.png" alt="" />
    </div>
</div>

<BannerTHome />

</div>
   </div>
   </>
  )
}

export default Aboutpage