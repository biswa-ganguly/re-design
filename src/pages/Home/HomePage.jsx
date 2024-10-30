import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Create from './Create'
import WhyUs from './WhyUs'
import Founders from './Founders'
import Faq from './Faq'
import Navbar from '../../components/Navbar'
import Separator from '../../components/Separator'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div>
            <Separator/>
        </div>
        <AboutUs/>
        <Create/>
        <WhyUs/>
        <Founders/>
        <Faq/>
    </div>
  )
}

export default HomePage