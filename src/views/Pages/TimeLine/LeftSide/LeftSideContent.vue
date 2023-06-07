<script lang="ts" setup>
import DividerComponent from "@/components/Divider/DividerComponent.vue";
import MenuComponent from "./Partials/MenuComponent.vue";
import { ref } from "vue";

const selectedMenu = ref("home");
const DefaultMenus = [
    {
        key: "home",
        type: "icon",
        icon: "material-symbols:home",
        title: "Home",
        path: "/timeline",
        src: "",
    },
    {
        key: "me",
        type: "image",
        src: "/images/profile/profile.jpg",
        title: "Jenuel Oras Ganawed",
        path: "/ganawed",
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
        key: "see-all",
        type: "image",
        src: "https://i.imgur.com/ZB7471It.jpg",
        title: "See All",
        path: "/see-all",
        icon: "bxs:dashboard",
    },
];
</script>
<template>
    <div class="w-full max-w-300px">
        <template v-for="defaultMenu in DefaultMenus" :key="defaultMenu.path">
            <MenuComponent v-model="selectedMenu" :menu="defaultMenu" />
        </template>
        <DividerComponent />
        <template v-for="UtilityMenu in UtilityMenus" :key="UtilityMenu.path">
            <MenuComponent v-model="selectedMenu" :menu="UtilityMenu" />
        </template>
        <DividerComponent />
    </div>
</template>
