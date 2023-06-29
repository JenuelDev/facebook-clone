<script lang="ts" setup>
import DividerComponent from "@/components/Divider/DividerComponent.vue";
import MenuComponent from "./Partials/MenuComponent.vue";
import { onBeforeMount, ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import dayjs from "dayjs";
import { useMenuStore } from "@/stores/menuStore";
import { useRoute, useRouter } from "vue-router";

const menuStore = useMenuStore();
const selectedMenu = ref("home");
const route = useRoute();

onBeforeMount(() => {
    const arrayMenus = [
        ...DefaultMenus,
        ...UtilityMenus,
        ...groupMenus,
        ...MyPages,
        ...links,
    ];

    selectedMenu.value =
        arrayMenus.find((item) => item.path === route.path)?.key ?? "home";
});

const DefaultMenus = [
    {
        key: "home",
        type: "icon",
        icon: "material-symbols:home",
        title: "Home",
        path: "/home",
        src: "",
    },
    {
        key: "me",
        type: "image",
        src: "/images/profile/profile.jpg",
        title: "BroJenuel",
        path: "/home/me",
        icon: "",
    },
];

const UtilityMenus = [
    {
        key: "watch",
        type: "icon",
        src: "",
        title: "Watch",
        path: "/watch",
        icon: "solar:clapperboard-play-bold",
    },
    {
        key: "Marketplace",
        type: "icon",
        src: "",
        title: "Marketplace",
        path: "/marketplace",
        icon: "healthicons:market-stall",
    },
    {
        key: "gaming",
        type: "icon",
        src: "",
        title: "Gaming",
        path: "/gaming",
        icon: "teenyicons:game-controller-retro-solid",
    },
    {
        key: "see-all",
        type: "icon",
        src: "",
        title: "See All",
        path: "/see-all",
        icon: "bxs:dashboard",
    },
];

const groupMenus = [
    {
        key: "vuejs-developer-group",
        type: "image",
        src: "https://i.imgur.com/ZB7471It.jpg",
        title: "VueJs Developers",
        path: "/vuejs-developers",
        icon: "",
    },
    {
        key: "Podcast",
        type: "image",
        src: "https://i.imgur.com/gj3GMb5b.png",
        title: "Podcasts",
        path: "/podcasts",
        icon: "",
    },
    {
        key: "elon-musk",
        type: "image",
        src: "https://i.imgur.com/hyXoUXGb.png",
        title: "Elon Musk",
        path: "/elon-musk",
        icon: "",
    },
    {
        key: "see-allGroups",
        type: "icon",
        src: "",
        title: "See All Groups",
        path: "/see-allGroups",
        icon: "material-symbols:groups-2-rounded",
    },
];

const MyPages = [
    {
        key: "brojenuel-page",
        type: "image",
        src: "https://i.imgur.com/kpVp6fib.jpg",
        title: "BroJenuel",
        path: "/brojenuel-allGroups",
        icon: "material-symbols:groups-2-rounded",
    },
    {
        key: "believers-sword",
        type: "image",
        src: "https://i.imgur.com/78G1bH6b.png",
        title: "Believers Sword",
        path: "/believers-sword",
        icon: "material-symbols:groups-2-rounded",
    },
    {
        key: "see-all-short-cuts",
        type: "icon",
        src: "",
        title: "See All Shortcuts",
        path: "/see-all-short-cuts",
        icon: "ic:twotone-switch-access-shortcut-add",
    },
];

const links = [
    {
        title: "Privacy",
        path: "#",
        key: "asdf",
    },
    {
        title: "Terms",
        path: "#",
        key: "asdfasdf",
    },
    {
        title: "Advertising",
        path: "#",
        key: "asdfsdfasdf",
    },
    {
        title: "Advertising",
        appendIcon: "material-symbols:ads-click",
        path: "#",
        key: "asdfsdf2asdf",
    },
    {
        title: "Cookies",
        path: "#",
        key: "asdfsdf2asdf5",
    },
    {
        title: "More",
        path: "#",
        key: "tasdfsdf2asdf5",
    },
    {
        title: "Meta @ " + dayjs().format("YYYY"),
        path: "#",
        key: "asdsffsdf2asdf5",
    },
];
const router = useRouter();

/**
 * We then watch selected key, then we can add condition for each key selected.
 * You can modify this function what ever you want. If you like to simplify it, its up to you.
 */
watch(
    () => selectedMenu.value,
    (val) => {
        if (val == "home") router.push("/home");
        if (val == "me") router.push("/home/me");
    }
);
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
                <MenuComponent v-model="selectedMenu" :menu="defaultMenu" />
            </template>
            <DividerComponent />
            <template v-for="menu in UtilityMenus" :key="menu.path">
                <MenuComponent v-model="selectedMenu" :menu="menu" />
            </template>
            <DividerComponent />
            <template v-for="menu in groupMenus" :key="menu.path">
                <MenuComponent v-model="selectedMenu" :menu="menu" />
            </template>
            <DividerComponent />
            <template v-for="menu in MyPages" :key="menu.path">
                <MenuComponent v-model="selectedMenu" :menu="menu" />
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
