import IntroVideo from './components/IntroVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SmartGuide from './components/SmartGuide'
import Testimonials from './components/Testimonials'
import Features from './components/Features'
import Professions from './components/Professions'
import HelpSection from './components/HelpSection'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

function App() {
  // Start with intro video visible on every load; hide it after user scrolls
  const [videoVisible, setVideoVisible] = useState(true)

  // Prevent browser scroll restoration so intro always starts at top on refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      const { scrollRestoration } = window.history
      window.history.scrollRestoration = 'manual'
      return () => {
        window.history.scrollRestoration = scrollRestoration
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar transparent={videoVisible} />
      {videoVisible && (
        <IntroVideo onDismiss={() => setVideoVisible(false)} />
      )}
      <div className={`hero-shell${videoVisible ? ' hero-shell--hidden' : ''}`}>
        <Hero animateIn={!videoVisible} />
      </div>
      <SmartGuide />
      <Testimonials />
      <Features />
      <Professions />
      <HelpSection />
      <Blog />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
