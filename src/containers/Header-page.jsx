import React from 'react';

function Headerpage() {
  return (
    <>
    <div className='bg-black h-[90%]'>
    <div className="h-[90%] pt-30 p-0 relative w-full lg:h-screen lg:p-0">
{/* ved */}

<video src="https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4" className="h-[500px] absolute top-0 left-0 w-full lg:h-full object-cover z-0" autoPlay playsInline loop muted></video>

{/* content */}
  <div className="flex flex-col justify-center items-center relative lg:items-start lg:tex-left  h-full px-10 text-white">
<img src="/black-ops-6-full-logo.png" className="mt-10 lg:mt-0 pb-5 w-55 lg:w-60 lg:80 " />
<p className="text-md lg:text-lg mb-2">Forced to go rogue. Hunted from within.</p>
<p className="text-md lg:text-2xl font-bold mb-6">This is Black Ops 6.</p>
<div className="flex flex-col gap-2 lg:gap-5 lg:flex-row">
   <button className="border rounded-3xl px-5 py-2 text-sm sm:text-base btn-hover2 w-full sm:w-auto">PLAY WITH GAME PASS</button>
<button className='border rounded-3xl px-5 py-2 text-sm font-bold btn-hover w-full sm:w-40'>VISIT SITE</button>
    </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Headerpage;
