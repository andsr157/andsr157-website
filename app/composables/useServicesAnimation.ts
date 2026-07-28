import gsap from 'gsap'

export const useServicesAnimation = () => {
  let mm: ReturnType<typeof gsap.matchMedia> | null = null

  onMounted(() => {
    mm = gsap.matchMedia()

    mm.add(
      {
        isLg: '(min-width: 1024px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isLg, reduceMotion } = context.conditions as {
          isLg: boolean
          reduceMotion: boolean
        }

        if (reduceMotion || !isLg) return

        const ctx = gsap.context(() => {
          const service = document.querySelector('.service') as HTMLElement | null
          const distance = service ? service.scrollWidth - window.innerWidth : 2480

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
      },
    )

    mm.add(
      {
        isBelowLg: '(max-width: 1023px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isBelowLg, reduceMotion } = context.conditions as {
          isBelowLg: boolean
          reduceMotion: boolean
        }

        if (reduceMotion || !isBelowLg) return

        const ctx = gsap.context(() => {
          gsap.from('.service > div:first-child', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.service',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          })

          gsap.from('.services-card', {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.service',
              start: 'top 75%',
              toggleActions: 'play none none reverse',
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
