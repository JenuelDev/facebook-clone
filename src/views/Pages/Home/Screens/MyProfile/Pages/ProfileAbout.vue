<script setup lang="ts">
import { ref } from "vue";

const selectedMenu = ref("overview");
const menus = [
    {
        label: "Overview",
        key: "overview",
    },
    {
        label: "Work And Education",
        key: "work_and_education",
    },
];
</script>
<template>
    <div class="flex sm:flex-row flex-col gap-15px">
        <div class="w-[20%] flex flex-col">
            <div
                v-for="menu in menus"
                :key="menu.key"
                class="p-2 hover:bg-[var(--secondary-background)] rounded-md select-none cursor-pointer"
                :class="{ '!bg-dark-50 text-white': selectedMenu == menu.key }"
                @click="selectedMenu = menu.key"
            >
                {{ menu.label }}
            </div>
        </div>
        <div v-if="selectedMenu == 'overview'" class="w-[80%]">
            <h2>This is Overview page</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dicta, est sed vitae similique labore illum voluptatibus dolor
            repellendus doloribus nobis adipisci quae deleniti eius mollitia quo
            cumque consequatur voluptatem? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Numquam dicta, est sed vitae similique
            labore illum voluptatibus dolor repellendus doloribus nobis adipisci
            quae deleniti eius mollitia quo cumque consequatur voluptatem?
            Numquam dicta, est sed vitae similique labore illum voluptatibus
            dolor repellendus doloribus nobis adipisci quae deleniti eius
            mollitia quo cumque consequatur voluptatem?
        </div>
    </div>
</template>
