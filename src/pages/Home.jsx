import DecorativeBg from '../components/DecorativeBg'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { CareerSection } from '../components/CareerSection'
import Recommendations from '../components/Recommendations'

export const Home = () => {
  return (
    <div className='relative min-h-screen text-foreground overflow-hidden'>
      <DecorativeBg />
      <div className='relative z-10'>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <CareerSection />
          <Recommendations />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
