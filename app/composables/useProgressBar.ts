import gsap from 'gsap'

export const useProgressBar = () => {
  let mm: ReturnType<typeof gsap.matchMedia> | null = null

  onMounted(() => {
    mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
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

      return () => ctx.revert()
    })

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.progress-bar', { width: '100%' })
    })
  })

  onUnmounted(() => {
    mm?.revert()
  })
}
