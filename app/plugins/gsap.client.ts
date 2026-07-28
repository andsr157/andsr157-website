import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export default defineNuxtPlugin(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
})
