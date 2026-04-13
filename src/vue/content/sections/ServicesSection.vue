<template>
    <!-- Services Section -->
    <PageSection variant="primary"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="What we *deliver*"
                           subtitle="One system: your site, AI bots, design, and manufacturing workflows. Subscriptions keep it all current."/>

        <!-- Content -->
        <PageSectionContent>
            <ArticleFeatures>
                <ItemFeature title="Custom websites"
                             fa-icon="fa-solid fa-globe"
                             description="No site—or it does not match what you sell? We build around <b>your services, area, and booking flow</b>. Same system as your AI and design—not a one-off page."/>

                <ItemFeature title="Website AI assistants"
                             fa-icon="fa-solid fa-comments"
                             description="Visitors get plain answers on <b>what you offer, pricing context, and next steps</b>. Copy stays aligned with the rest of your CaptureFlow setup."/>

                <ItemFeature title="Call and missed-call AI bots"
                             fa-icon="fa-solid fa-headset"
                             description="Bots for phone and messaging catch leads when you are busy, closed, or on a job. They log <b>who called, what they need, and urgency</b>. You follow up with context."/>

                <ItemFeature title="Updates and maintenance subscriptions"
                             fa-icon="fa-solid fa-screwdriver-wrench"
                             description="Offers change. Sites, bots, and visuals drift. <b>Subscriptions</b> cover updates and tuning so message, design, and automation stay matched."/>

                <ItemFeature title="Integrated design: brand, product, and packaging"
                             fa-icon="fa-solid fa-palette"
                             description="Design is <b>in the same system</b> as web and bots. AI speeds branding, product shots, packaging, and campaign visuals. <b>Look and sell stay aligned.</b>"/>

                <ItemFeature title="Manufacturing workflows and customized production"
                             fa-icon="fa-solid fa-industry"
                             description="For makers who often change <b>products or packaging</b>: AI workflows for faster iteration. <b>Customized production</b> where it fits you. <b>Regular collaboration</b> keeps art, specs, and customer assets in sync."/>
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