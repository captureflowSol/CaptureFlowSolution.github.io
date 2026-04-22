<template>
    <!-- About Section -->
    <PageSection variant="default"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="*About* CaptureFlow"
                           subtitle="A digital operating system for modern local businesses."/>

        <!-- Content -->
        <PageSectionContent>
            <!-- About Template -->
            <ArticleInfoBlock image="images/logo/agency-logo.png"
                              :paragraphs="[
                                  `<b>CaptureFlow Solutions</b> helps local businesses run with less chaos and more control.`,
                                  `Most local businesses lose revenue from <b>missed calls, no-shows, delayed replies, and weak booking flow</b>—not from the quality of what you sell.`,
                                  `We build <b>one connected system</b>: booking website, payment-enabled appointments, reminders, and follow-up automation.`,
                                  `Owners get <b>real visibility</b> into schedules, staff activity, and daily revenue trends without micromanaging every detail.`,
                                  `For growing businesses, we add <b>AI-assisted workflows</b> for communication, operational alerts, and performance reporting.`,
                                  `<b>Subscription support</b> keeps your system current as services, pricing, and staff change.`
                              ]"/>
        </PageSectionContent>

        <!-- Footer -->
        <PageSectionFooter title="Ready to *run your shop like a system?*"
                           description="Tell us how you currently handle bookings, reminders, payments, and staff tracking. We will map the highest-impact upgrade path for your business."
                           :include-divider="true"
                           button-label="Book a consult"
                           button-fa-icon="fa-regular fa-comments"
                           button-url="#contact"/>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import PageSectionFooter from "/src/vue/components/layout/PageSectionFooter.vue"
import ArticleInfoBlock from "/src/vue/components/articles/ArticleInfoBlock.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>