<script lang="ts" setup>
onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<template>
    <Section class="grid gap-6">
        <Headline title="Payment/shipment conditions" />

        <h3>1. Datenschutz auf einen Blick Allgemeine Hinweise</h3> Terms and Conditions of delivery

        Please provide the following information when ordering: <br>
        <br>
        - Name and Email address of person placing order <br>
        - Shipping address <br>
        - Invoice address <br>
        - Purchase order number <br>
        - VAT Identification number where applicable <br>
        - Product catalogue number and quantity <br>
        <br>
        All orders are subject to our Terms and Conditions. <br>

        <h3>Order confirmation</h3>

        Customer will receive an immediate purchase order confirmation for a placed order.

        <h3>Payment options</h3>
        <br>
        - Credit Card <br>
        - Invoice / Purchase Order <br>

        Payment Instructions will appear on the invoice.

        <h3>Shipping</h3>

        Orders from EC countries and the United Kingdom are subject to a delivery charge of 20 EUR including usual <br>
        packaging. Orders from Switzerland are subject to a delivery charge of 50 CHF including usual packaging. <br>
        <br>
        Delivery terms for orders from the United States shall be FOB acovos shipping point, freight will be added to
        the
        <br>
        invoice. Title and risk of loss shall pass to customer upon delivery to the carrier. <br>
        <br>
        For other territories, please contact the Customer Support. <br>
        <br>
        VAT as well as any other taxes shall be borne by the buyer. <br>

        <h3>Returns</h3>

        Products may not be returned without prior authorization by the acovos Customer Support.
    </Section>

</template>

<style scoped>
h3 {
    @apply text-lg font-semibold;
}
</style>

<route lang="yaml">
meta:
  layout: subpage
</route>