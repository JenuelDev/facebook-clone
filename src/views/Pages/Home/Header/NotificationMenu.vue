<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import DropDownComponent from "@/components/DropDown/DropDownComponent.vue";
import { ref, watch } from "vue";
import NotificationHeader from "./NotificationMenuComponents/NotificationHeader.vue";
import NotificationList from "./NotificationMenuComponents/NotificationList.vue";

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
                :class="{ '!bg-[var(--primary-lite)]': showMenu }"
            >
                <Icon
                    class="md:text-size-20px text-size-20px"
                    :class="{ 'text-[var(--primary)]': showMenu }"
                    icon="mdi:bell"
                />
            </div>
        </div>
        <template #content>
            <div
                class="p-3 overflow-hidden min-h-400px h-[80vh] flex flex-col gap-10px"
                role="none"
            >
                <NotificationHeader />
                <div class="flex justify-between">
                    <div>New</div>
                    <div
                        class="text-[var(--primary)] hover:underline cursor-pointer"
                    >
                        See All
                    </div>
                </div>
                <NotificationList v-if="showMenu" />
            </div>
        </template>
    </DropDownComponent>
</template>
