<template>
  <section class="breakout">
    <div class="max-w-[1600px] mx-auto px-3 xl:px-10">
      <Navbar class="sticky top-0 z-50" />
      <div
        class="font-NeueHaas mt-0 text-[32px] xl:text-6xl hero__wrapper lg:h-full overflow-hidden"
      >
      <div class="content1">
        <div
          class="xl:flex relative items-center hero__main_layer h-[50vh] lg:h-[80vh] lg:pb-10 overflow-hidden"
        >
          <div class="main_text1 w-full">
            <h2>HELLO I'M</h2>
            <h2 class="-mt-3 lg:mt-0">WEB DEVELOPERS</h2>
          </div>

          <video
            loop
            muted
            autoplay
            playsinline
            class="lg:w-[668px] h-auto main_video xl:absolute xl:-z-10 xl:left-1/2 xl:-translate-x-1/2"
          >
            <source src="/logo.mp4" />
          </video>
          <div
            class="main_text2 text-right w-full lg:max-w-max xl:absolute xl:right-0 pe-1 lg:pe-0"
          >
            <h2 class="main_text2__firstname">ANDIKA</h2>
            <h2 class="">SATRIO NUGROHO</h2>
          </div>
        </div>
      </div>
      <div
        class="content2 xl:absolute xl:top-0 xl:-z-10 w-full lg:h-[100vh] lg:pe-10 mt-[65px] lg:mt-0"
      >
        <div class="lg:flex items-center lg:h-full justify-between">
          <div
            class="profile__photo lg:-ms-96 w-40 h-56 lg:mt-40 shrink-0 mx-auto lg:mx-0 relative"
          >
            <!-- Multiple image layers for smooth crossfade -->
            <div class="photo-layer photo-layer-1 absolute inset-0"></div>
            <div
              class="photo-layer photo-layer-2 absolute inset-0 opacity-0"
            ></div>
            <div
              class="photo-layer photo-layer-3 absolute inset-0 opacity-0"
            ></div>
          </div>
          <div
            class="profile__desc text-6 text-[56px] max-w-[876px] -me-96 pe-8 lg:-mt-24 opacity-0 hidden lg:block"
          >
            <span class="opacity-20">
              Tidak ada yang lebih memuaskan bagi saya selain merancang
            </span>
            <span class="opacity-20"
              >antarmuka yang menarik dan fungsional, yang mampu menggugah
              emosi</span
            >
            <span class="opacity-20">
              dan memberikan pengalaman pengguna yang luar biasa
            </span>
          </div>
          <p class="text-2xl block lg:hidden mt-4 lg:mt-0">
            Tidak ada yang lebih memuaskan bagi saya selain merancang antarmuka
            yang menarik dan fungsional, yang mampu menggugah emosi dan
            memberikan pengalaman pengguna yang luar biasa
          </p>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile__photo {
  background-color: transparent;
}

.photo-layer {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.3s ease;
}

.photo-layer-1 {
  background-image: url("/profile/photo3.png");
}

.photo-layer-2 {
  background-image: url("/profile/photo2.png");
}

.photo-layer-3 {
  background-image: url("/profile/photo3.png");
}

@media (min-width: 1024px) {
  .photo-layer-1 {
    background-image: url("/profile/photo1.png");
  }
}
</style>
