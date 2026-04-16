<template>
    <!-- Pricing Section -->
    <PageSection variant="default"
                 :id="props.id">
        <PageSectionHeader title="Barbershop system *costs*"
                           subtitle="4 clear tiers: starter, growth, premium automation, and high-ticket AI systems."/>

        <PageSectionContent>
            <div class="pricing-grid row g-3">
                <div class="col-12 col-lg-6 col-xl-3">
                    <article class="pricing-card">
                        <h4 class="plan-title mb-1">Starter Package</h4>
                        <p class="text-muted text-3 mb-3">Entry tier</p>

                        <div class="price-line">
                            <span class="price">$300 - $800</span>
                            <span class="period">one-time setup</span>
                        </div>

                        <ul class="feature-list">
                            <li>Simple website (Next.js or template)</li>
                            <li>Basic booking system</li>
                            <li>Mobile responsive layout</li>
                            <li>Contact form setup</li>
                        </ul>

                        <p class="plan-note">Great for first clients and portfolio building.</p>
                        <a href="#contact" class="plan-cta">Get started</a>
                    </article>
                </div>

                <div class="col-12 col-lg-6 col-xl-3">
                    <article class="pricing-card pricing-card-featured">
                        <h4 class="plan-title mb-1">Growth System</h4>
                        <p class="text-muted text-3 mb-3"><b>Best seller</b></p>

                        <div class="price-line">
                            <span class="price">$800 - $2,000</span>
                            <span class="period">one-time setup</span>
                        </div>

                        <ul class="feature-list">
                            <li>Full booking system</li>
                            <li>Google Calendar sync</li>
                            <li>SMS/email reminders</li>
                            <li>Barber dashboard</li>
                            <li>Payments (Stripe)</li>
                        </ul>

                        <p class="plan-note">Main revenue package for most barbershops.</p>
                        <a href="#contact" class="plan-cta">Get started</a>
                    </article>
                </div>

                <div class="col-12 col-lg-6 col-xl-3">
                    <article class="pricing-card">
                        <h4 class="plan-title mb-1">Automation System</h4>
                        <p class="text-muted text-3 mb-3">Premium tier</p>

                        <div class="price-line">
                            <span class="price">$2,000 - $5,000+</span>
                            <span class="period">one-time setup</span>
                        </div>

                        <ul class="feature-list">
                            <li>Everything in Growth System</li>
                            <li>Performance dashboard</li>
                            <li>Staff tracking</li>
                            <li>Analytics</li>
                            <li>Custom admin panel</li>
                        </ul>

                        <p class="plan-note">Positioned as a complete business system.</p>
                        <a href="#contact" class="plan-cta">Get started</a>
                    </article>
                </div>

                <div class="col-12 col-lg-6 col-xl-3">
                    <article class="pricing-card">
                        <h4 class="plan-title mb-1">AI System</h4>
                        <p class="text-muted text-3 mb-3">High-ticket tier</p>

                        <div class="price-line">
                            <span class="price">$5,000 - $15,000+</span>
                            <span class="period">one-time setup</span>
                        </div>

                        <ul class="feature-list">
                            <li>Camera integration</li>
                            <li>AI detection</li>
                            <li>Automation alerts</li>
                            <li>Advanced analytics</li>
                        </ul>

                        <p class="plan-note">Best fit for serious owners and multi-location shops.</p>
                        <a href="#contact" class="plan-cta">Book strategy call</a>
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

.plan-note {
    color: $text-muted;
    font-size: 0.9rem;
    margin: 0 0 0.8rem 0;
}
</style>
