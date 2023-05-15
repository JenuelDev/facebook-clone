<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const emits = defineEmits(["action"]);
const menuOptions = [
    {
        label: "Help Center",
        icon: "material-symbols:help",
        key: "help-center",
        hasContent: false
    },
    {
        label: "Support Inbox",
        icon: "ic:round-mail",
        key: "support-inbox",
        hasContent: false
    },
    {
        label: "Report problem",
        icon: "fluent:comment-error-20-filled",
        key: "report-problem",
        hasContent: false
    }
];

</script>

<template>
    <div>
        <div class="flex gap-3 items-center">
            <div
                class="w-40px h-40px rounded-full bg-white hover:bg-gray-200 flex items-center justify-center cursor-pointer text-size-20px"
                @click="emits('action', 'default')">
                <Icon icon="material-symbols:arrow-back" />
            </div>
            <div class="font-700 text-size-20px">Help & Support</div>
        </div>
        <div class="mt-5">
            <div
                v-for="menuOption in menuOptions"
                :key="menuOption.label"
                class="flex items-center justify-between hover:bg-gray-100 active:bg-gray-200 pr-3 rounded-lg cursor-pointer p-1 transition-all"
                @click="emits('action', menuOption.key)"
            >
                <div class="flex items-center gap-3">
                    <div
                        class="h-40px w-40px transform bg-gray-200 hover:bg-gray-300 active:scale-90 cursor-pointer flex items-center justify-center rounded-full"
                    >
                        <Icon
                            :icon="menuOption.icon"
                            class="md:text-size-20px text-size-20px"
                        />
                    </div>
                    <div>{{ menuOption.label }}</div>
                </div>
                <Icon
                    v-if="menuOption.hasContent"
                    icon="material-symbols:arrow-forward-ios"
                />
            </div>
        </div>
    </div>
</template>