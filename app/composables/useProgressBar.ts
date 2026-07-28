import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useProgressBar = () => {
  onMounted(() => {
    gsap.to('.progress-bar', {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '#main-layer',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play none',
      },
    })
  })
}
