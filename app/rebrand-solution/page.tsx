import React from 'react'
import RebrandHero from '../components/rebrand-solution/hero'
import Navbar from '../components/rebrand-solution/navbar'
import RebrandServices from '../components/rebrand-solution/services'
import BrandService from '../components/rebrand-solution/brandServices'

const Rebrand = () => {
  return (
    <div >
        {/* <Navbar/> */}
        <RebrandHero/>
        <RebrandServices/>
        <BrandService/>
        <div className='bg-blue-400 h-screen' ></div>
    </div>
  )
}

export default Rebrand