import { defineStore } from "pinia";
import { useColorMode } from '@vueuse/core'

export default defineStore('useThemeStore', () => {
    const mode = useColorMode()

    return {
        mode
    }
})