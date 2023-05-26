<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import DropDownComponent from "@/components/DropDown/DropDownComponent.vue";
import { ref, watch } from "vue";
import ChatHeader from "./ChatMenuComponents/ChatNotificationHeader.vue";
import ChatSearchInput from "./ChatMenuComponents/ChatSearchInput.vue";
import ChatChipButtons from "./ChatMenuComponents/ChatChipButtons.vue";
import ChatMessageList from "./ChatMenuComponents/ChatMessageList.vue";

const showMenu = ref(false);
const selectedMenu = ref("default");

watch(
    () => showMenu.value,
    (val) => {
        if (!val) {
            setTimeout(() => {
                selectedMenu.value = "default"; // reset menu
            }, 500);
        }
    }
);
</script>
<template>
    <DropDownComponent v-model="showMenu" box-width="350px">
        <div class="relative transform active:scale-90 cursor-pointer group">
            <div
                class="h-40px w-40px transform light:bg-gray-200 dark:bg-[var(--third-background)] light:hover:bg-gray-300 dark:hover:bg-gray-600 active:scale-90 cursor-pointer flex items-center justify-center rounded-full dark:text-gray-200"
            >
                <Icon
                    class="md:text-size-20px text-size-20px"
                    icon="mdi:facebook-messenger"
                />
            </div>
        </div>
        <template #content>
            <div
                class="p-3 overflow-hidden min-h-400px h-[80vh] flex flex-col gap-10px"
                role="none"
            >
                <ChatHeader />
                <ChatSearchInput />
                <ChatChipButtons />
                <ChatMessageList v-if="showMenu" />
            </div>
            <div class="text-center py-2 border-t dark:border-t-dark-100">
                <a
                    href="#"
                    class="text-[var(--primary)] font-700 hover:underline text-size-12px"
                >
                    See All in Messenger
                </a>
            </div>
        </template>
    </DropDownComponent>
</template>
