<template>
  <aside>
    <MainMenu :userInfo="{ ...user }" />
  </aside>
  <main>
    <section v-if="isAuthenticated">
      <AccountPage :user="{ ...user }" />
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
import AccountPage from "../components/AccountPage.vue";

const store = useUserStore();
let { isAuthenticated, user } = storeToRefs(store);

store.getUserInfo();
</script>

<style></style>
