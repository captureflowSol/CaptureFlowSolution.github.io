<template>
    <!-- Handles the global state -->
    <StateProviderLayer>
        <!-- Handles the UI feedbacks such as loaders and activity spinners -->
        <FeedbacksLayer>
            <!-- Handles routes/modals -->
            <ContentLayer>
                <!-- App Content -->
                <Master/>
            </ContentLayer>
        </FeedbacksLayer>
    </StateProviderLayer>
</template>

<script setup>
import StateProviderLayer from "/src/vue/stack/StateProviderLayer.vue"
import FeedbacksLayer from "/src/vue/stack/FeedbacksLayer.vue"
import ContentLayer from "/src/vue/stack/ContentLayer.vue"
import Master from "/src/vue/content/Master.vue"
import {useEmails} from "/src/composables/emails.js"
import {onMounted} from "vue"

const emails = useEmails()

onMounted(() => {
    emails.init()
})
</script>

<style lang="scss" scoped>
</style>