<script setup lang="ts">
const { toggleDrawer } = useDrawer();
</script>
<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>TMS system</v-app-bar-title>
  </v-app-bar>
</template>
