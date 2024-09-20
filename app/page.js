"use client"
import React from 'react'
import Header from './components/Header/page.jsx'
import Hero from './components/Hero/page.jsx'
import Ourplan from './components/OurPlan/page.jsx'
import Health from './components/Health/page.jsx'
import MoreAbout from './components/MoreAbout/page.jsx'
import PlanDetails from './components/PlanDetails/page.jsx'
import SavingCare from './components/SavingCare/page.jsx'
import TriveCare from './components/TriveCare/page.jsx'
import Relation from './components/Relation/page.jsx'
import SmallBussines from './components/SmallBussines/page.jsx'
import Video from './components/Video/page.jsx'
import Footer from './components/Footer/page.jsx'
const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Ourplan />
      <Health />
      <Relation />
      <MoreAbout />
      <PlanDetails />
      <TriveCare />
      <SavingCare />
      <SmallBussines />
      <Video />
      <MoreAbout />
      <Footer />
    </div>
  )
}

export default page