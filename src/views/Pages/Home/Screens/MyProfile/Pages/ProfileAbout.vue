<script setup lang="ts">
import ProfileOverview from "./ProfileAbout/ProfileOverview.vue";
import ProfileWorkAndEducation from "./ProfileAbout/ProfileWorkAndEducation.vue";
import { ref } from "vue";
const selectedMenu = ref("overview");
const menus = [
    {
        label: "Overview",
        key: "overview",
        component: ProfileOverview,
    },
    {
        label: "Work And Education",
        key: "work_and_education",
        component: ProfileWorkAndEducation,
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

        <component
            :is="menus.find((item) => item.key === selectedMenu)?.component as {}"
        />
    </div>
</template>
