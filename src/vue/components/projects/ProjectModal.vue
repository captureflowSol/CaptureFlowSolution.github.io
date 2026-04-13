<template>
    <div class="modal modal-xl fade foxy-project-modal"
         id="foxy-project-modal"
         tabindex="-1"
         aria-labelledby="foxy-project-modal-label">
        <div class="modal-dialog modal-dialog-centered">
            <!-- Modal Content -->
            <div class="modal-content">
                <!-- Close Button -->
                <button class="close-button"
                        data-bs-dismiss="modal"
                        aria-label="Close">
                    <i class="fa fa-close"/>
                </button>

                <!-- Body -->
                <div class="modal-body py-5 py-lg-4">
                    <!-- Video-first projects (e.g. AI Design reel) -->
                    <div v-if="project && project.videoUrl"
                         :key="project.title"
                         class="project-modal-video-layout">
                        <div class="project-modal-video-wrap mb-4">
                            <video ref="videoRef"
                                   class="project-modal-video"
                                   controls
                                   playsinline
                                   preload="metadata"
                                   :poster="resolvedPosterUrl || undefined">
                                <source v-if="resolvedVideoUrl"
                                        :src="resolvedVideoUrl"
                                        type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <ProjectInfoContent :title="project.title"
                                            :tags="project.tags"
                                            :description="project.description"
                                            :links="project.links"/>
                    </div>

                    <!-- Default: image + copy -->
                    <ProjectInfo v-else-if="project"
                                 :image="project.image"
                                 :shrink-image="true">
                        <ProjectInfoContent :title="project.title"
                                            :tags="project.tags"
                                            :description="project.description"
                                            :links="project.links"/>
                    </ProjectInfo>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue"
import Modal from '/node_modules/bootstrap/js/src/modal'
import ProjectInfo from "/src/vue/components/projects/ProjectInfo.vue"
import ProjectInfoContent from "/src/vue/components/projects/ProjectInfoContent.vue"

const props = defineProps({
    project: Object
})

const _withBase = (path) => {
    if(!path)
        return null
    if(path.startsWith('http://') || path.startsWith('https://'))
        return path
    const base = import.meta.env.BASE_URL || '/'
    const clean = path.replace(/^\//, '')
    return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`
}

const resolvedVideoUrl = computed(() => _withBase(props.project?.videoUrl))

const resolvedPosterUrl = computed(() => {
    if(!props.project?.image)
        return undefined
    return _withBase(props.project.image)
})

const emit = defineEmits(['close'])

const bsModal = ref(null)
const videoRef = ref(null)

const _pauseVideo = () => {
    const el = videoRef.value
    if(!el)
        return
    el.pause()
    try {
        el.currentTime = 0
    } catch {
        /* ignore */
    }
}

onMounted(() => {
    const elModal = document.getElementById("foxy-project-modal")
    bsModal.value = new Modal(elModal, {})
    elModal.addEventListener('hide.bs.modal', _onWillHide)
    elModal.addEventListener('hidden.bs.modal', _onHidden)
})

watch(() => props.project, () => {
    if(!bsModal.value)
        return

    if(props.project)
        bsModal.value.show()
    else
        bsModal.value.hide()
})

const _onWillHide = () => {
    if (document.activeElement) {
        document.activeElement.blur()
    }
    _pauseVideo()
}

const _onHidden = () => {
    _pauseVideo()
    emit('close')
}
</script>

<style lang="scss" scoped>
@import "/src/scss/_theming.scss";

div.modal-content {
    background-color: $light-1;
}

.modal-xl {
    @include media-breakpoint-down(xl) {
        .modal-dialog {
            min-width: 90vw !important;
        }
    }
}

button.close-button {
    position: absolute;
    z-index: 99;
    right: 20px;
    top: 10px;

    padding: 0;
    margin: 0;
    font-size: 1.7rem;

    background-color: transparent;
    border-color: transparent;
    color:$light-4;

    &:hover {
        color: $primary;
    }
}

div.project-modal-video-wrap {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    background: $dark;
}

video.project-modal-video {
    display: block;
    width: 100%;
    max-height: min(60vh, 520px);
    margin: 0 auto;
    object-fit: contain;
}
</style>
