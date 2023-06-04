<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { Block } from "notiflix";

const notifications = ref<
    Array<{
        id: string | number;
        notification_type: string;
        message: string;
        communicating_with: string;
        image_icon: string;
    }>
>([]);

function getMessageList() {
    axios
        .get("/data/notification-list.json")
        .then(({ data }: { data: any }) => {
            notifications.value = data.list;
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
            v-for="notification in notifications"
            :key="notification.id"
            class="flex gap-4 p-2 light:hover:bg-[var(--background)] cursor-pointer rounded-lg relative group dark:hover:bg-[var(--third-background)] mb-1 items-center"
        >
            <div class="relative">
                <div
                    class="relative h-50px w-50px bg-[var(--background)] rounded-full overflow-hidden"
                >
                    <img
                        :src="notification.image_icon"
                        class="absolute"
                        alt=""
                    />
                </div>
                <div
                    class="flex items-center justify-center w-30px h-30px absolute -bottom-2 -right-2 rounded-full"
                    :class="{
                        'bg-[var(--primary)]': [
                            'bell',
                            'group',
                            'post',
                        ].includes(notification.notification_type),
                        'bg-red-500': ['live', 'react-heart'].includes(
                            notification.notification_type
                        ),
                        'bg-pink-600':
                            notification.notification_type == 'birthday',
                        'bg-green-500':
                            notification.notification_type == 'comment',
                    }"
                >
                    <Icon
                        v-if="notification.notification_type == 'bell'"
                        icon="ic:baseline-notifications"
                        class="text-size-23px"
                    />
                    <Icon
                        v-if="notification.notification_type == 'live'"
                        icon="material-symbols:live-tv"
                        class="text-size-23px"
                    />
                    <Icon
                        v-if="notification.notification_type == 'group'"
                        icon="material-symbols:groups"
                        class="text-size-20px"
                    />
                    <Icon
                        v-if="notification.notification_type == 'birthday'"
                        icon="icon-park-twotone:birthday-cake"
                        class="text-size-23px"
                    />
                    <Icon
                        v-if="notification.notification_type == 'post'"
                        icon="material-symbols:post-add"
                        class="text-size-23px"
                    />
                    <Icon
                        v-if="notification.notification_type == 'comment'"
                        icon="iconamoon:comment-dots-fill"
                        class="text-size-23px"
                    />
                    <Icon
                        v-if="notification.notification_type == 'react-heart'"
                        icon="material-symbols:favorite"
                        class="text-size-23px"
                    />
                </div>
            </div>
            <div>
                <div
                    class="text-size-15px leading-normal"
                    v-html="notification.message"
                ></div>
            </div>
        </div>
    </div>
</template>
