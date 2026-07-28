import gsap from 'gsap'

export const useProjectImageAnimation = () => {
  let mm: ReturnType<typeof gsap.matchMedia> | null = null

  onMounted(() => {
    mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isDesktop, reduceMotion } = context.conditions as {
          isDesktop: boolean
          reduceMotion: boolean
        }

        if (reduceMotion) return

        const y = isDesktop ? -90 : -40

        const ctx = gsap.context(() => {
          gsap.to('.project-image', {
            y,
            scrollTrigger: {
              trigger: '.project',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })
        })

        return () => ctx.revert()
      },
    )
  })

  onUnmounted(() => {
    mm?.revert()
  })
}
