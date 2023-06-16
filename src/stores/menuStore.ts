import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore('useMenuStore', () => {
    const showLeftFix = ref(false)

    return {
        showLeftFix
    }
})