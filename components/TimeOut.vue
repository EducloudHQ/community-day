<template>
  <div :class="backgroundcolor" class="time-out">
    <div>
      <h3 class="time-out1">{{ value }}</h3>
      <h5 class="time-out2">{{ text }}</h5>
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
