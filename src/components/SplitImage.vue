<template>
    <div class="flex flex-col">
        <h2>Lung adenocarcinoma and lymph node metastasis</h2>
        <div class="img-wrapper">
            <div class="img-container">
                <img src="@/assets/images/home/primary_tumor.jpg" alt="" />
                <p>Primary tumor</p>
            </div>
            <div class="divider"></div>
            <div class="img-container">
                <img src="@/assets/images/home/lymph_node_metastasis.jpg" alt="" />
                <p class="pl-4">Lymph node metastasis</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img-wrapper {
    margin-top:15px;
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