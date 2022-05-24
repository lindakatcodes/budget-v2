<template>
  <div class="menu" :class="{ 'menu-open': isOpen }">
    <div class="menu-info">
      <button class="menu-trigger" @click="toggleMenu()"></button>
      <h1 class="menu-title">Budget App!</h1>
    </div>
    <transition>
      <div class="menu--target" v-show="isOpen">
        <nav>
          <p>Menu is open!</p>
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
  width: 20px;
  height: 12px;
  background: transparent;
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
}

.menu-trigger::before,
.menu-trigger::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
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
  transform: translateY(5px) rotate(45deg);
}

.menu-open .menu-trigger::after {
  transform: translateY(-5px) rotate(-45deg);
}
</style>
