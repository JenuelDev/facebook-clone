<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const settings = ref<{
    snapAlign:
        | "center"
        | "start"
        | "end"
        | "center-even"
        | "center-odd"
        | undefined;
    itemsToShow: number;
    itemsToScroll: number;
}>({
    itemsToShow: 3,
    itemsToScroll: 3,
    snapAlign: "center",
});

const breakpoints = ref({
    // 700px and up
    700: {
        itemsToShow: 3.5,
        itemsToScroll: 3.5,
        snapAlign: "center",
    },
    // 1024 and up
    1024: {
        itemsToShow: 4,
        itemsToScroll: 4,
        snapAlign: "center",
    },
});

const items = ref([
    {
        link: "https://blog.jenuel.dev/blog/New-Useful-Setting-from-VS-Code",
        key: "SDF345SDF",
        img: "https://i.imgur.com/xfIGOZAh.png",
        title: "VS Code New Setting",
        target: "_blank",
    },
    {
        link: "https://blog.jenuel.dev/blog/JavaScript-Array-Methods-Cheat-Sheet",
        key: "SDF345SDC",
        img: "https://i.imgur.com/BUp2vNoh.png",
        title: "JavaScript Array Methods",
        target: "_blank",
    },
    {
        link: "https://blog.jenuel.dev/blog/Is-HTML-a-Programming-Language-",
        key: "SDF345SDF1",
        img: "https://i.imgur.com/ONLB6YTh.png",
        title: "HTML a prog. language?",
        target: "_blank",
    },
    {
        link: "https://blog.jenuel.dev/blog/ElectronJs-How-to-minimize-close-window-to-system-tray-or-in-the-background",
        key: "SDF345SDF",
        img: "https://i.imgur.com/67xQtY7.png",
        title: "ElectronJs",
        target: "_blank",
    },
    {
        link: "https://blog.jenuel.dev/blog/The-Best-Free-Software-for-Creating-Diagrams",
        key: "SDF345SDF",
        img: "https://i.imgur.com/4v8eWtp.png",
        title: "Free Software for Creating Diagrams",
        target: "_blank",
    },
    {
        link: "https://blog.jenuel.dev/blog/Google-Chrome-is-Running-in-Background",
        key: "SDF345SDF3",
        img: "https://i.imgur.com/GMk9kH9h.jpg",
        title: "Chrome is Running in Background",
        target: "_blank",
    },
    {
        link: "https://blog.jenuel.dev/blog/Top-3-Best-Laptops-for-Programming-Budget-Friendly-2023",
        key: "SDF345SDF3asd123",
        img: "https://i.imgur.com/hEiQVgM.jpg",
        title: "Laptops for Programming",
        target: "_blank",
    },
    {
        link: "https://blog.jenuel.dev/blog/The-Best-Icon-Library-for-Web-Development",
        key: "SDF345SDF3asd123a",
        img: "https://i.imgur.com/4R1DpFW.png",
        title: "Best Icon Library for Web",
        target: "_blank",
    },
]);

function goToLink(link: string, target = "_blank") {
    window.open(link, target);
}
</script>

<template>
    <Carousel
        :snap-align="settings.snapAlign"
        :items-to-show="settings.itemsToShow"
        :breakpoints="breakpoints"
    >
        <Slide v-for="item in items" :key="item.key">
            <div
                @click="goToLink(item.link, item.target)"
                target="_blank"
                class="h-180px w-full mx-5px rounded-md relative overflow-hidden cursor-pointer group bg-ima"
            >
                <div
                    class="absolute bg-black opacity-25 h-180px w-full top-0 left-0 z-77"
                ></div>
                <img
                    :src="item.img"
                    width="180"
                    class="left-0 top-0 opacity-80 group-hover:opacity-100 transform scale-100 group-hover:scale-125 transition-all absolute h-180px"
                />
                <span
                    class="absolute bottom-0 left-0 w-full mb-1 rounded-md text-white z-88 font-700 text-size-15px text-left px-1"
                >
                    {{ item.title }}
                </span>
            </div>
        </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
<style lang="scss">
.carousel__icon {
    background-color: white;
    border-radius: 100%;
}
</style>
