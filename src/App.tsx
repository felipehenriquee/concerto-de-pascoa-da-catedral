import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProgramSection from './components/ProgramSection'
import SponsorshipSection from './components/SponsorshipSection'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <SponsorshipSection />
      </main>
    </>
  )
}
