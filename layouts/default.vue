<template>
  <v-app>
    <AppBar />
    <AppDrawer />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const drawer = ref(true)
</script>
