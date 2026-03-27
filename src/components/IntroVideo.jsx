import { useState, useEffect, useRef, useCallback } from 'react'
import './IntroVideo.css'
import introMp4 from '../assets/media/download.mp4'

function IntroVideo({ onDismiss }) {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)
  const dismissedRef = useRef(false)
  const onDismissRef = useRef(onDismiss)
  onDismissRef.current = onDismiss

  const dismiss = useCallback(() => {
    if (dismissedRef.current) return
    dismissedRef.current = true
    // Ensure the page is scrolled back to the top so the hero is the first section shown
    window.scrollTo({ top: 0, behavior: 'auto' })
    setHidden(true)
    setTimeout(() => {
      setRemoved(true)
      if (onDismissRef.current) onDismissRef.current()
    }, 1000)
  }, [])

  useEffect(() => {
    // Reset scroll so video doesn't auto-dismiss on reload
    window.scrollTo(0, 0)

    // Hide translate widget while intro video is showing
    document.body.classList.add('gt-hide')

    // Small delay to avoid triggering from the scroll reset
    const timer = setTimeout(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) dismiss()
      }
      window.addEventListener('scroll', handleScroll)
      window.__introScrollHandler = handleScroll
    }, 100)

    return () => {
      clearTimeout(timer)
      if (window.__introScrollHandler) {
        window.removeEventListener('scroll', window.__introScrollHandler)
        delete window.__introScrollHandler
      }
      document.body.classList.remove('gt-hide')
    }
  }, [dismiss])

  if (removed) return null

  return (
    <div className={`intro-video-overlay${hidden ? ' hidden' : ''}`}>
      <video
        className="intro-video-desktop"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src={introMp4} type="video/mp4" />
      </video>

      <video
        className="intro-video-mobile"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src={introMp4} type="video/mp4" />
      </video>

      <div className="intro-video-content">
        <h1 className="intro-video-heading">
          Jouw onderneming, jouw regels, onze dekking.
        </h1>
        <p className="intro-video-description">
          Professionele zekerheid met de flexibiliteit die bij je past. Geen gedoe, geen kleine lettertjes, wel direct verzekerd.
        </p>
        <a href="https://aov.nog-gemakkelijker.nl/premium/" className="intro-video-btn">
          <span>Bereken je premie</span><span>Bereken je premie</span>
        </a>
        <div className="intro-video-trustpilot"></div>
      </div>
    </div>
  )
}

export default IntroVideo
