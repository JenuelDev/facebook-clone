<script setup lang="ts">
import FeedItem from "./Partials/FeedItem.vue";
import axios from "axios";
import { Block } from "notiflix";
import { onMounted, ref } from "vue";

// You can set your own feed/post items types here
const feeds = ref<
    Array<{
        id: string | number;
        slug: string;
        summary: string;
        tags: Array<string>;
        title: string;
        updated_at: string;
        cover_img: string;
    }>
>([]);

function getPosts() {
    // We can just grab our list of feeds or timeline posts here. You can grab your own feeds.
    // for this example I am Getting my article feeds:
    Block.standard("#timeline-view-posts", {
        backgroundColor: "var(--background)",
    });
    axios
        .get("https://jenuel.dev/articles.json")
        .then(({ data }) => {
            feeds.value = data;
        })
        .finally(() => {
            Block.remove("#timeline-view-posts");
        });
}

onMounted(() => {
    // lets get our posts onMounted
    getPosts();
});
</script>
<template>
    <div id="timeline-view-posts" class="min-h-500px w-full">
        <!-- We do a for loop to loop through our posts items. -->
        <div
            v-for="feed in feeds"
            :key="feed.id"
            class="p-10px bg-[var(--secondary-background)] rounded-lg mb-15px"
        >
            <FeedItem
                author="JenuelDev"
                author_profile_img="/images/profile/profile.jpg"
                :caption="feed.summary"
                :type="feed.cover_img ? 'image' : 'text'"
                :images="[feed.cover_img]"
                :date="feed.updated_at"
            />
        </div>
    </div>
</template>
