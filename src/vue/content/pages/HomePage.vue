<template>
    <PageWrapper id="foxy-home-page"
                 :no-padding="true"
                 :sections="sections"/>
</template>

<script setup>
import PageWrapper from "/src/vue/components/layout/PageWrapper.vue"
import SectionInfo from "/src/models/SectionInfo.js"
import AboutSection from "/src/vue/content/sections/AboutSection.vue"
import ContactSection from "/src/vue/content/sections/ContactSection.vue"
import HeroSection from "/src/vue/content/sections/HeroSection.vue"
import PortfolioSection from "/src/vue/content/sections/PortfolioSection.vue"
import PricingSection from "/src/vue/content/sections/PricingSection.vue"
import ReviewsSection from "/src/vue/content/sections/ReviewsSection.vue"
import ServicesSection from "/src/vue/content/sections/ServicesSection.vue"

const sections = [
    new SectionInfo('hero',         HeroSection,            null,           null),
    new SectionInfo('about',        AboutSection,           'About',        'pi pi-box'),
    new SectionInfo('services',     ServicesSection,        'Services',     'pi pi-wrench'),
    new SectionInfo('pricing',      PricingSection,         'Costs',        'fa-solid fa-dollar-sign'),
    new SectionInfo('portfolio',    PortfolioSection,       'Work',         'pi pi-folder-open'),
    new SectionInfo('reviews',      ReviewsSection,         'Reviews',      'fa-regular fa-comment'),
    new SectionInfo('contact',      ContactSection,         'Contact',      'fa-regular fa-envelope')
]
</script>

<style lang="scss" scoped>
</style>