<template>
    <!-- Navigation -->
    <Navigation logo="images/logo/agency-logo-small.png"
                label="*CaptureFlow* Solutions"/>

    <!-- Content Display -->
    <router-view/>

    <!-- Footer -->
    <Footer>
        <FooterBlock :darken="false"
                     :row="true">
            <FooterColumn title="Contact Info"
                          faIcon="pi pi-envelope me-2 pe-1"
                          :description="[
                              `Serving small businesses remotely`,
                              `Book a call to scope your project`
                          ]"
                          :links="[
                              {label: `captureflowsolution@gmail.com`, href: `mailto:captureflowsolution@gmail.com`, faIcon: 'fa-regular fa-envelope'},
                          ]"
                          :displayLinksAsButtons="false"/>
        </FooterBlock>

        <FooterBlock :darken="true"
                     :row="false">
            <FooterCopyright holder="CaptureFlow Solutions"
                             url="https://captureflowsolutions.com"
                             license="All rights reserved"/>
        </FooterBlock>
    </Footer>
</template>

<script setup>
import Navigation from "/src/vue/components/nav/Navigation.vue"
import Footer from "/src/vue/components/footer/Footer.vue"
import FooterBlock from "/src/vue/components/footer/FooterBlock.vue"
import FooterCopyright from "/src/vue/components/footer/FooterCopyright.vue"
import FooterColumn from "/src/vue/components/footer/FooterColumn.vue"
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>