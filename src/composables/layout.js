/**
 * Created by Ryan Balieiro on 08.26.2023
 * This composable will implement helper methods that manipulate DOM elements.
 */
import {useUtils} from "/src/composables/utils.js"

const utils = useUtils()

export function useLayout() {
    /**
     * @param {Boolean} enabled
     */
    const setBodyScrollEnabled = (enabled) => {
        if(window.__scrollEnabled === undefined) window.__scrollEnabled = true
        if(enabled) _enableScroll()
        else _disableScroll()
    }

    /**
     * @private
     */
    const _enableScroll = () => {
        if(window.__scrollEnabled) return

        const bodyStyle = document.body.style
        bodyStyle.position = window.__savedBodyStyle.position
        bodyStyle.top = window.__savedBodyStyle.top
        bodyStyle.left = window.__savedBodyStyle.left
        bodyStyle.right = window.__savedBodyStyle.right
        bodyStyle.width = window.__savedBodyStyle.width
        bodyStyle.overflow = window.__savedBodyStyle.overflow
        delete window.__savedBodyStyle

        window.__scrollEnabled = true
    }

    /**
     * @private
     */
    const _disableScroll = () => {
        if(!window.__scrollEnabled) return

        const bodyStyle = document.body.style

        const defaultBodyStyle = {}
        defaultBodyStyle.position = bodyStyle.position
        defaultBodyStyle.top = bodyStyle.top
        defaultBodyStyle.left = bodyStyle.left
        defaultBodyStyle.right = bodyStyle.right
        defaultBodyStyle.width = bodyStyle.width
        defaultBodyStyle.overflow = bodyStyle.overflow
        window.__savedBodyStyle = defaultBodyStyle

        bodyStyle.position = 'fixed'
        bodyStyle.top = `0px`
        bodyStyle.left = '0'
        bodyStyle.right = '0'
        bodyStyle.width = '100%'
        bodyStyle.overflow = 'hidden'

        window.__scrollEnabled = false
    }

    /**
     * @return {Boolean}
     */
    const isBodyScrollEnabled = () => {
        if(window.__scrollEnabled === undefined) window.__scrollEnabled = true
        return window.__scrollEnabled
    }

    /**
     * @param {HTMLElement} element
     * @return {boolean}
     */
    const isElementOutsideBounds = (element) => {
        const rect = element.getBoundingClientRect()

        return (
            rect.bottom < 0 ||
            rect.right < 0 ||
            rect.left > window.innerWidth ||
            rect.top > window.innerHeight
        )
    }

    /**
     * @param {HTMLElement} element
     * @return {boolean}
     */
    const scrollIntoView = (element) => {
        const elNavbar = document.querySelector('.foxy-navbar-compressed')
        const navOffset = elNavbar ? elNavbar.getBoundingClientRect().height - 2 : 70

        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return {
        setBodyScrollEnabled,
        isBodyScrollEnabled,
        isElementOutsideBounds,
        scrollIntoView
    }
}