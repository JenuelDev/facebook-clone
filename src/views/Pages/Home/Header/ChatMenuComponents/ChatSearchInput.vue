<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>
<template>
    <div class="relative dark:text-white">
        <input
            class="py-6px pl-40px pr-16px rounded-full w-full light:border light:active:outline-[var(--primary)] light:focus:outline-[var(--primary)] w-full light:bg-[var(--background)] dark:bg-[var(--third-background)] dark:border-[var(--third-background)]"
            placeholder="Search Messenger"
            type="text"
        />
        <Icon
            class="text-size-22px opacity-50 absolute left-10px top-10px"
            icon="material-symbols:search"
        />
    </div>
</template>
