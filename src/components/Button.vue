<template>
  <button @click="emitClick" :class="outline ? 'btnOutline' : 'btnMain'">
    <slot></slot>
    <p class="text-primary--dark">{{ title }}</p>
  </button>
</template>

<script lang="ts" setup>

defineProps({
  title: String,
  outline: Boolean,
});

const emit = defineEmits(['click'])

function emitClick(){
  emit('click')
}
</script>

<style lang="scss">
.btnMain {
  p{
    font-size: 16px;
  }
  padding:12px 20px 12px 15px;
  @apply
      bg-primary--l2
      text-primary--dark
      rounded-md
      flex
      items-center
      gap-3
      hover:bg-primary--dark hover:text-white;
  &:hover {
    svg {
      path {
        fill: white !important;
      }
    }
    p {
      @apply text-white;
    }
  }
}

.btnOutline {
  p{
    font-size: 16px;
  }
  padding:12px 20px 12px 15px;
  @apply
      bg-transparent
      text-primary--dark
      border-2
      border-primary--dark
      rounded-md
      flex
      items-center
      gap-3
      hover:bg-primary--dark;
  &:hover {
    svg {
      path {
        fill: white !important;
      }
    }
    p {
      @apply text-white;
    }
  }
}
</style>