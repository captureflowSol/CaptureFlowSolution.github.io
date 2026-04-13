<template>
    <!-- Pricing Section -->
    <PageSection variant="default"
                 :id="props.id">
        <PageSectionHeader title="Service *costs*"
                           subtitle="Simple, transparent pricing. Setup once, maintain monthly."/>

        <PageSectionContent>
            <div class="pricing-grid row g-3">
                <div class="col-12 col-lg-4">
                    <article class="pricing-card">
                        <h4 class="plan-title mb-1">Website</h4>
                        <p class="text-muted text-3 mb-3">Build and launch</p>

                        <div class="price-line">
                            <span class="price">$200</span>
                            <span class="period">one-time setup</span>
                        </div>

                        <ul class="feature-list">
                            <li>Professional website creation</li>
                            <li>Core pages and layout setup</li>
                            <li>Mobile-ready launch</li>
                            <li>Maintenance subscription: <b>$50/month</b></li>
                        </ul>

                        <a href="#contact" class="plan-cta">Get started</a>
                    </article>
                </div>

                <div class="col-12 col-lg-4">
                    <article class="pricing-card pricing-card-featured">
                        <h4 class="plan-title mb-1">Bot + Agent</h4>
                        <p class="text-muted text-3 mb-3">Capture and assist</p>

                        <div class="price-line">
                            <span class="price">$200</span>
                            <span class="period">one-time setup</span>
                        </div>

                        <ul class="feature-list">
                            <li>Bot and agent creation</li>
                            <li>Installation and core configuration</li>
                            <li>Lead capture flow setup</li>
                            <li>Maintenance subscription: <b>$50/month</b></li>
                        </ul>

                        <a href="#contact" class="plan-cta">Get started</a>
                    </article>
                </div>

                <div class="col-12 col-lg-4">
                    <article class="pricing-card">
                        <h4 class="plan-title mb-1">Image Workflow</h4>
                        <p class="text-muted text-3 mb-3">Design automation</p>

                        <div class="price-line">
                            <span class="price">$300</span>
                            <span class="period">one-time setup</span>
                        </div>

                        <ul class="feature-list">
                            <li>AI image workflow creation</li>
                            <li>Prompt and style pipeline setup</li>
                            <li>Revision-ready process</li>
                            <li>Maintenance subscription: <b>$100/month</b></li>
                        </ul>

                        <a href="#contact" class="plan-cta">Get started</a>
                    </article>
                </div>
            </div>
        </PageSectionContent>
    </PageSection>
</template>

<script setup>
import PageSection from "/src/vue/components/layout/PageSection.vue"
import PageSectionHeader from "/src/vue/components/layout/PageSectionHeader.vue"
import PageSectionContent from "/src/vue/components/layout/PageSectionContent.vue"

const props = defineProps({
    id: String
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

.pricing-card {
    background: $white;
    border: 1px solid lighten($dark, 72%);
    border-radius: 14px;
    padding: 1.25rem 1.1rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    height: 100%;
}

.pricing-card-featured {
    border-color: $primary;
    box-shadow: 0 10px 28px rgba(127, 17, 255, 0.18);
}

.plan-title {
    font-weight: 700;
}

.price-line {
    display: flex;
    align-items: baseline;
    gap: 0.45rem;
    margin-bottom: 0.8rem;
}

.price {
    font-size: 2rem;
    font-weight: 700;
    color: $dark;
    line-height: 1;
}

.period {
    font-size: 0.85rem;
    color: $text-muted;
}

.feature-list {
    margin: 0 0 1rem 0;
    padding-left: 1rem;
}

.feature-list li {
    margin-bottom: 0.4rem;
    color: $text-muted;
    font-size: 0.95rem;
}

.plan-cta {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.6rem 0.8rem;
    border-radius: 999px;
    background-color: $primary;
    color: $white;
    font-weight: 600;
    text-decoration: none;
}

.plan-cta:hover {
    color: $white;
    background-color: darken($primary, 5%);
}
</style>
