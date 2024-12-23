import ContactForm from '@/components/ContactForm'
import FeaturesSection from '@/components/FeaturesSection'
import StickyFooter from '@/components/Fotter'
import StickyHeader from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TeamSection from '@/components/TeamSection'
import React from 'react'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
    </div>
  )
}

export default Home