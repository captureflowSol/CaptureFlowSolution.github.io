<template>
    <!-- Privacy Policy -->
    <PageSection variant="default"
                 :id="props.id">
        <Breadcrumbs/>

        <PageSectionHeader title="*Privacy* Policy"
                           subtitle="How we handle information on this site"/>

        <PageSectionContent>
            <ArticleParagraph title=""
                              faIcon=""
                              :description="[
                                  `This Policy explains how CaptureFlow Solutions (“we”) collects and uses data when you use this website or contact us.`,
                                  `Using the site means you accept this Policy. We may update it. The latest version is always here.`
                              ]"/>

            <ArticleParagraph title="Information we collect"
                              faIcon="pi pi-address-book"
                              :description="[
                                  `Contact form and email: name, email, subject, message—what you send us.`,
                                  `Like most sites, hosting and analytics may log IP, browser, device, region-level location, pages viewed, and time. We use this to run the site, see aggregate usage, and improve performance.`
                              ]"/>

            <ArticleParagraph title="Cookies"
                              faIcon="pi pi-database"
                              :description="[
                                  `We may use cookies and similar tech. They can store preferences, keep sessions stable, and measure basic usage.`,
                                  `Control cookies in your browser. Disabling some may break parts of the site.`
                              ]"/>

            <ArticleParagraph title="How we use information"
                              faIcon="pi pi-send"
                              :description="[
                                  `We use submissions to reply, quote work, and deliver what you asked for.`,
                                  `We do not sell your data. Vendors who host or email for us may see it only to provide those services. They must protect it.`
                              ]"/>

            <ArticleParagraph title="Security"
                              faIcon="pi pi-lock"
                              :description="[
                                  `We use reasonable safeguards. Nothing online is 100% secure.`,
                                  `Do not send government IDs or card numbers through the contact form unless we ask via a secure process.`
                              ]"/>

            <ArticleParagraph title="Third-party links"
                              faIcon="pi pi-link"
                              :description="[
                                  `We may link out (e.g. social). Their privacy rules are theirs. Read them before you share data there.`
                              ]"/>

            <ArticleParagraph title="Contact"
                              faIcon="pi pi-envelope"
                              :description="[
                                  `Questions: <a href='mailto:hello@captureflowsolutions.com'>hello@captureflowsolutions.com</a>`
                              ]"/>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import ArticleParagraph from "/src/vue/components/articles/ArticleParagraph.vue"
import Breadcrumbs from "/src/vue/components/widgets/Breadcrumbs.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>
