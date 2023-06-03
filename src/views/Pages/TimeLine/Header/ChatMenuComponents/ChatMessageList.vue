<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { Block } from "notiflix";

const messages = ref<
    Array<{
        id: string | number;
        type: string;
        latest_message_summary: string;
        communicating_with: string;
        profile_image_thumbnail: string;
    }>
>([]);

function getMessageList() {
    axios
        .get("/data/messenger-list.json")
        .then(({ data }: { data: any }) => {
            messages.value = data.data;
        })
        .catch((e) => {
            alert(e);
        })
        .finally(() => Block.remove("#chat-message-list"));
}

onMounted(() => {
    Block.standard("#chat-message-list", {
        backgroundColor: "var(--background)",
    });
    setTimeout(() => {
        getMessageList();
    }, 2000);
});
</script>
<template>
    <div id="chat-message-list" class="h-full overflow-y-auto pr-1">
        <div
            v-for="message in messages"
            :key="message.id"
            class="flex gap-2 p-2 light:hover:bg-[var(--background)] cursor-pointer rounded-lg relative group"
        >
            <div
                class="relative h-40px w-40px bg-[var(--background)] rounded-full overflow-hidden"
            >
                <img
                    :src="message.profile_image_thumbnail"
                    class="absolute"
                    alt=""
                />
            </div>
            <div>
                <div class="-mb-7px">{{ message.communicating_with }}</div>
                <small class="opacity-60">{{
                    message.latest_message_summary
                }}</small>
            </div>
            <div
                class="h-40px w-40px light:bg-white shadow-md flex items-center justify-center absolute right-60px rounded-full hidden group-hover:flex light:hover:bg-gray-300 dark:bg-[var(--third-background)] dark:hover:bg-[var(--background)] top-10px"
            >
                <Icon class="text-size-25px" icon="mdi:dots-horizontal" />
            </div>
        </div>
    </div>
</template>
