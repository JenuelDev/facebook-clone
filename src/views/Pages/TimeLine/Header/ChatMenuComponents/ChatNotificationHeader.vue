<script setup lang="ts">
import { Icon } from "@iconify/vue";

const options = [
    {
        name: "Options",
        key: "options",
        icon: "mdi:dots-horizontal",
    },
    {
        name: "See All In Messenger",
        key: "see-all-in-messenger",
        icon: "ion:expand",
    },
    {
        name: "Create New Room",
        key: "create-new-room",
        icon: "material-symbols:auto-videocam-outline",
    },
    {
        name: "New Message",
        key: "new-message",
        icon: "material-symbols:edit-square",
    },
];
</script>
<template>
    <div class="flex justify-between items-center">
        <div class="text-size-24px font-700">Chats</div>
        <div class="flex gap-1 items-center text-size-24px">
            <div
                v-for="option in options"
                :key="option.key"
                class="flex items-center justify-center w-40px h-40px rounded-full light:hover:bg-[var(--background)] cursor-pointer transform scale-100 active:scale-90 opacity-60 hover:opacity-100 dark:hover:bg-[var(--third-background)]"
                :title="option.name"
            >
                <Icon :icon="option.icon" />
            </div>
        </div>
    </div>
</template>
