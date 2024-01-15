<template>
  <div
    :class="backgroundcolor"
    class="flex h-[70px] w-[70px] items-center justify-center rounded-full p-3 text-center leading-[20px] md:h-24 md:w-24"
  >
    <div>
      <h3 class="text-[13px] md:text-[20px]">{{ value }}</h3>
      <h5 class="text-[13px] md:pt-2 md:text-[16px]">{{ text }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  backgroundcolor: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
