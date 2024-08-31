import { useEffect, useState } from 'react'

export const Device = {
  DESKTOP: 'DESKTOP',
  TABLET: 'TABLET',
  MOBILE: 'MOBILE'
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false
  })

  useEffect(() => {
    function handleResize() {
      let device
      if (window.innerWidth < 768) {
        device = Device.MOBILE
      } else {
        device = window.innerWidth < 1366 ? Device.TABLET : Device.DESKTOP
      }
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: device === Device.MOBILE,
        isTablet: device === Device.TABLET,
        isDesktop: device === Device.DESKTOP
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
