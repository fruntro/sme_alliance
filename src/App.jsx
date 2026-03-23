import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeAre from './components/WhatWeAre'
import WhyWeExist from './components/WhyWeExist'
import Benefits from './components/Benefits'
import WhoItsFor from './components/WhoItsFor'
import Members from './components/Members'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14] font-sans">
      <Navbar />
      <main>
        <Hero />
        <WhatWeAre />
        <WhyWeExist />
        <Benefits />
        <WhoItsFor />
        <Members />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
