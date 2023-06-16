<script lang="ts" setup>
import ContactsContent from "./Contacts/ContactsContent.vue";
import SponsorsContent from "./Sponsors/SponsorsContent.vue";
</script>
<template>
    <div
        class="sticky top-0 w-full max-w-300px pt-10px h-[calc(100% - 70px)] md:block hidden overflow-y-auto overflowing-div pb-20px"
    >
        <SponsorsContent />
        <ContactsContent />
    </div>
</template>
