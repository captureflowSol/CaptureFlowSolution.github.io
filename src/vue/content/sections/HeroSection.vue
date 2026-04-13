<template>
    <!-- Heading Section -->
    <PageHeader :id="props.id"
                title="*CaptureFlow* Solutions"
                subtitle="<strong>Websites</strong> and <strong>AI bots</strong> for web and calls.<br><strong>Design and packaging</strong> in the same system.<br><strong>Subscriptions</strong> for updates. Built for small business—and makers who refresh products often."
                logo-url="images/logo/agency-logo.png"
                :show-button="true"
                button-icon="fa-solid fa-arrow-trend-up"
                button-label="See how it works"
                button-url="#about"/>
</template>

<script setup>
import PageHeader from "/src/vue/components/layout/PageHeader.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>