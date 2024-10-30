import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Create from './Create'
import WhyUs from './WhyUs'
import Founders from './Founders'
import Faq from './Faq'
import Navbar from '../../components/Navbar'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Create/>
        <WhyUs/>
        <Founders/>
        <Faq/>
    </div>
  )
}

export default HomePage