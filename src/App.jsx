import { useState } from 'react'
import { SechpointGradDefs } from './components/Logo/Logo'
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import TrustBar from './components/TrustBar/TrustBar'
import SectionIntro from './components/Features/SectionIntro'
import Features from './components/Features/Features'
import Quote from './components/Quote/Quote'
import DevCTA from './components/DevCTA/DevCTA'
import Compliance from './components/Compliance/Compliance'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'

export default function App() {
  const [active, setActive] = useState('fin')
  return (
    <div>
      <SechpointGradDefs />
      <AnnouncementBar />
      <Nav />
      <Hero />
      <TrustBar />
      <SectionIntro active={active} setActive={setActive} />
      <Features active={active} />
      <Quote />
      <DevCTA />
      <Compliance />
      <FinalCTA />
      <Footer />
    </div>
  )
}
