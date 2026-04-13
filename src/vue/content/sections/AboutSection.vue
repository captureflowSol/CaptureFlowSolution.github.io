<template>
    <!-- About Section -->
    <PageSection variant="default"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="*About* CaptureFlow"
                           subtitle="Capture more customers. Attract more customers."/>

        <!-- Content -->
        <PageSectionContent>
            <!-- About Template -->
            <ArticleInfoBlock image="images/logo/agency-logo.png"
                              :paragraphs="[
                                  `<b>CaptureFlow Solutions</b> helps small businesses stop losing revenue. Common gaps: missed calls, slow replies, weak websites.`,
                                  `Many owners <b>lack a site</b>, have one that does not explain services, or have <b>no AI</b> for inquiries and missed calls.`,
                                  `We build <b>one coordinated system</b>: custom websites and tailored AI bots—on your site and on the phone.`,
                                  `<b>Design stays in that system</b>: branding, product visuals, packaging—via AI-assisted workflows.`,
                                  `For small manufacturers, we add workflows for <b>SKU and packaging changes</b>, <b>customized production</b> where it fits, and <b>steady collaboration</b>.`,
                                  `<b>Subscriptions</b> keep digital and visual assets accurate. You <b>capture more customers</b> and <b>attract more customers</b>.`
                              ]"/>
        </PageSectionContent>

        <!-- Footer -->
        <PageSectionFooter title="Ready to *stop leaving money on the table?*"
                           description="Share what you sell, how buyers reach you, and how often products or packaging change. We will propose one plan: capture, design, manufacturing workflows, and subscription care."
                           :include-divider="true"
                           button-label="Talk to us"
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