<script lang="ts" setup>
import { reactive } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

const router = useRouter();
const data = reactive({
    loading: false,
});

function submit() {
    data.loading = true;

    setTimeout(() => {
        data.loading = false;
        router.push("/timeline");
    }, 1000);
}
</script>
<template>
    <div class="h-[100vh] flex flex-col">
        <div class="min-h-500px h-full flex items-center justify-center p-20px">
            <div
                class="flex md:flex-row flex-col md:items-center gap-15 w-full max-w-1000px"
            >
                <div class="max-w-800px w-full">
                    <div>
                        <h1
                            class="text-size-50px font-800 text-[var(--primary)] mb-5"
                        >
                            facebook
                        </h1>
                        <p class="text-size-28px max-w-700px">
                            Facebook helps you connect and share with the people
                            in your life
                        </p>
                    </div>
                </div>
                <div
                    class="p-5 rounded-lg shadow-lg max-w-400px flex flex-col gap-3 w-full bg-white"
                >
                    <input
                        type="text"
                        placeholder="Email address or phone number"
                        class="py-14px px-16px rounded-md w-full border active:outline-[var(--primary)] focus:outline-[var(--primary)]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        class="py-14px px-16px rounded-md w-full border active:outline-[var(--primary)] focus:outline-[var(--primary)]"
                    />
                    <button
                        class="py-14px px-16px w-full bg-[var(--primary)] text-white text-size-20px font-600 rounded-md"
                        @click="submit"
                        :disabled="data.loading"
                    >
                        <span v-show="!data.loading">Log In</span>
                        <Icon
                            v-show="data.loading"
                            class="text-size-17px"
                            icon="eos-icons:bubble-loading"
                        />
                    </button>
                    <a
                        href="#"
                        class="mx-auto text-[var(--primary)]"
                        :disabled="data.loading"
                    >
                        Forgotten Password
                    </a>
                    <hr />
                    <button
                        class="py-14px px-16px bg-[var(--green)] text-white text-size-17px rounded-md mx-auto"
                        :disabled="data.loading"
                    >
                        Create New Account
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full py-5 bg-white">
            <div class="max-w-1000px mx-auto w-full">
                This is a footer, you can add whatever you like in here.
            </div>
        </div>
    </div>
</template>
