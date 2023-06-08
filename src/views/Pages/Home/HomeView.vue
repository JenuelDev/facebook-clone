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
        <div class="max-w-600px w-full h-[calc(100% - 70px)]">
            <RouterView />
        </div>
        <RightSideContent />
    </div>
</template>
