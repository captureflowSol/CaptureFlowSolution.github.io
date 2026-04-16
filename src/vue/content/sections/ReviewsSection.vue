<template>
    <!-- Services Section -->
    <PageSection variant="primary"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="What barbershop owners *notice*"
                           subtitle="Fewer no-shows, smoother operations, and better revenue control."/>

        <!-- Content -->
        <PageSectionContent>
            <ArticleTestimonials>
                <ItemTestimonial title="Neighborhood barbershop"
                                 image="images/clients/client-1.png"
                                 quote="We were losing bookings after closing time. Now inquiries are captured automatically and my morning starts with <b>clear appointment leads</b>."
                                 author="Omar T."
                                 role="Owner"/>

                <ItemTestimonial title="Multi-chair shop"
                                 image="images/clients/client-2.png"
                                 quote="No more back-and-forth booking chaos. Reminders and payment flow reduced no-shows, and the team has a <b>cleaner daily schedule</b>."
                                 author="Kevin R."
                                 role="Operations lead"/>

                <ItemTestimonial title="Growth-focused barbershop"
                                 image="images/clients/client-3.png"
                                 quote="The dashboard finally showed where we were leaking revenue. We adjusted staffing and saw a stronger week without adding admin overhead."
                                 author="Marcus L."
                                 role="Founder"/>

                <ItemTestimonial title="Premium grooming studio"
                                 image="images/clients/client-4.png"
                                 quote="Clients get fast replies, clear booking steps, and fewer missed messages. The system feels <b>professional and dependable</b>."
                                 author="Nadia S."
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
