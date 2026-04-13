<template>
    <article class="foxy-project-grid-article row g-0 text-center">
        <div class="col-12 foxy-project-grid-container">
            <div class="foxy-project-grid row mb-4">
                <div v-for="(item, index) in gridItems"
                     :key="index"
                     class="foxy-project-grid-item-wrapper col-4 col-lg-3 text-center">
                    <component :is="item"
                               :index="index"
                               :transition-count="refreshTimes"/>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
import {computed, ref, useSlots} from "vue"

const slots = useSlots()
const refreshTimes = ref(0)

const items = computed(() => {
    return slots.default()
})

const gridItems = computed(() => {
    const allItems = items.value
    if(!allItems || allItems.length === 0)
        return []
    return allItems
})
</script>

<style lang="scss">
@import "/src/scss/_theming.scss";

:root {
    --project-logo-size: min(clamp(140px, 20vh, 170px), clamp(140px, 10.5vw, 170px));
    @include media-breakpoint-down(lg) {
        --project-logo-size: min(clamp(80px, 20vh, 110px), clamp(70px, 20.5vw, 110px));
    }
}

div.foxy-project-grid {
    min-height: calc(var(--project-logo-size) * 3.5);
}
</style>
