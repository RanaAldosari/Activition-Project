import React from 'react'
import { CiHeart } from "react-icons/ci";
const imgCarrer=[
    {
img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem11-1710455685013.png'
    },
    {
img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem12-1710455727924.png'
    },
    {
        img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem13-1710455855824.png'
    },
    {
img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem14-1710456001039.png'
    },
    {
img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem15-1710456129634.png'
    },
    {
img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem16-1710456257523.png'
    },
    {
img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem17-1710456307621.png'
    },
    {
img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem18-1710456364531.png'
    },
    {
img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem19-1710456408214.png'
    },
]

// explore-section
const exploeImg=[
    {
        img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg',
        title:'Our Locations'
    },
    {
        img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg',
        title:'DE&I'
    },
    {
        img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg',
        title:'Early Careers'
    },
    {
        img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png',
        title:'Mission & Talent Brand'
    },
]


// studio-img

const studioImg=[
    {
        img:'public/logo_treyarch.png'
    },
      {
        img:'public/logo_infinityward.png'
    },
      {
        img:'public/logo_highmoon-studios.png'
    },
      {
        img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576477943_logo_sledgehammer-1666639102046.png'
    },
      {
        img:'public/logo_raven.png'
    },
      {
        img:'public/logo_atvi-shanghai-studio.png'
    },
      {
        img:'public/logo_demonware.png'
    },
      {
        img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691577163163_ss-logo-labeled-1670261765680.png'
    },
      {
        img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/DLE-Logo-White2-1709023761211.png'
    },
      {
        img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/central_tech_text_7201-1709023955618.png'
    },
      {
        img:'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Beenox3-1710257100788.png'
    },
]


// postionsApply
const job=[

    {
        jobName:'Senior Gameplay Engineer - High Moon Studios',
        jobSub:'Programming/Software Engineering',
        jobNum:'R024108',
        jopDes:'Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, to game...',
    },
    {
        jobName:'Lead Analytics Engineer',
        jobSub:'Data Analytics',
        jobNum:'R024154',
        jopDes:'You will work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...',
    },
    {
        jobName:'Expert Animation Engineer - Infinity Ward',
        jobSub:'Programming/Software Engineering',
        jobNum:'R024307',
        jopDes:'Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to... ',
    },
    {
        jobName:'Senior AI Animator - Infinity Ward',
        jobSub:'Animation',
        jobNum:'R022959',
        jopDes:'Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...',
    },
    {
        jobName:'Level Designer',
        jobSub:'Game/Level Design',
        jobNum:'R025221',
        jopDes:'Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...',
    },
]


function SupportPage() {
  return (
   <>
   <div className='bg-black w-full'>
    <div className='bg-black h-[10vh]'>.</div>
<div className='relative'>
    <video src="https://assets.phenompeople.com/CareerConnectResources/prod/ACPUUS/videos/EVPCareersiteherovideo5-1710271231185.mp4" className='w-full' autoPlay muted loop playsInline></video>
</div>
<div className="w-full h-full  lg:absolute top-0 left-0 flex items-center justify-center pt-10">
    <button className="bg-black text-white border-1 border-green-700 hover:bg-green-700 cursor-pointer  font-bold text-[.7rem] px-10  lg:px-7 py-3 ">SEARCH JOBS</button>
  </div>
<hr className='w-full mt-5 border-gray-400' />
    <div className='bg-color flex flex-col items-center justify-around'>
<h1 className='text-center  text-white mt-15  font-bold text-[1.1rem] lg:text-[1.5rem]'>START YOUR GAME CHANGING CAREER</h1>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-5 mt-20 lg:mt-5 p-10 lg:p-15 pt-0 bg-color'>
        {imgCarrer.map((items,i)=>(
            <div key={i} className=''>
                <img src={items.img} alt="" />
            </div>
        ))}
    </div>

{/* explore */}
<div className='bg-color'>
    <h1 className='text-center  text-white mt-15 font-bold text-[1.5rem]'>EXPLORE OUR WORLD</h1>

<div className='grid grid-cols-1 lg:grid-cols-4 gap-5 p-10'>
    {exploeImg.map((item,i)=>(
        <div key={i} className='flex flex-col bg-black text-white items-center rounded-2xl gap-5'>
            <img className='rounded-2xl' src={item.img} alt="" />
            <h1 className='font-bold'>{item.title}</h1>
         <button className='border rounded-2xl py-2 px-4 font-bold text-[.5rem] mb-5 hover:delay-85 cursor-pointer duration-700 hover:scale-108 explore-hover'>LEARN MORE</button>
        </div>
    ))}
</div>
</div>

<hr />
{/* vedHero */}
<div className='w-full bg-color '>
    <video src="https://www.activision.com/cdn/videos/game-ap-look.mp4" className='w-full object-cover bg-color' autoPlay playsInline loop></video>
</div>

<hr className='w-full  mt-5 border-gray-400' />

{/* studio */}
<div className='bg-color w-full'>

<div className=' flex flex-col gap-10'>
    <h1 className='text-center  text-white mt-15 font-bold text-[1.5rem]'>OUR STUDIOS</h1>

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:p-10 pt-5'>
        {studioImg.map((item,i)=>(

        <div key={i} className='flex items-center justify-around'>
            <img className='w-60 lg:w-50' src={item.img}/>
        </div>

        ))}
    </div>
</div>

</div>
<hr className='w-full border-gray-400 mt-8' />
{/* apply */}
<div className='bg-color w-full p-8 lg:px-15 flex flex-col gap-8 '>
    <h1 className='text-center  text-white lg:mt-15 font-bold text-[1.5rem] mt-5 '>Be the First to Apply</h1>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
{job.map((item,i)=>(
<div key={i} className='flex flex-col gap-4 bg-white rounded p-6'>
    
<div className='flex justify-between items-center '>
<h1 className='text-[.8rem] font-bold hover:text-blue-600 cursor-pointer'>{item.jobName}</h1>
<h1><CiHeart /></h1>
</div>

<div className='flex gap-2 items-center justify-between text-[.7rem]'>
<h1>{item.jobSub}</h1>
<h1>{item.jobNum}</h1>
</div>
<p>{item.jopDes}</p>
<button className='bg-black w-30 text-white font-bold p-2 text-[.7rem] hover:bg-green-700 cursor-pointer '>Apply Now</button>
    </div>
))}
</div>

</div>
<hr className='border-gray-400 w-full md:hidden' />
{/* info */}
<div className='bg-color mt-5 lg:mt-10'>
    <div className='flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-around text-white mb-2'>
        <h1 className='underline text-[1.2rem] lg:text-[.8rem]'>Cookie Settings</h1>
        <h1 className=' hover:underline cursor-pointer hover:decoration-blue-500 text-[1rem] lg:text-[.8rem] text-white' >Personal Information</h1>
    </div>
    <hr className='text-blue-800'></hr>
<div className='flex flex-col gap-10 p-10'>
    <div className='flex flex-col gap-3 text-white'>
        <h1 className='font-bold'>Equal Opportunity Employer</h1>
        <p className='text-[.8rem]'>Activision is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, gender expression, national origin, protected veteran status, or any other basis protected by applicable law, and will not be discriminated against on the basis of disability. <a href="http://" target="_blank" rel="noopener noreferrer" className='underline'>Equal Employment Opportunity Policy </a></p>
        <p  className='text-[.7rem] lg:text-[.8rem]'>While we strive to provide competitive offers to successful candidates, new hire compensation is negotiable.</p>
    </div>

<div className='flex flex-col gap-3 text-white'>
    <h1 className='font-bold'>Accommodation Request</h1>
    <p  className='text-[.8rem]'>We are committed to working with and providing reasonable assistance to individuals with physical and mental disabilities. If you are a disabled individual requiring an accommodation to apply for an open position, please email your request to <a href="" className='underline'>accommodationrequests@activisionblizzard.com.</a> General employment questions cannot be accepted or processed here. Thank you for your interest.</p>
    <p  className='text-[.7rem] lg:text-[.8rem]'>This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies. Find out more <a href="" className='underline'>here</a>.</p>
</div>
</div>

</div>

     </div>
   </div>
   </>
  )
}

export default SupportPage