<script setup lang="ts">
import { ref } from "vue";
const selectedChip = ref("inbox");
const chips = ["inbox", "community"];
</script>
<template>
    <div class="flex gap-5px">
        <div
            v-for="chip in chips"
            :key="chip"
            class="px-3 py-1 light:hover:bg-[var(--background)] dark:hover:bg-[var(--third-background)] rounded-full capitalize cursor-pointer"
            :class="{
                'text-[var(--primary)] bg-[var(--background)]':
                    chip == selectedChip,
            }"
            @click="selectedChip = chip"
        >
            {{ chip }}
        </div>
    </div>
</template>
