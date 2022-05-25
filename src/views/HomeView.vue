<script setup lang="ts">
import MainMenu from "@/components/MainMenu.vue";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const store = useUserStore();
const isAuthenticated = store.isAuthenticated;
const loading = store.isLoading;
let userEmail = ref("");

async function handleLogin() {
  return store.signIn(userEmail.value).then((res) => console.log(res));
}
</script>

<template>
  <aside>
    <MainMenu />
  </aside>
  <main>
    <section v-if="isAuthenticated"></section>
    <section v-else>
      <h2>
        Welcome to your budgeting journey! Please enter your email below to get
        started.
      </h2>
      <label for="email">Email address:</label>
      <input
        v-model.trim="userEmail"
        type="email"
        name="email"
        placeholder="Your email here"
      />
      <button type="submit" @click="handleLogin()" :disabled="loading">
        Sign In
      </button>
    </section>
  </main>
</template>
