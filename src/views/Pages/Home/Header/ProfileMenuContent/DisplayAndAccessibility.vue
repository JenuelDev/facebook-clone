<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import useThemeStore from "@/stores/theme";

const themeStore = useThemeStore();
const emits = defineEmits(["action"]);
</script>

<template>
    <div>
        <div class="flex gap-3 items-center">
            <div
                class="w-40px h-40px rounded-full light:bg-white dark:hover:bg-[var(--third-background)] light:hover:bg-gray-200 flex items-center justify-center cursor-pointer text-size-20px"
                @click="emits('action', 'default')"
            >
                <Icon icon="material-symbols:arrow-back" />
            </div>
            <div class="font-700 text-size-20px">Display & accessibility</div>
        </div>
        <div class="mt-5">
            <div class="flex items-center justify-between">
                <div class="flex gap-3">
                    <div>
                        <div
                            class="h-40px w-40px transform flex justify-center light:bg-gray-300 dark:bg-[var(--third-background)] active:scale-90 cursor-pointer flex items-center justify-center rounded-full"
                        >
                            <Icon
                                class="md:text-size-20px text-size-20px"
                                icon="material-symbols:dark-mode"
                            />
                        </div>
                    </div>
                    <div>
                        <div class="font-700 px-2">Dark Mode</div>
                        <p class="text-size-14px opacity-75 px-2 mb-3">
                            Adjust the appearance of Facebook to reduce glare
                            and give your eyes a break.
                        </p>
                        <div
                            class="flex justify-between light:bg-white light:hover:bg-gray-300 active:scale-90 cursor-pointer flex items-center justify-center rounded-lg py-2 px-2 mb-1 dark:hover:bg-[var(--third-background)]"
                            @click="themeStore.mode = 'light'"
                        >
                            <span>Off</span>
                            <input
                                value="light"
                                type="radio"
                                v-model="themeStore.mode"
                            />
                        </div>
                        <div
                            class="flex justify-between light:bg-white light:hover:bg-gray-300 dark:hover:bg-[var(--third-background)] active:scale-90 cursor-pointer flex items-center justify-center rounded-lg py-2 px-2"
                            @click="themeStore.mode = 'dark'"
                        >
                            <span>On</span>
                            <input
                                value="dark"
                                type="radio"
                                v-model="themeStore.mode"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
