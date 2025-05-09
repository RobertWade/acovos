<script lang="ts" setup>
onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<template>
    <Section smallMargin class="flex flex-col pb-0 mb-0">
        <Headline class="mb-16" title="More product information" />
        <h2>Substantial FFPE tissue collection of more than 1 Million samples including</h2>
        <ul>
            <li> whole range of tumor, inflammatory and degenerative entities </li>
            <li> normal tissue of all organs </li>
            <li> various combinations of matched pairs </li>
        </ul>
    </Section>
    <Section smallMargin>
        <h2>Excellent FFPE tissue quality</h2>
        <div class="grid grid-cols-2 gap-8">
            <div>
                <img class="w-full" src="@/assets/images/more_full.jpg" alt="">
            </div>
            <div>
                <ul>
                    <li> whole range of tumor, inflammatory and degenerative entities </li>
                    <li> normal tissue of all organs </li>
                    <li> various combinations of matched pairs </li>
                </ul>
            </div>
        </div>
    </Section>
    <Section smallMargin>
        <h2>Preservation of native tissue protein, DNA and RNA molecules</h2>
        <div class="">

            <ul class="max-w-md">
                <li> Extra short ischemic phase (&lt; 5 min) prior to formalin fixation prevents hypoxia-triggered
                    apoptotic degradation and/or modification of tissue molecules</li>
                <li> Standardized formalin fixation for 16 to 24 hrs using buffered 4 vol% formaldehyde </li>
            </ul>

        </div>
    </Section>
    <Section>
        <h2>Suitable for target validation by</h2>
        <div class="grid gap-8">

            <div>
                <ul class="max-w-md">
                    <li> RNA in-situ hybridization:</li>
                </ul>
                <div class="flex flex-col">
                    <div class="img-wrapper">
                        <div class="img-container">
                            <img src="@/assets/images/more_products/rna_1.jpg" alt="" />
                        </div>
                        <div class="divider"></div>
                        <div class="img-container">
                            <img src="@/assets/images/more_products/rna_2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul class="max-w-md">
                    <li> Immunohistochemical staining:</li>
                </ul>
                <div class="flex flex-col">
                    <div class="img-wrapper">
                        <div class="img-container">
                            <img src="@/assets/images/more_products/immun_1.jpg" alt="" />
                        </div>
                        <div class="divider"></div>
                        <div class="img-container">
                            <img src="@/assets/images/more_products/immun_2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>


<style lang="scss" scoped>
h2 {
    @apply mb-6;
}

li:before {
    content: "›";
    padding-right: 5px;
}

li {
    font-weight: 400;
    padding-left: 1em;
    text-indent: -1em;
}

Section {
    @apply py-8;
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