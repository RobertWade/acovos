<script lang="ts" setup>
const magnification = ref(0)

const props = defineProps({ images: Object });

import { useMainStore } from "@/stores/index";

const { state, actions } = useMainStore();

const magnifications = ['0', '20', '40']

const currentMagnification = ref(0)

</script>

<template>
  <div @keydown.esc="actions.closeFullscreen()" id="magnification" class=" bg-primary--verydark text-white p-2 grid">
    <div class="flex justify-between items-center p-2">
      <div class="flex items-center gap-4">
        <div>Magnification:</div>
        <div class="flex rounded-l-md">
          <div class="lighten p-4" @click="currentMagnification = i"
            :class="i === 1 ? 'border-l border-r border-white' : null, i === 0 ? 'rounded-l' : null, i === magnifications.length - 1 ? 'rounded-r' : null, i === currentMagnification ? 'bg-dark--lines' : 'bg-dark--light'"
            v-for="(number, i) in magnifications">{{ number }}x</div>
        </div>
      </div>
      <div v-if="state.isFullScreen" @click="actions.closeFullscreen()"
        class="bg-dark--lines lighten hidden md:flex gap-4 cursor-pointer rounded-md p-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L12 10.9393L6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0607L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53033Z"
            fill="#DEF2F4" />
        </svg>

        <div>Close </div>
      </div>
      <div v-else @click="actions.openFullscreen('magnification')"
        class="bg-dark--lines lighten hidden md:flex gap-4 cursor-pointer rounded-md p-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M15 2.25C14.5858 2.25 14.25 2.58579 14.25 3C14.25 3.41421 14.5858 3.75 15 3.75H19.1893L13.4697 9.46967C13.1768 9.76256 13.1768 10.2374 13.4697 10.5303C13.7626 10.8232 14.2374 10.8232 14.5303 10.5303L20.25 4.81066V9C20.25 9.41421 20.5858 9.75 21 9.75C21.4142 9.75 21.75 9.41421 21.75 9V3C21.75 2.58579 21.4142 2.25 21 2.25H15ZM3.75 15C3.75 14.5858 3.41421 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V21C2.25 21.4142 2.58579 21.75 3 21.75H9C9.41421 21.75 9.75 21.4142 9.75 21C9.75 20.5858 9.41421 20.25 9 20.25H4.81066L10.5303 14.5303C10.8232 14.2374 10.8232 13.7626 10.5303 13.4697C10.2374 13.1768 9.76256 13.1768 9.46967 13.4697L3.75 19.1893V15Z"
            fill="#DEF2F4" />
        </svg>
        <div>Full</div>
      </div>
    </div>

    <img class="w-full" :src="'https://acovos-strapi.mieli.digital' + props.images[currentMagnification]" alt="" />
  </div>
</template>

<style lang="scss" scoped>
#magnification{
  filter: drop-shadow(0px 76px 81px rgba(0, 0, 0, 0.06)) drop-shadow(0px 38.0371px 40.5396px rgba(0, 0, 0, 0.04562)) drop-shadow(0px 22.9118px 24.4191px rgba(0, 0, 0, 0.0390953)) drop-shadow(0px 14.6831px 15.6491px rgba(0, 0, 0, 0.0342537)) drop-shadow(0px 9.51638px 10.1425px rgba(0, 0, 0, 0.03)) drop-shadow(0px 5.99045px 6.38456px rgba(0, 0, 0, 0.0257463)) drop-shadow(0px 3.44189px 3.66833px rgba(0, 0, 0, 0.0209047)) drop-shadow(0px 1.51486px 1.61453px rgba(0, 0, 0, 0.01438));
  @apply mb-12;
}
.lighten {
  cursor: pointer;

  &:hover {
    background: lighten(#687a80, 10%);
  }
}
</style>