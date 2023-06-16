<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const emit = defineEmits(["update:modelValue"]);
const prop = defineProps<{
    modelValue: string;
    menu: {
        key: string;
        type: string;
        title: string;
        icon: string;
        src: string;
    };
}>();

const value = computed({
    get() {
        return prop.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});
</script>
<template>
    <div
        v-if="prop.menu.type === 'icon'"
        class="flex items-center pl-3 relative cursor-pointer group"
        @click="value = prop.menu.key"
    >
        <span
            v-show="value == prop.menu.key"
            class="absolute h-full w-5px bg-[var(--primary)] left-0 rounded-tr-md rounded-br-md"
        ></span>
        <div
            class="flex items-center gap-4 group-hover:bg-[var(--secondary-background)] w-full p-2 rounded-md"
        >
            <Icon
                class="text-size-23px w-30px"
                :class="{ 'text-[var(--primary)]': value == prop.menu.key }"
                v-if="prop.menu.icon"
                :icon="prop.menu.icon"
            />
            <span class="m-0 p-0 lg:block md:hidden block">{{
                prop.menu.title
            }}</span>
        </div>
    </div>
    <div
        v-else-if="prop.menu.type === 'image'"
        class="flex gap-3 items-center pl-3 cursor-pointer group relative"
        @click="value = prop.menu.key"
    >
        <span
            v-show="value == prop.menu.key"
            class="absolute h-full w-5px bg-[var(--primary)] left-0 rounded-tr-md rounded-br-md"
        ></span>
        <div
            class="flex gap-3 items-center group-hover:bg-[var(--secondary-background)] w-full p-2 rounded-md"
        >
            <div
                class="h-25px w-25px bg-gray-500 flex items-center justify-center rounded-full overflow-hidden relative"
            >
                <img
                    alt="profile image"
                    class="group-hover:opacity-75"
                    :src="prop.menu.src"
                />
            </div>
            <span class="lg:block md:hidden block">{{ prop.menu.title }}</span>
        </div>
    </div>
</template>
