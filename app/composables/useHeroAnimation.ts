import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useHeroAnimation = (larger: Ref<boolean>) => {
  onMounted(() => {
    if (!larger.value) return

    const scrollOptions = {
      trigger: '.hero__wrapper',
      start: 'top top',
      end: '+=' + 6000,
      scrub: true,
      pin: true,
      markers: false,
    }

    const tl = gsap.timeline({ scrollTrigger: scrollOptions })

    gsap.set('.photo-layer-1', { opacity: 1 })
    gsap.set(['.photo-layer-2', '.photo-layer-3'], { opacity: 0 })

    tl.to('.main_text1', {
      transform: 'translate3d(0px, -80px, 0px)',
      fontSize: 120,
      duration: 2,
    })

    tl.to(
      '.main_text2',
      {
        transform: 'translate3d(0px, 160px, 0px)',
        fontSize: 120,
        duration: 2,
      },
      '<',
    )

    tl.to(
      '.main_text2__firstname',
      {
        x: -800,
        duration: 2,
      },
      '<',
    )

    tl.to(
      '.main_video',
      {
        transform: 'translate3d(200px, -50px, 0px)',
        width: 500,
        fontSize: 120,
        duration: 2,
      },
      '<',
    )

    tl.to(
      '.profile__photo',
      {
        marginLeft: 0,
        duration: 2,
      },
      '<',
    )

    tl.to('.content1', {
      transform: 'translate(100vw, 0px)',
      duration: 2,
    })

    tl.to(
      '.profile__photo',
      {
        width: 376,
        height: 520,
        marginTop: -72,
      },
      '<50%',
    )

    tl.to(
      '.profile__desc',
      {
        marginRight: 0,
        opacity: 1,
        ease: 'power1.inOut',
      },
      '<10%',
    )

    const texts = gsap.utils.toArray('.profile__desc span') as HTMLElement[]
    const photoLayers = ['.photo-layer-2', '.photo-layer-3']

    texts.forEach((text, i) => {
      tl.to(
        text,
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.in',
        },
        '<30%',
      )

      if (photoLayers[i]) {
        tl.to(
          ['.photo-layer-1', '.photo-layer-2', '.photo-layer-3'],
          {
            opacity: 0,
            duration: 0.3,
            ease: 'power1.inOut',
          },
          '<90%',
        )

        tl.to(
          photoLayers[i],
          {
            opacity: 1,
            duration: 0.3,
            ease: 'power1.inOut',
          },
          '<0.1',
        )
      }
    })
  })
}
