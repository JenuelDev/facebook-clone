<script setup lang="ts">
import FeedItem from "./Partials/FeedItem.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

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

onMounted(() => {
    axios.get("https://brojenuel.com/articles.json").then(({ data }) => {
        feeds.value = data;
    });
});
</script>
<template>
    <div>
        <div
            v-for="feed in feeds"
            :key="feed.id"
            class="p-10px bg-[var(--secondary-background)] rounded-lg mb-15px"
        >
            <FeedItem
                author="BroJenuel"
                author_profile_img="/images/profile/profile.jpg"
                :caption="feed.summary"
                :type="feed.cover_img ? 'image' : 'text'"
                :images="[feed.cover_img]"
            />
        </div>
    </div>
</template>
