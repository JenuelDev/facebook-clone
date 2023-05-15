<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import DropDownComponent from "@/components/DropDown/DropDownComponent.vue";
import DefaultContent from "./ProfileMenuContent/DefaultContent.vue";
import { ref } from "vue";
import SettingsAndPrivacy from "@/views/Pages/TimeLine/Header/ProfileMenuContent/SettingsAndPrivacy.vue";
import HelpAndSupport from "@/views/Pages/TimeLine/Header/ProfileMenuContent/HelpAndSupport.vue";
import DisplayAndAccessibility from "@/views/Pages/TimeLine/Header/ProfileMenuContent/DisplayAndAccessibility.vue";

const selectedMenu = ref("default");

function actionHandler(key: string) {
    if (key == 'feedback') {
        alert("Feed Back");
        return
    }

    if (key == 'logout') {
        alert("Logout");
        return
    }

    selectedMenu.value = key;
}
</script>
<template>
    <DropDownComponent box-width="350px">
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
                class="md:text-size-20px text-size-20px bottom-0 right-0 absolute border-1 bg-white border-white rounded-full shadow-sm"
                icon="ic:outline-more-horiz"
            />
        </div>
        <template #content>
            <div class="p-3 overflow-hidden" role="none">
                <transition name="facebook-menu-transition">
                    <DefaultContent v-if="selectedMenu === 'default'" @action="actionHandler" />
                    <SettingsAndPrivacy v-else-if="selectedMenu === 'settings'" @action="actionHandler" />
                    <HelpAndSupport v-else-if="selectedMenu === 'help'" @action="actionHandler" />
                    <DisplayAndAccessibility v-else-if="selectedMenu === 'display'" @action="actionHandler" />
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