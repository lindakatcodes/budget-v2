<template>
  <aside>
    <MainMenu />
  </aside>
  <main>
    <section v-if="isAuthenticated">
      <h2>Welcome, {{ user.name }}!</h2>
    </section>
    <section v-else>
      <LoginForm />
    </section>
  </main>
</template>

<script setup lang="ts">
import MainMenu from "@/components/MainMenu.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import LoginForm from "../components/LoginForm.vue";

const store = useUserStore();
let { isAuthenticated, user } = storeToRefs(store);

store.getUserInfo();
</script>

<style></style>
