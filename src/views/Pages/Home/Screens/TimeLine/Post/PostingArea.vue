<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>
<template>
    <div>
        <div class="flex items-center gap-5">
            <div class="h-40px w-40px overflow-hidden rounded-full">
                <img
                    src="/images/profile/profile.jpg"
                    width="40"
                    height="40"
                    alt=""
                />
            </div>
            <div class="relative dark:text-white w-full">
                <input
                    class="py-6px pl-15px pr-16px rounded-full w-full light:border light:active:outline-[var(--primary)] light:focus:outline-[var(--primary)] w-full light:bg-[var(--background)] dark:bg-[var(--third-background)] dark:border-[var(--third-background)]"
                    placeholder="What is on your mind?"
                    type="text"
                />
            </div>
        </div>
        <div class="h-1px w-full bg-[var(--third-background)] my-2"></div>
        <div class="flex sm:flex-row flex-col justify-around select-none">
            <div
                class="flex items-center gap-2 dark:hover:bg-[var(--third-background)] hover:bg-[var(--background)] w-full p-3 rounded-lg cursor-pointer transform scale-100 active:scale-95"
            >
                <Icon
                    class="text-red-500 text-size-25px"
                    icon="material-symbols:auto-videocam-sharp"
                />
                <span>Live Video</span>
            </div>
            <div
                class="flex items-center gap-2 dark:hover:bg-[var(--third-background)] hover:bg-[var(--background)] w-full p-3 rounded-lg cursor-pointer transform scale-100 active:scale-95"
            >
                <Icon
                    class="text-green-500 text-size-25px"
                    icon="streamline:image-photo-polaroid-photos-polaroid-picture-camera-photography-photo-pictures"
                />
                <span>Photo/video</span>
            </div>
            <div
                class="flex items-center gap-2 dark:hover:bg-[var(--third-background)] hover:bg-[var(--background)] w-full p-3 rounded-lg cursor-pointer transform scale-100 active:scale-95"
            >
                <Icon class="text-orange-400 text-size-25px" icon="ph:smiley" />
                <span>Feeling/activity</span>
            </div>
        </div>
    </div>
</template>
