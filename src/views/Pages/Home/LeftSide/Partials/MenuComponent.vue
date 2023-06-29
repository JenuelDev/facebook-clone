<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { Notify } from "notiflix";
import { onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const prop = defineProps<{
    menu: {
        type: string;
        title: string;
        icon: string;
        src: string;
        path: string;
    };
}>();

function changeRoute(path: string) {
    if (path == "#") {
        Notify.failure("No Page Created For This one");
        return;
    }
    router.push(path);
}
</script>
<template>
    <!-- 
        we used route.matched to check if we are in the right route parent,
        for this menu to stay active even if we refresh
    -->
    <div
        v-if="prop.menu.type === 'icon'"
        class="flex items-center pl-3 relative cursor-pointer group"
        @click="changeRoute(prop.menu.path)"
    >
        <span
            v-show="route.matched.some(({ path }) => path == prop.menu.path)"
            class="absolute h-full w-5px bg-[var(--primary)] left-0 rounded-tr-md rounded-br-md"
        ></span>
        <div
            class="flex items-center gap-4 group-hover:bg-[var(--secondary-background)] w-full p-2 rounded-md"
        >
            <Icon
                class="text-size-23px w-30px"
                :class="{
                    'text-[var(--primary)]': route.matched.some(
                        ({ path }) => path == prop.menu.path
                    ),
                }"
                v-if="prop.menu.icon"
                :icon="prop.menu.icon"
            />
            <span class="m-0 p-0 lg:block md:hidden block">{{
                prop.menu.title
            }}</span>
        </div>
    </div>
    <div
        v-else-if="prop.menu.type === 'image'"
        class="flex gap-3 items-center pl-3 cursor-pointer group relative"
        @click="changeRoute(prop.menu.path)"
    >
        <span
            v-show="route.matched.some(({ path }) => path == prop.menu.path)"
            class="absolute h-full w-5px bg-[var(--primary)] left-0 rounded-tr-md rounded-br-md"
        ></span>
        <div
            class="flex gap-3 items-center group-hover:bg-[var(--secondary-background)] w-full p-2 rounded-md"
        >
            <div
                class="h-25px w-25px bg-gray-500 flex items-center justify-center rounded-full overflow-hidden relative"
            >
                <img
                    alt="profile image"
                    class="group-hover:opacity-75"
                    :src="prop.menu.src"
                />
            </div>
            <span class="lg:block md:hidden block">{{ prop.menu.title }}</span>
        </div>
    </div>
</template>
