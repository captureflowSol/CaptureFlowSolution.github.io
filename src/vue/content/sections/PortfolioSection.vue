<template>
    <!-- About Section -->
    <PageSection variant="default"
                 :id="props.id">
        <!-- Title -->
        <PageSectionHeader title="Example *outcomes*"
                           subtitle="Live sites—websites and chatbots in production."/>

        <!-- Content -->
        <PageSectionContent>
            <ArticleProjectGrid>
                
                <ItemProjectGrid title="*AI Design*"
                                 category="Video"
                                 :description="`Our <b>AI design</b> workflow: branding, product visuals, and packaging directions—fast iteration with human review. Watch the short reel, then <a href='#contact'>contact us</a> to scope your project.`"
                                 image="images/portfolio/project-logo-0.png"
                                 video-url="videos/ai-design.mp4"
                                 :tags="['ai design', 'creative']"
                                 :links="[
                                    { label: 'Contact us', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Wally's Wine &amp; Spirits"
                                 category="Website · Chatbot"
                                 :description="`Wine and spirits retail. <b>Website</b> for shopping, stories, and support. <b>Chatbot</b> for customer questions and guidance. <a href='https://www.wallywine.com/' target='_blank' rel='noopener'>wallywine.com</a>`"
                                 image="images/portfolio/project-logo-1.png"
                                 :tags="['website', 'chatbot', 'retail']"
                                 :links="[
                                    { label: 'Visit site', faIcon: 'fa-solid fa-globe', href: 'https://www.wallywine.com/' },
                                    { label: 'Contact us', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Nobu Las Vegas"
                                 category="Website"
                                 :description="`Japanese restaurant, bar, and lounge at Virgin Hotel. <b>Website</b> for reservations, menus, brunch, takeout, events, and media. <a href='https://www.noburestaurants.com/las-vegas/nobu-las-vegas-japanese-restaurant-bar-and-lounge' target='_blank' rel='noopener'>Nobu Las Vegas</a>`"
                                 image="images/portfolio/project-logo-2.png"
                                 :tags="['website', 'restaurant', 'hospitality']"
                                 :links="[
                                    { label: 'Visit site', faIcon: 'fa-solid fa-globe', href: 'https://www.noburestaurants.com/las-vegas/nobu-las-vegas-japanese-restaurant-bar-and-lounge' },
                                    { label: 'Contact us', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Shawarma Paradise"
                                 category="Website · Chatbot"
                                 :description="`Glatt kosher Mediterranean near the Strip. <b>Website</b> for menu, hours, and visits. <b>Chatbot</b> for questions and lead capture. <a href='https://shawarmaparadise.com/' target='_blank' rel='noopener'>shawarmaparadise.com</a>`"
                                 image="images/portfolio/project-logo-3.png"
                                 :tags="['website', 'chatbot', 'restaurant']"
                                 :links="[
                                    { label: 'Visit site', faIcon: 'fa-solid fa-globe', href: 'https://shawarmaparadise.com/' },
                                    { label: 'Contact us', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Cap't Loui"
                                 category="Website"
                                 :description="`Cajun seafood boil brand since 2016. <b>Website</b> for menu, order, locations, franchise, and newsletter. <a href='https://captloui.com/' target='_blank' rel='noopener'>captloui.com</a>`"
                                 image="images/portfolio/project-logo-4.png"
                                 :tags="['website', 'restaurant', 'franchise']"
                                 :links="[
                                    { label: 'Visit site', faIcon: 'fa-solid fa-globe', href: 'https://captloui.com/' },
                                    { label: 'Contact us', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Vic's Las Vegas"
                                 category="Website"
                                 :description="`American-Italian dining and live jazz in Symphony Park, Downtown Las Vegas. <b>Website</b> for reservations, menus, events, and private dining. <a href='https://www.vicslasvegas.com/' target='_blank' rel='noopener'>vicslasvegas.com</a>`"
                                 image="images/portfolio/project-logo-5.png"
                                 :tags="['website', 'restaurant', 'hospitality']"
                                 :links="[
                                    { label: 'Visit site', faIcon: 'fa-solid fa-globe', href: 'https://www.vicslasvegas.com/' },
                                    { label: 'Contact us', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Toca Madera"
                                 category="Website"
                                 :description="`Bold Mexican-inspired dining (Noble 33). <b>Website</b> for locations, reservations, menu, cocktails, and happenings. <a href='https://tocamadera.com/' target='_blank' rel='noopener'>tocamadera.com</a>`"
                                 image="images/portfolio/project-logo-6.png"
                                 :tags="['website', 'restaurant', 'multi-location']"
                                 :links="[
                                    { label: 'Visit site', faIcon: 'fa-solid fa-globe', href: 'https://tocamadera.com/' },
                                    { label: 'Contact us', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />

                <ItemProjectGrid title="Mikiya Wagyu Shabu House — Las Vegas"
                                 category="Website"
                                 :description="`Wagyu shabu location page. <b>Website</b> for story, wagyu, membership, and visits. <a href='https://mikiyashabu.com/project/las-vegas-nv/' target='_blank' rel='noopener'>Las Vegas, NV</a>`"
                                 image="images/portfolio/project-logo-7.png"
                                 :tags="['website', 'restaurant', 'las vegas']"
                                 :links="[
                                    { label: 'Visit site', faIcon: 'fa-solid fa-globe', href: 'https://mikiyashabu.com/project/las-vegas-nv/' },
                                    { label: 'Contact us', faIcon: 'fa-regular fa-envelope', href: '#contact' }
                                 ]"
                />
            </ArticleProjectGrid>
        </PageSectionContent>

        <!-- Footer -->
        <PageSectionFooter title="Want a plan for *your* business?"
                           description="Share your goals and busiest hours. We will map the first high-impact steps."
                           :include-divider="true"
                           button-label="Get in touch"
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
