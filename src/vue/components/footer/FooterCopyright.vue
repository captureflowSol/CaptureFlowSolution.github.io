<template>
    <p class="foxy-footer-copyright text-1"
       v-html="formattedCopyright"/>
</template>

<script setup>
import {computed} from "vue"
import {useStrings} from "/src/composables/strings.js"

const strings = useStrings()

const props = defineProps({
    holder: String,
    url: String,
    license: String,
})

const formattedCopyright = computed(() => {
    return strings.getCopyrightMessage(
        new Date().getFullYear().toString(),
        props.holder,
        props.url,
        props.license
    )
})
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

p {
    color: $light-5;
    padding: 0;
    margin: 0;
}
</style>