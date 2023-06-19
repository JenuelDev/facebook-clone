<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const settings = ref({
    itemsToShow: 1,
    snapAlign: "center",
});

const breakpoints = ref({
    // 700px and up
    700: {
        itemsToShow: 3.5,
        snapAlign: "center",
    },
    // 1024 and up
    1024: {
        itemsToShow: 4,
        snapAlign: "start",
    },
});

const items = ref([
    {
        link: "#",
        key: "SDF345SDF",
        img: "#",
        title: "Sample Title"
    }
]);
</script>

<template>
    <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in 10" :key="slide">
            <div class="h-180px bg-green-500 w-full mx-5px rounded-md relative overflow-hidden">
                {{ slide }}
            </div>
        </Slide>
        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>
