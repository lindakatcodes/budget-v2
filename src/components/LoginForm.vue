<template>
  <h2>
    Welcome to your budgeting journey! Please sign in with Google to get
    started.
  </h2>
  <button @click="handleLogin()" :disabled="isLoading">Log in</button>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const store = useUserStore();
const { isLoading } = storeToRefs(store);

async function handleLogin() {
  return store.signIn();
}
</script>

<style scoped></style>
