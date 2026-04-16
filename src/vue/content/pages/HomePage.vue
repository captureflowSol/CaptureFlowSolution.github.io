<template>
    <PageWrapper id="foxy-home-page"
                 :no-padding="true"
                 :sections="sections"/>
</template>

<script setup>
import PageWrapper from "/src/vue/components/layout/PageWrapper.vue"
import SectionInfo from "/src/models/SectionInfo.js"
import AboutSection from "/src/vue/content/sections/AboutSection.vue"
import HeroSection from "/src/vue/content/sections/HeroSection.vue"
import PortfolioSection from "/src/vue/content/sections/PortfolioSection.vue"
import PricingSection from "/src/vue/content/sections/PricingSection.vue"
import ReviewsSection from "/src/vue/content/sections/ReviewsSection.vue"
import ServicesSection from "/src/vue/content/sections/ServicesSection.vue"

const sections = [
    new SectionInfo('hero',         HeroSection,            null,           null),
    new SectionInfo('about',        AboutSection,           'Barbershops',  'pi pi-box'),
    new SectionInfo('services',     ServicesSection,        'Systems',      'pi pi-wrench'),
    new SectionInfo('pricing',      PricingSection,         'Pricing',      'fa-solid fa-dollar-sign'),
    new SectionInfo('portfolio',    PortfolioSection,       'Outcomes',     'pi pi-folder-open'),
    new SectionInfo('reviews',      ReviewsSection,         'Reviews',      'fa-regular fa-comment'),
]
</script>

<style lang="scss" scoped>
</style>