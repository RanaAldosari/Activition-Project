import React from 'react'
import PannerHome from './Panner-Home'
import BannerTHome from './BannerT-Home'
import Card from './Card'

import Headerpage from './Header-page'
function Homepage() {
  return (
    <>
    <div >
      <Headerpage/>
        <Card />
        <PannerHome />
        <BannerTHome/>
    </div>
    </>
  )
}

export default Homepage