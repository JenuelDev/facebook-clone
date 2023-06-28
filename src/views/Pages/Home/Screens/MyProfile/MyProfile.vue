<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const menuPages = [
    {
        key: "Posts",
        path: "",
    },
    {
        key: "About",
        path: "about",
    },
    {
        key: "Photos",
        path: "photos",
    },
    {
        key: "Videos",
        path: "videos",
    },
    {
        key: "Groups",
        path: "groups",
    },
    {
        key: "More",
        path: "more",
    },
];

function changePage(menu: { key: string; path: string }) {
    router.push("/home/me/" + menu.path);
}
</script>
<template>
    <div>
        <div>
            <div>
                <img src="https://i.imgur.com/HDJMaLr.png" />
            </div>
            <div class="-mt-75px pl-20px">
                <img
                    class="rounded-full border border-5px border-[var(--background)] relative"
                    src="https://i.imgur.com/2R6Qr3mb.jpg"
                    width="150"
                    height="150"
                />
                <div class="mt-20px">
                    <h3 class="text-size-20px font-bold mb-1">BroJenuel</h3>
                    <p class="opacity-50">@BroJenuel</p>

                    <div>
                        <p>
                            Hi! I am a software engineer from the Philippines.
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="flex justify-around pt-20px border-b dark:border-[var(--third-background)] border-gray-400"
            >
                <div
                    v-for="menu in menuPages"
                    :key="`${menu.key}key`"
                    class="hover:bg-[var(--secondary-background)] w-full text-center select-none cursor-pointer rounded-tr-md rounded-tl-md transform scale-100 active:scale-95 h-50px flex flex-col justify-center relative font-bold"
                    @click="changePage(menu)"
                >
                    <span
                        class="opacity-50"
                        :class="{
                            '!opacity-100':
                                route.path == '/home/me/' + menu.path,
                        }"
                    >
                        {{ menu.key }}
                    </span>
                    <div
                        v-show="route.path == '/home/me/' + menu.path"
                        class="absolute -bottom-2px w-40px left-[calc(50%-20px)] h-3px rounded-lg bg-[var(--primary)]"
                    ></div>
                </div>
            </div>
        </div>
        <div class="py-3">
            <!-- This will be the route view for our profile page -->
            <!-- This way we can navigate to different pages inside the profile page -->
            <RouterView />
        </div>
    </div>
</template>
