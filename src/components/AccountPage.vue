<template>
  <div class="tabs">
    <div role="tablist" aria-label="Account Names">
      <button
        v-for="account in accountStore.accounts"
        :key="account.account_id"
      >
        {{ account.name }}
      </button>
      <button role="tab" aria-selected="false" id="new-account">+ New</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/models/models";
import { useUserAccountsStore } from "@/stores/userAccounts";

const props = defineProps<{ user: User }>();
const accountStore = useUserAccountsStore();
// const currentTab = ref("");

accountStore.getUserAccounts(props.user.id);
</script>

<style scoped></style>
