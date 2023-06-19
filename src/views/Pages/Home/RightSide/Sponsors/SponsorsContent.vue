<script setup lang="ts">
const sponsorsList = [
    {
        link: "https://brojenuel.com/blog/Create-Chrome-Extension-Using-Vue-The-Easiest-Way",
        img: "https://i.imgur.com/ZOIrwhRb.png",
        title: "Create Chrome Extension Using Vue",
        sub_title: "easy it is to create a Chrome extension",
    },
    {
        link: "https://brojenuel.com",
        img: "https://i.imgur.com/QROjWHIb.png",
        title: "Creator Of This FB Clone",
        sub_title: "Visit his website to know more about him.",
    },
];
</script>
<template>
    <div class="pr-10px mb-15px">
        <h5 class="lg:text-lg text-xs lg:text-left text-right">Sponsors</h5>
        <a
            v-for="sponsor in sponsorsList"
            :key="sponsor.title"
            :href="sponsor.link"
            target="_blank"
        >
            <div
                class="p-2 hover:bg-[var(--secondary-background)] w-full flex gap-3 items-center"
            >
                <img
                    class="rounded-lg lg:w-full lg:max-w-130px max-w-50px"
                    :src="sponsor.img"
                    width="130"
                    height="130"
                />
                <div class="lg:block hidden">
                    <div class="font-bold">
                        {{ sponsor.title }}
                    </div>
                    <div class="font-100 text-size-14px">
                        {{ sponsor.sub_title }}
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>
