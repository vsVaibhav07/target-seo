import React from 'react'
import RebrandHero from '../components/rebrand-solution/hero'
import Navbar from '../components/rebrand-solution/navbar'
import RebrandServices from '../components/rebrand-solution/services'

const Rebrand = () => {
  return (
    <div >
        <Navbar/>
        <RebrandHero/>
        <RebrandServices/>
    </div>
  )
}

export default Rebrand