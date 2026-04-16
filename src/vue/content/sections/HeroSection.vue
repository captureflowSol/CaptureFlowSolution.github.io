<template>
    <!-- Heading Section -->
    <PageHeader :id="props.id"
                title="*CaptureFlow* Solutions"
                subtitle="<strong>Automated systems for your Business.</strong><br><strong>Booking, payments, reminders, and staff visibility</strong> in one setup.<br>Reduce no-shows, missed calls, and revenue leaks without adding admin stress."
                logo-url="images/logo/agency-logo.png"
                :show-button="true"
                button-icon="fa-solid fa-arrow-trend-up"
                button-label="See barbershop system"
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