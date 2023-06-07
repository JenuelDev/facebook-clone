<script lang="ts" setup>
import HeaderComponent from "./Header/HeaderComponent.vue";
import LeftSideContent from "./LeftSide/LeftSideContent.vue";
import RightSideContent from "./RightSide/RightSideContent.vue";
</script>
<template>
    <HeaderComponent />
    <div class="pt-70px flex justify-between">
        <LeftSideContent />
        <div class="max-w-600px w-full">Time Line Page</div>
        <RightSideContent />
    </div>
</template>
