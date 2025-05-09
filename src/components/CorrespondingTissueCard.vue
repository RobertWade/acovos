<template>
    <div
        class="rounded bg-primary--l2 flex md:flex-col hover:bg-primary--dark hover:text-white cursor-pointer actionCard flex-col-reverse">
        <div class="image-wrapper">
            <slot name="image"></slot>
        </div>
        <div class="check p-4 h-full">
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.actionCard {
    margin-bottom: 20px;
    .image-wrapper{
        @apply w-full;
        max-height: 150px;
        overflow: hidden;
    }
    img {
        @apply w-full
    }

    p {
        font-size: 16px;
        line-height: 19px;
        @apply text-dark--lines;
    }

    &:hover {
        svg {
            path {
                fill: white !important;
            }
        }

        p,
        h3 {
            @apply text-white;
        }
    }
}

.check{
 max-height:75px;
}
</style>