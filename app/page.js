"use client"
import React from 'react'
import Header from './components/Header/page'
import Hero from './components/Hero/page'
import Ourplan from './components/OurPlan/page'
import Health from './components/Health/page'
import MoreAbout from './components/MoreAbout/page'
import PlanDetails from './components/PlanDetails/page'
import SavingCare from './components/SavingCare/page'
import TriveCare from './components/TriveCare/page'
import Relation from './components/Relation/page'
import SmallBussines from './components/SmallBussines/page'
import Video from './components/Video/page'
import Footer from './components/Footer/page'
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