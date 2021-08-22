<template>
  <div id="app">
    <app-Sidebar></app-Sidebar>
    <transition enter-active-class="animate__animated animate__bounceOutLeft">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppSidebar from "./pages/shared/Sidebar";
export default {
  components: {
    appSidebar: AppSidebar,
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style>
</style>
