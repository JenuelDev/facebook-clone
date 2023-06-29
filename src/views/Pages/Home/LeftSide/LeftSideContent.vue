<script lang="ts" setup>
import DividerComponent from "@/components/Divider/DividerComponent.vue";
import MenuComponent from "./Partials/MenuComponent.vue";
import { Icon } from "@iconify/vue";
import dayjs from "dayjs";
import { useMenuStore } from "@/stores/menuStore";

const menuStore = useMenuStore();
const DefaultMenus = [
    {
        key: "home",
        type: "icon",
        icon: "material-symbols:home",
        title: "Home",
        path: "/home/main",
        src: "",
    },
    {
        type: "image",
        src: "/images/profile/profile.jpg",
        title: "BroJenuel",
        path: "/home/me",
        icon: "",
    },
];

const UtilityMenus = [
    {
        type: "icon",
        src: "",
        title: "Watch",
        path: "#",
        icon: "solar:clapperboard-play-bold",
    },
    {
        type: "icon",
        src: "",
        title: "Marketplace",
        path: "#",
        icon: "healthicons:market-stall",
    },
    {
        type: "icon",
        src: "",
        title: "Gaming",
        path: "#",
        icon: "teenyicons:game-controller-retro-solid",
    },
    {
        type: "icon",
        src: "",
        title: "See All",
        path: "#",
        icon: "bxs:dashboard",
    },
];

const groupMenus = [
    {
        type: "image",
        src: "https://i.imgur.com/ZB7471It.jpg",
        title: "VueJs Developers",
        path: "#",
        icon: "",
    },
    {
        type: "image",
        src: "https://i.imgur.com/gj3GMb5b.png",
        title: "Podcasts",
        path: "#",
        icon: "",
    },
    {
        type: "image",
        src: "https://i.imgur.com/hyXoUXGb.png",
        title: "Elon Musk",
        path: "#",
        icon: "",
    },
    {
        type: "icon",
        src: "",
        title: "See All Groups",
        path: "#",
        icon: "material-symbols:groups-2-rounded",
    },
];

const MyPages = [
    {
        type: "image",
        src: "https://i.imgur.com/kpVp6fib.jpg",
        title: "BroJenuel",
        path: "#",
        icon: "material-symbols:groups-2-rounded",
    },
    {
        type: "image",
        src: "https://i.imgur.com/78G1bH6b.png",
        title: "Believers Sword",
        path: "#",
        icon: "material-symbols:groups-2-rounded",
        routeName: "none",
    },
    {
        type: "icon",
        src: "",
        title: "See All Shortcuts",
        path: "#",
        icon: "ic:twotone-switch-access-shortcut-add",
    },
];

const links = [
    {
        title: "Privacy",
        path: "#",
    },
    {
        title: "Terms",
        path: "#",
    },
    {
        title: "Advertising",
        path: "#",
    },
    {
        title: "Advertising",
        appendIcon: "material-symbols:ads-click",
        path: "#",
    },
    {
        title: "Cookies",
        path: "#",
    },
    {
        title: "More",
        path: "#",
    },
    {
        title: "Meta @ " + dayjs().format("YYYY"),
        path: "#",
    },
];
</script>
<template>
    <div
        class="lg:w-full md:w-100px w-full max-w-300px md:sticky top-0 overflow-y-auto md:h-[calc(100% - var(--header-height))] h-full flex flex-col justify-between pb-20px overflowing-div fixed z-999 bg-[var(--background)] md:ml-0 -ml-400px transition-all select-none"
        :class="{ 'ml-0': menuStore.showLeftFix }"
    >
        <div class="mt-3">
            <template
                v-for="defaultMenu in DefaultMenus"
                :key="defaultMenu.path"
            >
                <MenuComponent :menu="defaultMenu" />
            </template>
            <DividerComponent />
            <template v-for="menu in UtilityMenus" :key="menu.path">
                <MenuComponent :menu="menu" />
            </template>
            <DividerComponent />
            <template v-for="menu in groupMenus" :key="menu.path">
                <MenuComponent :menu="menu" />
            </template>
            <DividerComponent />
            <template v-for="menu in MyPages" :key="menu.path">
                <MenuComponent :menu="menu" />
            </template>
        </div>
        <div
            class="pt-20px flex items-center flex-wrap pl-20px mr-1 lg:flex md:hidden flex"
        >
            <template v-for="(link, index) in links" :key="index + 'Link'">
                <small>
                    <a
                        href="#"
                        class="opacity-70 hover:opacity-100 hover:underline"
                    >
                        {{ link.title }}
                        <Icon v-if="link.appendIcon" :icon="link.appendIcon" />
                    </a>
                    <Icon v-if="links.length != index + 1" icon="ph:dot-bold" />
                </small>
            </template>
        </div>
    </div>
    <div
        class="fixed top-0 left-0 h-full w-full z-888 bg-black opacity-80"
        v-show="menuStore.showLeftFix"
        @click="menuStore.showLeftFix = false"
    ></div>
</template>
