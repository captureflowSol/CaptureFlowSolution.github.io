<template>
    <!-- About Section -->
    <PageSection variant="dark"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="*Contact* us"
                           subtitle="What you sell, where you work, what a great month looks like. We will reply with next steps."
                           :contrast="true"/>

        <!-- Content -->
        <PageSectionContent>
            <ArticleCustomContent class="p-0">
                <ContactForm/>
            </ArticleCustomContent>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import ArticleCustomContent from "/src/vue/components/articles/ArticleCustomContent.vue"
import ContactForm from "/src/vue/components/forms/contact/ContactForm.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>