<script setup lang="ts">
const { form, error, toggleInterest, sendMessage } = useContactForm()

const interestOptions = [
  'UX/UI Design',
  'Web Design',
  'Web Development',
  'Website Creation',
  'Landing Page',
  'Other',
]
</script>

<template>
  <section class="pt-[var(--section-py)] pb-24 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="flex flex-col w-full justify-between">
        <div class="text-headline">
          <h2>AYO MULAI</h2>
          <h2 class="text-right">BUAT</h2>
          <h2 class="text-center">BERSAMA</h2>
        </div>
        <div>
          <div class="flex gap-1 items-center mb-10 mt-2 lg:mt-0">
            <div class="text-left font-NeueHaas">Say hi</div>
            <div><Icon name="system-uicons:minus" size="2em" /></div>
            <div class="text-left font-NeueHaas text-[#6d6d6d]">
              andikasatrio159@gmail.com
            </div>
          </div>
          <div class="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-x-6">
            <div>
              <CustomLink
                label="Github"
                to="https://github.com/andsr157"
                with-arrow
              />
            </div>
            <div>
              <CustomLink
                label="Facebook"
                to="https://www.facebook.com/profile.php?id=100011086082150&mibextid=ZbWKwL"
                with-arrow
              />
            </div>
            <div>
              <CustomLink
                label="Linkedin"
                to="https://www.linkedin.com/in/andika-satrio-nugroho/"
                with-arrow
              />
            </div>
            <div>
              <CustomLink
                label="Telegram"
                to="https://t.me/andsr157"
                with-arrow
              />
            </div>
            <div>
              <CustomLink
                label="Email"
                to="mailto:andikasatrio159@gmail.com"
                with-arrow
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="p-5 lg:p-8 border-[1px] border-opacity-20 border-white w-full rounded-3xl mt-6 lg:mt-0"
      >
        <form @submit.prevent="sendMessage">
          <div v-if="error" class="mb-4 text-red-400 text-sm">
            {{ error }}
          </div>
          <div class="mb-5">
            <label for="" class="text-sm">Your Data</label>
            <div
              class="flex flex-col lg:flex-row flex-grow mt-4 gap-y-4 lg:gap-y-0 gap-x-7 text-xs lg:text-base"
            >
              <input
                v-model="form.name"
                name="name"
                type="text"
                placeholder="Name"
                class="lg:w-1/2 !bg-transparent p-5 border border-white border-opacity-20 rounded-xl"
              />
              <input
                v-model="form.email"
                name="email"
                type="email"
                placeholder="Email"
                class="lg:w-1/2 !bg-transparent p-5 border border-white border-opacity-20 rounded-xl"
              />
            </div>
          </div>

          <div class="mb-5">
            <label for="" class="text-sm">You are interested in</label>
            <div
              class="flex flex-wrap w-full mt-4 gap-x-2 gap-y-3 lg:gap-x-7 lg:gap-y-5 text-sm"
            >
              <ButtonMagnetic
                v-for="interest in interestOptions"
                :key="interest"
                :title="interest"
                :selected="form.interests.includes(interest)"
                @click="toggleInterest(interest)"
              />
            </div>
          </div>
          <div class="mb-5">
            <label for="question" class="text-sm">Your question</label>
            <textarea
              id="question"
              v-model="form.question"
              class="border-[1px] border-white border-opacity-20 p-5 mt-4 w-full bg-transparent rounded-xl text-xs lg:text-base min-h-[120px] md:min-h-[160px] resize-none"
              placeholder="Your question"
            ></textarea>
          </div>
          <div>
            <Button title="Send Message" type="submit" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
