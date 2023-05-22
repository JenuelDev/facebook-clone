<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const emits = defineEmits(["action"]);
const menuOptions = [
    {
        label: "Settings & privacy",
        icon: "material-symbols:settings-rounded",
        key: "settings",
        hasContent: true,
    },
    {
        label: "Help & support",
        icon: "material-symbols:help-rounded",
        key: "help",
        hasContent: true,
    },
    {
        label: "Display & accessibility",
        icon: "material-symbols:dark-mode",
        key: "display",
        hasContent: true,
    },
    {
        label: "Give feedback",
        icon: "ic:baseline-feedback",
        key: "feedback",
        hasContent: false,
    },
    {
        label: "Log Out",
        icon: "majesticons:door-exit",
        key: "logout",
        hasContent: false,
    },
];
</script>
<template>
    <div>
        <div class="shadow-lg p-2">
            <div class="py-2">
                <div class="flex gap-3 items-center">
                    <div
                        class="h-40px w-40px bg-gray-500 flex items-center justify-center rounded-full overflow-hidden relative"
                    >
                        <img
                            alt="profile image"
                            class="group-hover:opacity-75"
                            src="/images/profile/profile.jpg"
                        />
                    </div>
                    <span class="font-600">Maria Clara</span>
                </div>
            </div>
            <hr />
            <div class="pt-4">
                <div class="flex justify-between">
                    <div
                        class="font-semibold text-[var(--primary)] cursor-pointer"
                    >
                        See all profiles
                    </div>
                    <div class="bg-red-500 text-white px-2 rounded-full">
                        18
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <div
                v-for="menuOption in menuOptions"
                :key="menuOption.label"
                class="flex items-center justify-between hover:bg-gray-100 active:bg-gray-200 pr-3 rounded-lg cursor-pointer p-1 transition-all"
                @click="emits('action', menuOption.key)"
            >
                <div class="flex items-center gap-3">
                    <div
                        class="h-40px w-40px transform bg-gray-200 hover:bg-gray-300 active:scale-90 cursor-pointer flex items-center justify-center rounded-full"
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
