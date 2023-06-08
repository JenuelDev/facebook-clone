<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import DropDownComponent from "@/components/DropDown/DropDownComponent.vue";
import DefaultContent from "./ProfileMenuContent/DefaultContent.vue";
import { ref, watch } from "vue";
import SettingsAndPrivacy from "@/views/Pages/Home/Header/ProfileMenuContent/SettingsAndPrivacy.vue";
import HelpAndSupport from "@/views/Pages/Home/Header/ProfileMenuContent/HelpAndSupport.vue";
import DisplayAndAccessibility from "@/views/Pages/Home/Header/ProfileMenuContent/DisplayAndAccessibility.vue";
import router from "@/router";

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

function actionHandler(key: string) {
    if (key == "feedback") {
        alert("Feed Back");
        return;
    }

    if (key == "logout") {
        alert("Logged Out!");
        router.push("/");
        return;
    }

    selectedMenu.value = key;
}
</script>
<template>
    <DropDownComponent v-model="showMenu" box-width="350px">
        <div class="relative transform active:scale-90 cursor-pointer group">
            <div
                class="h-40px w-40px bg-gray-500 flex items-center justify-center rounded-full overflow-hidden relative"
            >
                <img
                    alt="profile-image"
                    class="group-hover:opacity-75"
                    src="/images/profile/profile.jpg"
                />
            </div>
            <Icon
                class="md:text-size-20px text-size-20px bottom-0 right-0 absolute border-1 light:bg-white dark:bg-gray-600 light:border-white dark:border-gray-700 rounded-full shadow-sm"
                icon="ic:outline-more-horiz"
            />
        </div>
        <template #content>
            <div class="p-3 overflow-hidden" role="none">
                <transition name="facebook-menu-transition">
                    <DefaultContent
                        v-if="selectedMenu === 'default'"
                        @action="actionHandler"
                    />
                    <SettingsAndPrivacy
                        v-else-if="selectedMenu === 'settings'"
                        @action="actionHandler"
                    />
                    <HelpAndSupport
                        v-else-if="selectedMenu === 'help'"
                        @action="actionHandler"
                    />
                    <DisplayAndAccessibility
                        v-else-if="selectedMenu === 'display'"
                        @action="actionHandler"
                    />
                </transition>
            </div>
        </template>
    </DropDownComponent>
</template>
<style lang="scss">
.facebook-menu-transition-enter-active,
.facebook-menu-transition-leave-active {
    transition: all 0.1s ease-out;
}

.facebook-menu-transition-enter-from {
    opacity: 0;
    transform: translateY(30px);
    position: absolute;
}

.facebook-menu-transition-leave-to {
    opacity: 0;
    transform: translateY(-30px);
    position: absolute;
}
</style>
