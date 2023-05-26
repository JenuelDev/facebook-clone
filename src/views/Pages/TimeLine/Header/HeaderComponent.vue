<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import ProfileMenu from "./ProfileMenu.vue";
import ChatMenu from "./ChatMenu.vue";
</script>
<template>
    <div
        class="flex fixed top-0 left-0 w-full bg-[var(--secondary-background)] md:pt-3 pt-1 md:px-5 px-3 pb-2 shadow-md items-center"
    >
        <div class="w-full">
            <h2
                class="text-size-30px font-600 light:text-[var(--primary)] dark:text-white"
            >
                facebook
            </h2>
        </div>
        <div class="max-w-600px w-full">
            <div class="relative dark:text-white">
                <input
                    class="py-6px pl-40px pr-16px rounded-full w-full light:border light:active:outline-[var(--primary)] light:focus:outline-[var(--primary)] w-full light:bg-[var(--background)] dark:bg-[var(--third-background)] dark:border-[var(--third-background)]"
                    placeholder="Search Facebook"
                    type="text"
                />
                <Icon
                    class="text-size-22px opacity-50 absolute left-10px top-10px"
                    icon="material-symbols:search"
                />
            </div>
        </div>
        <div class="flex w-full justify-end gap-2 select-none">
            <ChatMenu />
            <div
                class="h-40px w-40px light:bg-gray-200 dark:bg-[var(--third-background)] light:hover:bg-gray-300 cursor-pointer flex items-center justify-center rounded-full transform active:scale-90 dark:text-gray-200 dark:hover:bg-gray-600"
            >
                <Icon
                    class="md:text-size-20px text-size-20px"
                    icon="mdi:bell"
                />
            </div>
            <ProfileMenu />
        </div>
    </div>
</template>
