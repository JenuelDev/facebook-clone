<script lang="ts" setup>
import HeaderComponent from "./Header/HeaderComponent.vue";
import LeftSideContent from "./LeftSide/LeftSideContent.vue";
import RightSideContent from "./RightSide/RightSideContent.vue";
</script>
<template>
    <HeaderComponent />
    <div
        class="flex justify-between h-100vh overflow-y-auto pt-[var(--header-height)] overflowing-div"
    >
        <LeftSideContent />
        <div
            class="w-full h-[calc(100% - 70px)] mx-auto overflow-y-auto overflowing-div scroll-bar-md"
        >
            <div
                class="max-w-600px h-100% w-full mx-auto px-15px h-full pt-2 pb-5"
            >
                <RouterView />
            </div>
        </div>
        <RightSideContent />
    </div>
</template>
