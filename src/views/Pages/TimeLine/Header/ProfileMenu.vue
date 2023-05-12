<script setup lang="ts">
import { Icon } from "@iconify/vue";
import DropDownComponent from "@/components/DropDown/DropDownComponent.vue";

const menuOptions = [
    {
        label: "Settings & privacy",
        icon: "solar:settings-broken",
        path: "/",
    },
    {
        label: "Help & support",
        icon: "material-symbols:help-rounded",
        path: "/",
    },
    {
        label: "Display & accessibility",
        icon: "material-symbols:dark-mode",
        path: "/",
    },
    {
        label: "Give feedback",
        icon: "ic:baseline-feedback",
        path: "/",
    },
    {
        label: "Log Out",
        icon: "ic:baseline-log-out",
        path: "/",
    },
];
</script>
<template>
    <DropDownComponent box-width="350px">
        <div class="relative transform active:scale-90 cursor-pointer group">
            <div
                class="h-40px w-40px bg-gray-500 flex items-center justify-center rounded-full overflow-hidden relative"
            >
                <img
                    class="group-hover:opacity-75"
                    src="/images/profile/profile.jpg"
                />
            </div>
            <Icon
                class="md:text-size-20px text-size-20px bottom-0 right-0 absolute border-1 bg-white border-white rounded-full shadow-sm"
                icon="ic:outline-more-horiz"
            />
        </div>
        <template #content>
            <div class="p-3" role="none">
                <div class="shadow-lg p-2">
                    <div class="py-2">
                        <div class="flex gap-3 items-center">
                            <div
                                class="h-40px w-40px bg-gray-500 flex items-center justify-center rounded-full overflow-hidden relative"
                            >
                                <img
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
                            <div class="font-semibold text-[var(--primary)]">
                                See all profiles
                            </div>
                            <div
                                class="bg-red-500 text-white px-2 rounded-full"
                            >
                                18
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <div
                        v-for="menuOption in menuOptions"
                        :key="menuOption.label"
                        class="flex items-center justify-between hover:bg-gray-100 pr-3 rounded-lg cursor-pointer p-1 transition-all"
                    >
                        <div class="flex items-center gap-3">
                            <div
                                class="h-40px w-40px transform bg-gray-200 hover:bg-gray-300 active:scale-90 cursor-pointer flex items-center justify-center rounded-full"
                            >
                                <Icon
                                    class="md:text-size-20px text-size-20px"
                                    :icon="menuOption.icon"
                                />
                            </div>
                            <div>{{ menuOption.label }}</div>
                        </div>
                        <Icon icon="material-symbols:arrow-forward-ios" />
                    </div>
                </div>
            </div>
        </template>
    </DropDownComponent>
</template>
