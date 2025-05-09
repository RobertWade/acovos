<template>
  <div class="rounded bg-primary--l2 flex flex-col hover:bg-primary--dark hover:text-white cursor-pointer actionCard">
    <slot name="image"></slot>
    <div class="check p-4 h-full">
      <slot></slot>
    </div>
  </div>
</template>


<style lang="scss">
.actionCard {
  p{
    @apply text-primary--dark;
  }
  &:hover {
    svg {
      path {
        fill: white !important;
      }
    }

    p,h3 {
      @apply text-white;
    }
  }
}
</style>