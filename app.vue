<template>
  <div>
    <OgImageScreenshot />

    <div
      class="flex h-screen justify-center overflow-y-hidden bg-[url('/community-day.png?url')] bg-cover bg-no-repeat px-5 max-md:pt-[35%] md:items-center"
    >
      <div class="h-fit w-full max-w-md overflow-y-hidden font-bold text-white">
        <div class="flex justify-center">
          <NuxtImg class="mb-2 h-[50px]" src="/aws-logo.png" height="40" />
        </div>

        <h1 class="font text-center text-[30px] max-md:pt-3.5 md:text-[50px]">
          COMMUNITY DAY
        </h1>
        <div class="relative mx-8 max-w-lg md:mx-5">
          <div class="absolute inset-x-0 top-5 h-[2px] bg-white"></div>
          <div
            class="absolute inset-x-0 flex justify-center text-center text-[#f28a03] md:-top-1"
          >
            <div class="w-fit bg-[#222f3e] px-5 py-2 md:px-10 md:py-2.5">
              <h2 class="text-[18px] md:text-[20px]">CAMEROON</h2>
            </div>
          </div>
        </div>
        <h3 class="mt-12 text-center text-[20px] md:text-[25px]">
          In-person Edition 2024
        </h3>

        <div class="flex justify-center py-8 md:py-12">
          <div class="flex gap-3 md:gap-4">
            <TimeOut backgroundcolor="bg-[#9933cc]" :value="days" text="Days" />
            <TimeOut
              backgroundcolor="bg-[#e33205]"
              :value="hours"
              text="Hours"
            />
            <TimeOut
              backgroundcolor="bg-[#00a3db]"
              :value="minutes"
              text="Minutes"
            />
            <TimeOut
              backgroundcolor="bg-[#f28a03]"
              :value="seconds"
              text="Seconds"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOgImage({
  url: "/community-day-cameroon.png?url",
  width: 1200,
  height: 630,
  alt: "AWS COMMUNITY DAY CAMEROON",
});

useSeoMeta({
  ogImage: "/community-day-cameroon.png?url",
  twitterTitle: "AWS Community Day Cameroon",
  twitterDescription: "AWS Community Day Cameroon",
  twitterImage: "/community-day-cameroon.png?url",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});

import TimeOut from "./components/TimeOut.vue";
const countDownDate = new Date("Apr 16, 2024 00:00:00").getTime();
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
</script>
