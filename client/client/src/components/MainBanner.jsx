import React from 'react'
import {assets} from '../assets/assets'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block'/>
      {/* using it for phone like small screen so md is hidde  */}
      <img src={assets.main_banner_bg_sm} alt="banner" className='w-full md:hidden'/> 
    </div>
  )
}

export default MainBanner
 