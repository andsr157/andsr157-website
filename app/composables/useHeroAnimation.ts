import gsap from "gsap";

export const useHeroAnimation = () => {
  let mm: ReturnType<typeof gsap.matchMedia> | null = null;

  onMounted(() => {
    mm = gsap.matchMedia();

    mm.add(
      {
        isXl: "(min-width: 1280px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isXl, reduceMotion } = context.conditions as {
          isXl: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion || !isXl) return;

        const ctx = gsap.context(() => {
          gsap.set(".photo-layer-1", { opacity: 1 });
          gsap.set([".photo-layer-2", ".photo-layer-3"], { opacity: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".hero__wrapper",
              start: "top top",
              end: "+=" + 6000,
              scrub: true,
              pin: true,
              markers: false,
            },
          });

          tl.to(".main_text1", {
            y: -80,
            fontSize: 120,
            duration: 2,
          });

          tl.to(
            ".main_text2",
            {
              y: 160,
              fontSize: 120,
              duration: 2,
            },
            "<",
          );

          tl.to(
            ".main_text2__firstname",
            {
              x: -750,
              duration: 2,
            },
            "<",
          );

          tl.to(
            ".main_video",
            {
              x: 520,
              y: -50,
              width: 500,
              duration: 2,
            },
            "<",
          );

          tl.to(
            ".profile__photo",
            {
              marginLeft: 0,
              duration: 2,
            },
            "<",
          );

          tl.to(".content1", {
            x: "100vw",
            duration: 2,
          });

          tl.to(
            ".profile__photo",
            {
              width: 376,
              height: 520,
              marginTop: -72,
            },
            "<50%",
          );

          tl.to(
            ".profile__desc",
            {
              marginRight: 0,
              opacity: 1,
              ease: "power1.inOut",
            },
            "<10%",
          );

          const texts = gsap.utils.toArray(
            ".profile__desc span",
          ) as HTMLElement[];
          const photoLayers = [".photo-layer-2", ".photo-layer-3"];

          texts.forEach((text, i) => {
            tl.to(
              text,
              {
                opacity: 1,
                duration: 1,
                ease: "power2.in",
              },
              "<30%",
            );

            if (photoLayers[i]) {
              tl.to(
                [".photo-layer-1", ".photo-layer-2", ".photo-layer-3"],
                {
                  opacity: 0,
                  duration: 0.3,
                  ease: "power1.inOut",
                },
                "<90%",
              );

              tl.to(
                photoLayers[i],
                {
                  opacity: 1,
                  duration: 0.3,
                  ease: "power1.inOut",
                },
                "<0.1",
              );
            }
          });
        });

        return () => ctx.revert();
      },
    );

    mm.add(
      {
        isBelowXl: "(max-width: 1279px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isBelowXl, reduceMotion } = context.conditions as {
          isBelowXl: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion || !isBelowXl) return;

        const ctx = gsap.context(() => {
          gsap.set(".photo-layer-1", { opacity: 1 });
          gsap.set([".photo-layer-2", ".photo-layer-3"], { opacity: 0 });

          gsap.from([".main_text1 h2", ".main_video", ".main_text2 h2"], {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            delay: 0.2,
          });

          gsap.from(".profile__photo", {
            scale: 0.92,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".profile__photo",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });

          const isLg = window.innerWidth >= 1024;
          const descSelector = isLg
            ? ".profile__desc span"
            : ".profile__desc-mobile span";
          const triggerSelector = isLg
            ? ".profile__desc"
            : ".profile__desc-mobile";
          const texts = gsap.utils.toArray(descSelector) as HTMLElement[];
          const photoLayers = [".photo-layer-2", ".photo-layer-3"];

          if (texts.length) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: triggerSelector,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            });

            texts.forEach((text, i) => {
              tl.to(
                text,
                {
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.in",
                },
                i === 0 ? undefined : "<30%",
              );

              if (photoLayers[i]) {
                tl.to(
                  [".photo-layer-1", ".photo-layer-2", ".photo-layer-3"],
                  {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power1.inOut",
                  },
                  "<90%",
                );

                tl.to(
                  photoLayers[i],
                  {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.inOut",
                  },
                  "<0.1",
                );
              }
            });
          }
        });

        return () => ctx.revert();
      },
    );
  });

  onUnmounted(() => {
    mm?.revert();
  });
};
