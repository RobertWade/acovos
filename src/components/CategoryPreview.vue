<script lang="ts" setup>
const categories = ['Normal tissue', 'Tumor tissue', 'Inflammatory tissue', 'Degenerative tissue']
</script>

<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card @click="$router.push(`/products?category=${categories[0]}`)" class="cursor-pointer">
            <template #image>
                <img src="@/assets/images/normal_tissue.jpg" alt="" />
            </template>
            <p>{{ categories[0] }}</p>
        </Card>
        <Card @click="$router.push(`/products?category=${categories[1]}`)" class="cursor-pointer">
            <template #image>
                <img src="@/assets/images/tumor_tissue.jpg" alt="" />
            </template>
            <p>{{ categories[1] }}</p>
        </Card>
        <Card @click="$router.push(`/products?category=${categories[2]}`)" class="cursor-pointer">
            <template #image>
                <img src="@/assets/images/inflammatory_tissue.jpg" alt="" />
            </template>
            <p>{{ categories[2] }}</p>
        </Card>
        <Card @click="$router.push(`/products?category=${categories[3]}`)" class="cursor-pointer">
            <template #image>
                <img src="@/assets/images/degenerative_tissue.jpg" alt="" />
            </template>
            <p>{{ categories[3] }}</p>
        </Card>
        <div class="flex"></div>
    </div>
</template>

<style scoped>
p{
    font-size: 16px;
    padding-bottom: 20px;
}
</style>