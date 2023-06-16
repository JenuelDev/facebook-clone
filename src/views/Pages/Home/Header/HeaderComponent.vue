<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import ProfileMenu from "./ProfileMenu.vue";
import ChatMenu from "./ChatMenu.vue";
import NotificationMenu from "./NotificationMenu.vue";
import { useMenuStore } from "@/stores/menuStore";
const menuStore = useMenuStore();
</script>
<template>
    <div
        class="flex fixed top-0 left-0 w-full bg-[var(--secondary-background)] md:pt-3 pt-1 md:px-5 px-3 pb-2 shadow-md items-center z-99 h-[var(--header-height)]"
    >
        <div class="w-full flex gap-3 items-center">
            <Icon
                class="md:hidden block rounded-full text-size-30px transform scale-100 active:scale-125"
                icon="material-symbols:menu"
                @click="menuStore.showLeftFix = !menuStore.showLeftFix"
            />
            <h2
                class="md:text-2xl text-1xl font-600 light:text-[var(--primary)] dark:text-white"
            >
                facebook
            </h2>
        </div>
        <div class="max-w-600px w-full md:block hidden">
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
            <NotificationMenu />
            <ProfileMenu />
        </div>
    </div>
</template>
