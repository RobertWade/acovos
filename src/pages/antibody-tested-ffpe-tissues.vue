<script lang="ts" setup>
onMounted(() => {
    window.scrollTo(0, 0);
})

const tested_blocks = ['Actin', 'BCL2', 'CD3', 'CD20', 'CD30', 'CDD117(c-kit)', 'CK5/5', 'CK7', 'CK8', 'CK14', 'CK17', 'CK18', 'Actin', 'BCL2', 'CD3', 'CD20', 'CD30', 'CDD117(c-kit)', 'CK5/5', 'CK7', 'CK8', 'CK14', 'CK17', 'CK18']
</script>

<template>
    <Section smallMargin class="flex flex-col pb-0 mb-0">
        <div>
            <Headline class="mb-16" title="Antibody-tested FFPE tissues" />
            <p class="max-w-sm">acovos provides a significant number of FFPE tissue samples pre-tested for specific
                antibodies. Please
                select from our antibody collection listed below.</p>
        </div>
    </Section>
    <Section smallMargin>
        <div class="flex flex-col">
            <p class="block md:hidden ">CD20 protein expression, colorectal tumor</p>
            <div class="img-wrapper">
                <div class="img-container">
                    <p class="hidden md:block ">CD20 protein expression, colorectal tumor</p>
                    <img src="@/assets/images/ffpe/single_staining.jpg" alt="" />
                    <p>Single staining</p>
                </div>
                <div class="divider"></div>
                <div class="img-container">
                    <p class="hidden md:block pl-4">CD3 and CD8 protein expression, colorectal tumor</p>
                    <img src="@/assets/images/ffpe/double.jpg" alt="" />
                    <p class="pl-4">Double staining</p>
                </div>
            </div>
        </div>
    </Section>
    <Section>
        <p class="mb-5">Tissue blocks tested for</p>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div class="border-t border-dark--lines pt-2 pb-4" v-for="block in tested_blocks">
                {{ block }}
            </div>
        </div>
    </Section>
</template>


<style lang="scss" scoped>
h2 {
    @apply text-xl mb-6;
}

li:before {
    content: "›";
    padding-right: 5px;
}

li {
    padding-left: 1em;
    text-indent: -1em;
}

Section {
    @apply py-8 font-extralight;
}

.img-wrapper {
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
}

.img-container {
    display: flex;
    flex-direction: column;

    img {
        margin-bottom: 16px;
        width: 100%;
        overflow: hidden;
    }
}

.divider {
    width: 1px;
    background: #323B3E;
    height: 100%;
}
</style>

<route lang="yaml">
meta:
  layout: subpage
</route>