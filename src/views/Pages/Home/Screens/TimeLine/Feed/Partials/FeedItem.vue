<script setup lang="ts">
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
            <div class="relative dark:text-white w-full">
                {{ props.author }}
            </div>
        </div>
        <div class="pb-2">
            {{ props.caption }}
        </div>
        <div>
            <img
                class="rounded-md"
                v-for="(img, index) in props.images"
                :key="index"
                :src="(img as string)"
                alt=""
            />
        </div>
    </div>
</template>
