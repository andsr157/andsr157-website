import gsap from 'gsap'
import { nextTick } from 'vue'

export const useProjectImageAnimation = () => {
  let mm: ReturnType<typeof gsap.matchMedia> | null = null

  onMounted(() => {
    mm = gsap.matchMedia()

    mm.add(
      {
        isXl: '(min-width: 1280px)',
        isLg: '(min-width: 1024px) and (max-width: 1279px)',
        isMd: '(min-width: 768px) and (max-width: 1023px)',
        isMobile: '(max-width: 767px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isXl, isLg, isMd, isMobile, reduceMotion } = context.conditions as {
          isXl: boolean
          isLg: boolean
          isMd: boolean
          isMobile: boolean
          reduceMotion: boolean
        }

        if (reduceMotion) return

        let y = 0
        if (isXl) y = -90
        else if (isLg) y = -70
        else if (isMd) y = -50
        else if (isMobile) y = -30

        const contexts: ReturnType<typeof gsap.context>[] = []

        nextTick(() => {
          if (!document.querySelector('.project-image')) return

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

          contexts.push(ctx)
        })

        return () => {
          contexts.forEach((ctx) => ctx.revert())
        }
      },
    )
  })

  onUnmounted(() => {
    mm?.revert()
  })
}
