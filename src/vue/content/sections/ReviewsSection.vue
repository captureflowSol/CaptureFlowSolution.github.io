<template>
    <!-- Services Section -->
    <PageSection variant="primary"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="What clients *notice*"
                           subtitle="Fewer missed leads. Faster booking. Stronger look."/>

        <!-- Content -->
        <PageSectionContent>
            <ArticleTestimonials>
                <ItemTestimonial title="Home services"
                                 image="images/clients/client-1.png"
                                 quote="We lost <b>after-hours calls</b> weekly. Now AI logs job type and address. I wake up to clean leads—not vague voicemail."
                                 author="Chris M."
                                 role="Owner"/>

                <ItemTestimonial title="Appointment-based studio"
                                 image="images/clients/client-2.png"
                                 quote="The site explains packages in plain English. No more <b>ten-message</b> booking threads. Staff repeat themselves less."
                                 author="Luza K."
                                 role="Operations lead"/>

                <ItemTestimonial title="Product brand"
                                 image="images/clients/client-3.png"
                                 quote="We refreshed visuals and packaging on time. The shelf look feels <b>legit</b>. It matches the product quality."
                                 author="Daniel R."
                                 role="Founder"/>

                <ItemTestimonial title="Local retail"
                                 image="images/clients/client-4.png"
                                 quote="People stopped bouncing. Clear hours. Clear services. Fast contact. Not flashy—<b>effective</b>."
                                 author="Elena V."
                                 role="Manager"/>
            </ArticleTestimonials>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import ArticleTestimonials from "/src/vue/components/articles/ArticleTestimonials.vue"
import ItemTestimonial from "/src/vue/components/articles/items/ItemTestimonial.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>
