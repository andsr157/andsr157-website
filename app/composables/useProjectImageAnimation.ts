import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useProjectImageAnimation = () => {
  onMounted(() => {
    gsap.to('.project-image', {
      y: -90,
      scrollTrigger: {
        trigger: '.project',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
  })
}
