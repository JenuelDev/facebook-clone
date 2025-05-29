<script lang="ts" setup>
import { reactive } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import useThemeStore from "@/stores/theme";

const themeStore = useThemeStore();
const router = useRouter();
const data = reactive({
    loading: false,
});

function submit() {
    data.loading = true;

    setTimeout(() => {
        data.loading = false;
        router.push("/home/main");
    }, 1000);
}
</script>
<template>
    <div class="px-30px py-5">
        <div><b>⚠️ Disclaimer & Security Notice</b></div>
        This website is a clone created for educational and demonstrational
        purposes only. It is not affiliated with or endorsed by Facebook, Meta
        Platforms Inc., or any of its subsidiaries. Do NOT enter real login
        credentials, personal information, or financial data. This site does not
        collect or store any user information. The appearance of this website is
        intended to replicate Facebook solely for testing, UI/UX demonstration,
        or academic learning. By continuing, you acknowledge that you understand
        this is a non-functional simulation and not the real Facebook platform.
    </div>
    <div class="fixed top-10px right-10px text-size-30px cursor-pointer">
        <transition name="fade">
            <Icon
                v-if="themeStore.mode == 'light'"
                icon="material-symbols:dark-mode-rounded"
                @click="themeStore.mode = 'dark'"
            />
            <Icon
                v-else-if="themeStore.mode == 'dark'"
                icon="ic:sharp-wb-sunny"
                @click="themeStore.mode = 'light'"
            />
        </transition>
    </div>
    <div class="h-[100vh] flex flex-col">
        <div class="min-h-500px h-full flex items-center justify-center p-20px">
            <div
                class="flex md:flex-row flex-col md:items-center gap-15 w-full max-w-1000px"
            >
                <div class="max-w-800px w-full">
                    <div>
                        <h1
                            class="text-size-50px font-800 text-[var(--primary)] mb-5 select-none"
                        >
                            facebook
                        </h1>
                        <p class="text-size-28px max-w-700px select-none">
                            Facebook helps you connect and share with the people
                            in your life
                        </p>
                    </div>
                </div>
                <div
                    class="p-5 rounded-lg shadow-lg max-w-400px flex flex-col gap-3 w-full light:bg-white dark:bg-[var(--secondary-background)]"
                >
                    <input
                        class="py-14px px-16px rounded-md w-full outline-none light:border light:active:outline-[var(--primary)] focus:outline-[var(--primary)] dark:bg-[var(--third-background)]"
                        placeholder="Email address or phone number"
                        type="text"
                    />
                    <input
                        class="py-14px px-16px rounded-md w-full outline-none light:border light:active:outline-[var(--primary)] focus:outline-[var(--primary)] dark:bg-[var(--third-background)]"
                        placeholder="Password"
                        type="password"
                    />
                    <button
                        :disabled="data.loading"
                        class="py-14px px-16px w-full bg-[var(--primary)] text-white text-size-20px font-600 rounded-md"
                        @click="submit"
                    >
                        <span v-show="!data.loading">Log In</span>
                        <Icon
                            v-show="data.loading"
                            class="text-size-17px"
                            icon="eos-icons:bubble-loading"
                        />
                    </button>
                    <a
                        :disabled="data.loading"
                        class="mx-auto text-[var(--primary)]"
                        href="#"
                    >
                        Forgotten Password
                    </a>
                    <hr />
                    <button
                        :disabled="data.loading"
                        class="py-14px px-16px bg-[var(--green)] text-white text-size-17px rounded-md mx-auto"
                    >
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
        <div
            class="w-full py-5 light:bg-white dark:bg-[var(--secondary-background)]"
        >
            <div class="max-w-1000px mx-auto w-full">
                This is a footer, you can add whatever you like in here.
            </div>
        </div>
    </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    position: absolute;
    opacity: 0;
}
</style>
