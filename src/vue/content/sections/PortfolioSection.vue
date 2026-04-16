<template>
    <!-- About Section -->
    <PageSection variant="default"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="Barbershop *outcomes*"
                           subtitle="What we build for shops focused on bookings, control, and retention."/>

        <!-- Content -->
        <PageSectionContent>
            <ArticleProjectGrid>
                
                <ItemProjectGrid title="Booking + Reminders System"
                                 category="Automation"
                                 :description="`A complete booking flow for a barbershop: online appointments, reminder automation, and cleaner daily schedule control. Built to reduce no-shows and empty chair time.`"
                                 image="images/portfolio/project-logo-0.png"
                                 video-url="videos/ai-design.mp4"
                                 :tags="['booking', 'reminders', 'barbershop']"
                                 :links="[
                                    { label: 'Book consult', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Barber Performance Dashboard"
                                 category="Management"
                                 :description="`Dashboard setup for chair-level visibility: service count, booking trends, and daily revenue monitoring so owners can manage performance with confidence.`"
                                 image="images/portfolio/project-logo-1.png"
                                 :tags="['dashboard', 'staff tracking', 'revenue']"
                                 :links="[
                                    { label: 'Book consult', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Virtual Receptionist Workflow"
                                 category="Communication"
                                 :description="`Missed-call and after-hours lead capture flow that collects client details and service intent, then routes follow-up tasks to the right person.`"
                                 image="images/portfolio/project-logo-2.png"
                                 :tags="['missed calls', 'lead capture', 'barbershop']"
                                 :links="[
                                    { label: 'Book consult', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Payment-First Booking Flow"
                                 category="Revenue Control"
                                 :description="`Configured booking flow with payment-first logic to reduce no-shows and secure appointments before peak time slots fill up.`"
                                 image="images/portfolio/project-logo-3.png"
                                 :tags="['payments', 'no-show reduction', 'appointments']"
                                 :links="[
                                    { label: 'Book consult', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Multi-Barber Capacity Planner"
                                 category="Operations"
                                 :description="`Workflow for balancing chair availability, appointment density, and service duration so busy shops stay efficient during rush hours.`"
                                 image="images/portfolio/project-logo-4.png"
                                 :tags="['capacity', 'operations', 'calendar']"
                                 :links="[
                                    { label: 'Book consult', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Client Retention Follow-Up"
                                 category="Automation"
                                 :description="`Post-visit follow-up sequences for repeat bookings and re-engagement, helping shops keep regular clients active without manual chasing.`"
                                 image="images/portfolio/project-logo-5.png"
                                 :tags="['retention', 'repeat clients', 'automation']"
                                 :links="[
                                    { label: 'Book consult', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="AI Insights Layer"
                                 category="Advanced"
                                 :description="`Advanced implementation path for shops that want AI-assisted monitoring concepts, smarter alerts, and operational insight from daily activity patterns.`"
                                 image="images/portfolio/project-logo-6.png"
                                 :tags="['ai', 'insights', 'next-generation']"
                                 :links="[
                                    { label: 'Book consult', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Launch + Support Program"
                                 category="Subscription"
                                 :description="`Monthly support track for barbershops that want reliable updates, new offer rollouts, and continuous tuning of booking and communication systems.`"
                                 image="images/portfolio/project-logo-7.png"
                                 :tags="['support', 'maintenance', 'growth']"
                                 :links="[
                                    { label: 'Book consult', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />
            </ArticleProjectGrid>
        </PageSectionContent>

        <!-- Footer -->
        <PageSectionFooter title="Want a plan for *your business?*"
                           description="Share your current booking setup, no-show rate, and team structure. We will map the first high-impact automation steps."
                           :include-divider="true"
                           button-label="Book strategy call"
                           button-fa-icon="fa-solid fa-message"
                           button-url="#contact"/>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"
import PageSectionFooter from "/src/vue/components/layout/PageSectionFooter.vue"
import ArticleProjectGrid from "/src/vue/components/articles/ArticleProjectGrid.vue"
import ItemProjectGrid from "/src/vue/components/articles/items/ItemProjectGrid.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";
</style>
