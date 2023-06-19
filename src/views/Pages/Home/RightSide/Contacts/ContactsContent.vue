<script setup lang="ts">
import { Icon } from "@iconify/vue";
const contacts = [
    {
        key: "mrbeast",
        type: "image",
        src: "https://i.imgur.com/AdxHhrns.png",
        title: "James Stephen (MrBeast)",
        path: "/mrbeast",
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
        key: "mark-zuckerberg",
        type: "image",
        src: "https://i.imgur.com/40MRp4pt.png",
        title: "Mark Zuckerberg",
        path: "/Mark-Zuckerberg",
        icon: "",
    },
    {
        key: "pewdipie",
        type: "image",
        src: "https://i.imgur.com/g8xgznIs.png",
        title: "Pewdipie Felix",
        path: "/pewdipie",
        icon: "",
    },
    {
        key: "congtv",
        type: "image",
        src: "https://i.imgur.com/K6fhKwxs.png",
        title: "Cong TV",
        path: "/congtv",
        icon: "",
    },
];
</script>
<template>
    <div class="pr-2">
        <div class="flex items-center justify-between">
            <h5
                class="font-bold select-none lg:text-lg text-xs lg:text-left text-right"
            >
                Contacts
            </h5>
            <div class="lg:flex hidden gap-1 text-size-20px">
                <div
                    class="flex items-center justify-center w-35px h-35px hover:bg-[var(--third-background)] cursor-pointer rounded-full transform scale-100 active:scale-110"
                >
                    <Icon icon="material-symbols:auto-videocam" />
                </div>
                <div
                    class="flex items-center justify-center w-35px h-35px hover:bg-[var(--third-background)] cursor-pointer rounded-full transform scale-100 active:scale-110"
                >
                    <Icon icon="ic:twotone-search" />
                </div>
                <div
                    class="flex items-center justify-center w-35px h-35px hover:bg-[var(--third-background)] cursor-pointer rounded-full transform scale-100 active:scale-110"
                >
                    <Icon icon="ph:dots-three-outline-fill" />
                </div>
            </div>
        </div>
        <div
            v-for="contact in contacts"
            :key="contact.key"
            class="flex gap-3 items-center cursor-pointer group relative select-none"
        >
            <div
                class="flex gap-3 items-center group-hover:bg-[var(--secondary-background)] w-full p-2 rounded-md"
            >
                <div
                    class="lg:h-25px lg:w-25px h-50px w-50px bg-gray-500 flex items-center justify-center rounded-full overflow-hidden relative"
                >
                    <img
                        alt="profile image"
                        class="group-hover:opacity-75"
                        :src="contact.src"
                    />
                </div>
                <span class="lg:block md:hidden block">{{
                    contact.title
                }}</span>
            </div>
        </div>
    </div>
</template>
