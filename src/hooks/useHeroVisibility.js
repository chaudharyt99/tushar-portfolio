import { useEffect, useState } from 'react'

export const useHeroVisibility = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    const heroSection = document.getElementById('hero')

    if (!heroSection) {
      const fallbackScrollHandler = () => {
        setIsHeroVisible(window.scrollY < window.innerHeight * 0.6)
      }
      fallbackScrollHandler()

      window.addEventListener('scroll', fallbackScrollHandler)
      return () => window.removeEventListener('scroll', fallbackScrollHandler)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
      },
      {
        threshold: 0.4
      }
    )
    observer.observe(heroSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  return isHeroVisible
}
