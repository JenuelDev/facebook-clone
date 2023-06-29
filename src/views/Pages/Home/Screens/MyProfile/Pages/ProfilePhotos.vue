<script setup lang="ts">
/**
 * In this part, you can manage photos, you can set your own style,
 * but for this one, Im going to grid it in 2 columns
 */
const photos = [
    "https://cdn.shopify.com/s/files/1/0070/7032/files/anva.png?format=jpg&quality=90&v=1652372867",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0",
];
</script>
<template>
    <div class="grid grid-cols-2 gap-1">
        <div
            v-for="(photo, index) in photos"
            :key="index"
            class="h-150px overflow-hidden relative"
        >
            <img
                :src="photo"
                height="300"
                class="absolute transform scale-125"
            />
        </div>
    </div>
</template>
