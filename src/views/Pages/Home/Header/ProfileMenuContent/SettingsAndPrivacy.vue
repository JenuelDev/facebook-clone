<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const emits = defineEmits(["action"]);
const menuOptions = [
    {
        label: "Settings",
        icon: "material-symbols:settings-rounded",
        key: "setting",
        hasContent: false,
    },
    {
        label: "Language",
        icon: "material-symbols:language",
        key: "language",
        hasContent: false,
    },
    {
        label: "Privacy Checkup",
        icon: "streamline:computer-desktop-lock-device-secure-display-computer-lock-desktop-padlock-security",
        key: "privacy-checkup",
        hasContent: false,
    },
    {
        label: "Activity Log",
        icon: "ic:baseline-format-list-bulleted",
        key: "activity-log",
        hasContent: false,
    },
    {
        label: "Feed",
        icon: "material-symbols:event-list-rounded",
        key: "feed",
        hasContent: false,
    },
];
</script>

<template>
    <div>
        <div class="flex gap-3 items-center">
            <div
                class="w-40px h-40px rounded-full light:bg-white light:hover:bg-gray-200 flex dark:hover:bg-[var(--third-background)] items-center justify-center cursor-pointer text-size-20px"
                @click="emits('action', 'default')"
            >
                <Icon icon="material-symbols:arrow-back" />
            </div>
            <div class="font-700 text-size-20px">Settings & privacy</div>
        </div>
        <div class="mt-5">
            <div
                v-for="menuOption in menuOptions"
                :key="menuOption.label"
                class="flex items-center justify-between light:hover:bg-gray-100 light:active:bg-gray-200 pr-3 dark:hover:bg-[var(--third-background)] rounded-lg cursor-pointer p-1 transition-all"
                @click="emits('action', menuOption.key)"
            >
                <div class="flex items-center gap-3">
                    <div
                        class="h-40px w-40px transform light:bg-gray-200 light:hover:bg-gray-300 active:scale-90 cursor-pointer flex items-center justify-center rounded-full"
                    >
                        <Icon
                            :icon="menuOption.icon"
                            class="md:text-size-20px text-size-20px"
                        />
                    </div>
                    <div>{{ menuOption.label }}</div>
                </div>
                <Icon
                    v-if="menuOption.hasContent"
                    icon="material-symbols:arrow-forward-ios"
                />
            </div>
        </div>
    </div>
</template>
