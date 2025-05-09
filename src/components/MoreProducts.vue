<script lang="ts" setup>
const cards = [{
    title: "Matched FFPE Tissue Pairs",
    text: "Acovos offers an extensive variety of matched FFPE tissue pairs, i.e. different tissue samples from the same patient. Please contact us for detailed information on available tissue pair variants.",
    image: "matched.jpg",
}, {
    title: "Antibody-tested FFPE tissues",
    text: "Acovos provides a significant number of FFPE tissue samples pre-tested for specific antibodies. Please select from our antibody collection listed below.",
    image: "antibody.jpg",
}, {
    title: "More product information",
    text: "Read more about our collection, its range, and quality.",
    image: "more.jpg",
}]

</script>

<template>
    <div class="grid md:grid-cols-3 gap-4">
        <Card @click="$router.push('/matched-ffpe')" class="actionCard">
            <template #image>
                <img src="@/assets/images/matched.jpg" alt="" />
            </template>
            <div class="h-full flex flex-col justify-between">
                <div>
                    <h3 class=" py-4">{{ cards[0].title }}</h3>
                    <div>
                        {{ cards[0].text }}
                    </div>
                </div>
                <div class="button">
                    <div class="button__row">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.53033 0.46967C8.23744 0.176777 7.76256 0.176777 7.46967 0.46967C7.17678 0.762563 7.17678 1.23744 7.46967 1.53033L13.1893 7.25H1C0.585786 7.25 0.25 7.58579 0.25 8C0.25 8.41421 0.585786 8.75 1 8.75H13.1893L7.46967 14.4697C7.17678 14.7626 7.17678 15.2374 7.46967 15.5303C7.76256 15.8232 8.23744 15.8232 8.53033 15.5303L15.5303 8.53033C15.8232 8.23744 15.8232 7.76256 15.5303 7.46967L8.53033 0.46967Z"
                                fill="#196B73" />
                        </svg>

                        <p>See examples</p>
                    </div>
                </div>
            </div>
        </Card>
        <Card @click="$router.push('/antibody-tested-ffpe-tissues')" class="actionCard">
            <template #image>
                <img src="@/assets/images/antibody.jpg" alt="" />
            </template>
            <div class="h-full flex flex-col justify-between">
                <div>
                    <h3 class=" py-4">{{ cards[1].title }}</h3>
                    <div>
                        {{ cards[1].text }}
                    </div>
                </div>
                <div class="button">
                    <div class="button__row">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.53033 0.46967C8.23744 0.176777 7.76256 0.176777 7.46967 0.46967C7.17678 0.762563 7.17678 1.23744 7.46967 1.53033L13.1893 7.25H1C0.585786 7.25 0.25 7.58579 0.25 8C0.25 8.41421 0.585786 8.75 1 8.75H13.1893L7.46967 14.4697C7.17678 14.7626 7.17678 15.2374 7.46967 15.5303C7.76256 15.8232 8.23744 15.8232 8.53033 15.5303L15.5303 8.53033C15.8232 8.23744 15.8232 7.76256 15.5303 7.46967L8.53033 0.46967Z"
                                fill="#196B73" />
                        </svg>

                        <p>See examples</p>
                    </div>
                </div>
            </div>
        </Card>
        <Card @click="$router.push('/more')" class="actionCard">
            <template #image>
                <img src="@/assets/images/more.jpg" alt="" />
            </template>
            <div class="h-full flex flex-col justify-between">
                <div class=" p-5">
                    <h3 class="py-4">{{ cards[2].title }}</h3>
                    <div>
                        {{ cards[2].text }}
                    </div>
                </div>
                <div class="button">
                    <div class="button__row">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.53033 0.46967C8.23744 0.176777 7.76256 0.176777 7.46967 0.46967C7.17678 0.762563 7.17678 1.23744 7.46967 1.53033L13.1893 7.25H1C0.585786 7.25 0.25 7.58579 0.25 8C0.25 8.41421 0.585786 8.75 1 8.75H13.1893L7.46967 14.4697C7.17678 14.7626 7.17678 15.2374 7.46967 15.5303C7.76256 15.8232 8.23744 15.8232 8.53033 15.5303L15.5303 8.53033C15.8232 8.23744 15.8232 7.76256 15.5303 7.46967L8.53033 0.46967Z"
                                fill="#196B73" />
                        </svg>

                        <p>See examples</p>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>

<style lang="scss" scoped>
.button {
    p {
        font-size: 16px;
        
    }

    @apply flex justify-end;

    &__row {
        @apply flex items-center pt-12 pb-4;
        gap: 10px;
    }
}
</style>