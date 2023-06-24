<script setup lang="ts">
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Icon } from "@iconify/vue";
dayjs.extend(relativeTime);

const props = defineProps({
    author: String,
    author_profile_img: String,
    caption: String,
    type: {
        type: [String],
        default: () => "image",
        validator(value: string) {
            return ["image", "video", "ads", "text"].includes(value);
        },
    },
    images: {
        type: Array,
        default: () => [],
    },
    date: String,
});
</script>
<template>
    <div>
        <div class="flex items-center gap-5 mb-10px">
            <div class="h-35px w-35px overflow-hidden rounded-full">
                <img
                    :src="props.author_profile_img"
                    width="35"
                    height="35"
                    alt=""
                />
            </div>
            <div>
                <div class="relative dark:text-white w-full">
                    {{ props.author }}
                </div>
                <div class="text-sm opacity-80 flex items-center gap-1">
                    <span>{{ dayjs(props.date).fromNow() }}</span>
                    <div
                        class="h-2px w-2px rounded-full dark:bg-white bg-black"
                    ></div>
                    <Icon icon="material-symbols:public" />
                </div>
            </div>
        </div>
        <div class="pb-2 cursor-pointer">
            <div>
                {{ props.caption }}
            </div>
            <div>
                <!--
                    Since my articles has only one image I only rendered it this way,
                    But if you multiple images, you can set your style on how you render your images here
                -->
                <img
                    class="rounded-md"
                    v-for="(img, index) in props.images"
                    :key="index"
                    :src="(img as string)"
                    alt=""
                />
            </div>
        </div>
        <!-- This is the reactions area, wrote it in a static way, you can dynamically change it whatever you want -->
        <div
            class="flex justify-between py-10px items-center border-b dark:border-b-dark-50"
        >
            <!-- This is your reactions -->
            <div class="flex items-center">
                <div
                    class="w-25px h-25px rounded-full bg-blue-600 text-light-50 flex items-center justify-center"
                >
                    <Icon icon="mdi:like" />
                </div>
                <div
                    class="w-25px h-25px rounded-full bg-red-600 text-light-50 flex items-center justify-center -ml-5px"
                >
                    <Icon icon="mdi:heart" />
                </div>
                <div
                    class="w-25px h-25px rounded-full text-light-50 flex items-center justify-center text-size-25px -ml-5px"
                >
                    <Icon icon="twemoji:astonished-face" />
                </div>
                <div
                    class="ml-2 text-sm hover:underline cursor-pointer transform scale-100 active:scale-95 select-none"
                >
                    Johnson, James, and others
                </div>
            </div>
            <div
                class="hover:underline cursor-pointer transform scale-100 active:scale-95 select-none"
            >
                3 comments
            </div>
        </div>
        <!-- posts actions, you can add your own function for button clicks -->
        <div class="flex justify-around mt-2 select-none">
            <div
                class="w-full p-2 cursor-pointer dark:hover:bg-[var(--third-background)] hover:bg-[var(--background)] rounded-md transform scale-100 active:scale-95"
            >
                <div class="flex justify-center items-center gap-2">
                    <Icon icon="mdi:like-outline" />
                    <span>Like</span>
                </div>
            </div>
            <div
                class="w-full p-2 cursor-pointer dark:hover:bg-[var(--third-background)] hover:bg-[var(--background)] rounded-md transform scale-100 active:scale-95"
            >
                <div class="flex justify-center items-center gap-2">
                    <Icon icon="mdi:comment-outline" />
                    <span>Comment</span>
                </div>
            </div>
            <div
                class="w-full p-2 cursor-pointer dark:hover:bg-[var(--third-background)] hover:bg-[var(--background)] rounded-md transform scale-100 active:scale-95"
            >
                <div class="flex justify-center items-center gap-2">
                    <Icon icon="uil:share" />
                    <span>Share</span>
                </div>
            </div>
        </div>
    </div>
</template>
