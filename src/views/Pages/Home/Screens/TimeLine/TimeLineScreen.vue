<script setup lang="ts">
import StoriesTimeLine from "./Stories/StoriesTimeLine.vue";
import FeedTimeline from "./Feed/FeedTimeline.vue";
import PostingArea from "./Post/PostingArea.vue";
</script>
<template>
    <div class="">
        <div class="bg-[var(--secondary-background)] px-10px rounded-xl">
            <StoriesTimeLine />
        </div>
        <div
            class="px-10px py-2 bg-[var(--secondary-background)] my-3 rounded-xl"
        >
            <PostingArea />
        </div>
        <FeedTimeline />
    </div>
</template>
