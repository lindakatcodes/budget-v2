<script setup lang="ts">
import { RouterView } from "vue-router";
import MainMenu from "@/components/MainMenu.vue";
</script>

<template>
  <MainMenu />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  font-weight: var(--regular);
}
</style>
