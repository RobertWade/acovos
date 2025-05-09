<script lang="ts" setup>
import SplitImage from '~/components/SplitImage.vue';
onMounted(() => {
    window.scrollTo(0, 0);
})

const tested_blocks = ['Actin', 'BCL2', 'CD3', 'CD20', 'CD30', 'CDD117(c-kit)', 'CK5/5', 'CK7', 'CK8', 'CK14', 'CK17', 'CK18', 'Actin', 'BCL2', 'CD3', 'CD20', 'CD30', 'CDD117(c-kit)', 'CK5/5', 'CK7', 'CK8', 'CK14', 'CK17', 'CK18']
</script>

<template>
    <Section smallMargin class="flex flex-col pb-0 mb-0">
        <div>
            <Headline class="mb-16" title="Matched FFPE tissue pairs" />
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <p>acovos offers an extensive variety of matched FFPE tissue pairs, i.e. different tissue samples
                        from the same patient. Please contact us for detailed information on available tissue pair
                        variants.</p>
                </div>
                <div>
                    <ul>
                        <li> Primary tumor / Normal tissue </li>
                        <li> Primary tumor / Distant metastasis</li>
                        <li> Primary tumor / Relapse </li>
                        <li> Primary tumor / Lymph node metastasis </li>
                        <li> Pre treatment / Post treatment </li>
                    </ul>
                </div>
            </div>
        </div>
    </Section>
    <Section smallMargin>
        <h2>Primary tumor / Distant metastasis</h2>
        <p class="mb-6">HER2 positive breast carcinoma and bone metastasis</p>
        <div class="flex flex-col">
            <div class="img-wrapper">
                <div class="img-container">
                    <img src="@/assets/images/ffpe/primary_tumor_1.jpg" alt="" />
                    <p>Primary tumor</p>
                </div>
                <div class="divider"></div>
                <div class="img-container">
                    <img src="@/assets/images/ffpe/distant_metastasis.jpg" alt="" />
                    <p class="pl-4">Distant metastasis</p>
                </div>
            </div>
        </div>
    </Section>
    <Section smallMargin>
        <h2>Primary tumor / Distant metastasis</h2>
        <p class="mb-6">Bladder adenocarcinoma and normal bladder tissue</p>
        <div class="flex flex-col">
            <div class="img-wrapper">
                <div class="img-container">
                    <img src="@/assets/images/ffpe/primary_tumor_1.jpg" alt="" />
                    <p>Primary tumor</p>
                </div>
                <div class="divider"></div>
                <div class="img-container">
                    <img src="@/assets/images/ffpe/normal_tissue.jpg" alt="" />
                    <p class="pl-4">Normal tissue</p>
                </div>
            </div>
        </div>
    </Section>
    <Section smallMargin>
        <h2>Primary tumor / Relapse</h2>
        <p class="mb-6">Mamma carcinoma</p>
        <div class="flex flex-col">
            <div class="img-wrapper">
                <div class="img-container">
                    <img src="@/assets/images/ffpe/primary_tumor_3.jpg" alt="" />
                    <p>Primary tumor</p>
                </div>
                <div class="divider"></div>
                <div class="img-container">
                    <img src="@/assets/images/ffpe/relapse.jpg" alt="" />
                    <p class="pl-4">Relapse</p>
                </div>
            </div>
        </div>
    </Section>
    <Section smallMargin>
        <h2>Primary tumor / Lymph node metastasis</h2>
        <p class="mb-6">Lung adenocarcinoma and lymph node metastasis</p>
        <div class="flex flex-col">
            <div class="img-wrapper">
                <div class="img-container">
                    <img src="@/assets/images/ffpe/primary_tumor_4.jpg" alt="" />
                    <p>Primary tumor</p>
                </div>
                <div class="divider"></div>
                <div class="img-container">
                    <img src="@/assets/images/ffpe/lymph_node.jpg" alt="" />
                    <p class="pl-4">Lymph node metastasis</p>
                </div>
            </div>
        </div>
    </Section>
    <Section >
        <h2>Pre treatment / Post treatment</h2>
        <p class="mb-6">Pleura mesothelioma pre/post chemotherapy</p>
        <div class="flex flex-col">
            <div class="img-wrapper">
                <div class="img-container">
                    <img src="@/assets/images/ffpe/pre.jpg" alt="" />
                    <p>Pre treatment</p>
                </div>
                <div class="divider"></div>
                <div class="img-container">
                    <img src="@/assets/images/ffpe/post_treatment.jpg" alt="" />
                    <p class="pl-4">Post treatment</p>
                </div>
            </div>
        </div>
    </Section>
</template>


<style lang="scss" scoped>
p {
    font-weight: 400;
}

li:before {
    content: "→";
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