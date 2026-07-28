import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useServicesAnimation = () => {
  onMounted(() => {
    gsap.to('.service', {
      x: -2480,
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top 5%',
        end: '+=' + 2480,
        pin: true,
        scrub: true,
        toggleActions: 'play none',
      },
    })
  })
}
