<template>
    <!-- Services Section -->
    <PageSection variant="primary"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="What we *deliver*"
                           subtitle="Purpose-built systems for small local businesses: booking, communication, monitoring, and growth."/>

        <!-- Content -->
        <PageSectionContent>
            <ArticleFeatures>
                <ItemFeature title="Booking system upgrade"
                             fa-icon="fa-solid fa-globe"
                             description="We build a booking website around <b>your real services and schedule</b>. Includes online booking flow, payment-ready setup, and Google Calendar sync options."/>

                <ItemFeature title="Customer communication automation"
                             fa-icon="fa-solid fa-comments"
                             description="Automate reminder and reply flow with <b>SMS, follow-up, and lead response support</b> so leads do not go cold before they book."/>

                <ItemFeature title="Virtual receptionist workflows"
                             fa-icon="fa-solid fa-headset"
                             description="Handle missed calls and after-hours inquiries with AI-assisted flows that capture <b>name, requested service, preferred time, and urgency</b>."/>

                <ItemFeature title="Team performance dashboard"
                             fa-icon="fa-solid fa-screwdriver-wrench"
                             description="Track appointments, service volume, and revenue patterns across your team. Get <b>clear visibility</b> without manual spreadsheet chasing."/>

                <ItemFeature title="AI business automation layer"
                             fa-icon="fa-solid fa-palette"
                             description="For businesses that want more, we integrate AI-powered operational tools such as activity monitoring concepts, alerting logic, and insight workflows."/>

                <ItemFeature title="Ongoing updates and support"
                             fa-icon="fa-solid fa-industry"
                             description="Your offers, staff, and hours change. Subscription support keeps your site, automations, and dashboard aligned with how you actually operate."/>
            </ArticleFeatures>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import ArticleFeatures from "/src/vue/components/articles/ArticleFeatures.vue"
import ItemFeature from "/src/vue/components/articles/items/ItemFeature.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>