<script setup lang="ts">
import { ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

const profileMenuButtonRef = ref(null);
const showDropDownBox = ref(false);
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
    modelValue: Boolean,
    boxWidth: { type: String, default: "300px" },
});

watch(
    () => showDropDownBox.value,
    (val) => {
        emit("update:modelValue", val);
    }
);
onClickOutside(profileMenuButtonRef, () => (showDropDownBox.value = false));
</script>
<template>
    <div ref="profileMenuButtonRef" class="relative inline-block text-left">
        <div @click="showDropDownBox = !showDropDownBox">
            <slot />
        </div>

        <transition name="button-dropdown">
            <div
                v-show="showDropDownBox"
                class="absolute right-0 z-10 mt-2 origin-top-right rounded-md light:bg-white dark:bg-[var(--secondary-background)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-[100vw]"
                :style="`max-width: ${props.boxWidth}`"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
            >
                <slot name="content" />
            </div>
        </transition>
    </div>
</template>
<style lang="scss">
.button-dropdown-enter-active,
.button-dropdown-leave-active {
    transition: 0.2s ease;
}

.button-dropdown-enter-from {
    @apply transform opacity-0 scale-95;
}

.button-dropdown-leave-to {
    @apply transform opacity-0 scale-95;
}

.button-dropdown-enter-from,
.button-dropdown-leave-to {
    opacity: 0;
}
</style>
