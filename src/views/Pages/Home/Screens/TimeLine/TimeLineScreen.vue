<script setup lang="ts">
import StoriesTimeLine from "./Stories/StoriesTimeLine.vue";
import FeedTimeline from "./Feed/FeedTimeline.vue";
</script>
<template>
    <div class="px-15px h-full overflow-y-auto pt-2 pb-5">
        <div>
            <StoriesTimeLine />
        </div>
        <FeedTimeline />
    </div>
</template>
