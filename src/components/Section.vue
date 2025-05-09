<script lang="ts" setup>
defineProps({ small: Boolean, large:Boolean, noMargin:Boolean, smallMargin:Boolean })
</script>

<template>
    <section :class="[small ? 'small' : '',large ? 'large' : '', noMargin ? 'noMargin' : '', smallMargin?'smallMargin':'']">
        <slot></slot>
    </section>
</template>

<style lang="scss" scoped>

section {
    margin-bottom: 150px;
    @apply mx-auto p-4 xl:p-0;
    width: 1240px;
    max-width: 100%;
}

.noMargin {
    @apply mb-0 md:mb-32;
}

.small {
    width: 1030px;
    @apply mb-24;
     @media (max-width: 744px) {
      width:436px;
    }
}

.smallMargin{
    margin-bottom: 70px;
}

.large{
    @apply p-0;
}
</style>