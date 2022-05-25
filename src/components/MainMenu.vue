<template>
  <div class="menu" :class="{ 'menu-open': isOpen }">
    <div class="menu-info">
      <button class="menu-trigger" @click="toggleMenu()"></button>
      <h1 class="menu-title">Budget App!</h1>
    </div>
    <transition name="slide">
      <div class="menu-target" v-show="isOpen">
        <nav>
          <router-link to="/" @click="toggleMenu()">Home</router-link>
          <router-link to="/history" @click="toggleMenu()">History</router-link>
          <router-link to="/dashboard" @click="toggleMenu()"
            >Dashboard</router-link
          >
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
@import "@/assets/base.css";

.menu {
  width: 100%;
  background: var(--background-color);
  /* remember to adjust the menu-target position too if this changes */
  padding: 1rem;
}

.menu-info {
  display: flex;
  align-items: center;
}
.menu-title {
  color: var(--text-color);
  font-weight: var(--bold);
  text-align: center;
  flex-grow: 1;
}

.menu-trigger {
  width: 35px;
  height: 25px;
  background: transparent;
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
}

.menu-trigger::before,
.menu-trigger::after {
  content: "";
  display: block;
  width: 100%;
  height: 6px;
  background: var(--accent-color);
  position: absolute;
  left: 0;
  transition: all 0.2s ease-in;
}

.menu-trigger::before {
  top: 0;
}

.menu-trigger::after {
  bottom: 0;
}

.menu-open .menu-trigger::before {
  transform: translateY(10px) rotate(45deg);
}

.menu-open .menu-trigger::after {
  transform: translateY(-10px) rotate(-45deg);
}

.menu-target {
  background: var(--background-color);
  height: 100vh;
  width: 55vw;
  position: relative;
  left: -1rem;
  padding: 3%;
  border: 2px solid var(--accent-color);
  border-radius: 0 10px 10px 0;
  opacity: 0;
  z-index: -1;
  transition: opacity z-index 0.4s ease-in-out;
}

.menu-open .menu-target {
  opacity: 1;
  z-index: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-40px);
}

nav {
  display: flex;
  flex-direction: column;
}

nav a {
  margin-bottom: 5%;
  color: var(--text-color);
  font-size: 1.5rem;
}
</style>
