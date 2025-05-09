<template>
  <div class="flex flex-col gap-4 items-center">
    <img src="@/assets/images/magnification.jpg" alt="" />
    <p class="text-small">Magnification</p>
    <div class="selector flex">
      <div class="
          bg-primary--l2
          p-2
          px-4
          hover:bg-primary--dark hover:text-white
          cursor-pointer
        " :class="button === 2 ? 'border-l border-r border-primary--dark' : null" v-for="button in 3">
        {{ button }}x
      </div>
    </div>
  </div>
</template>