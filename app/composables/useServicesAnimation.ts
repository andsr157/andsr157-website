import gsap from 'gsap'

export const useServicesAnimation = () => {
  let mm: ReturnType<typeof gsap.matchMedia> | null = null

  onMounted(() => {
    mm = gsap.matchMedia()

    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const service = document.querySelector('.service') as HTMLElement | null
      const distance = service ? service.scrollWidth - window.innerWidth : 2480

      const ctx = gsap.context(() => {
        gsap.to('.service', {
          x: -distance,
          scrollTrigger: {
            trigger: '.wrapper',
            start: 'top 5%',
            end: () => `+=${distance}`,
            pin: true,
            scrub: true,
            toggleActions: 'play none',
          },
        })
      })

      return () => ctx.revert()
    })
  })

  onUnmounted(() => {
    mm?.revert()
  })
}
