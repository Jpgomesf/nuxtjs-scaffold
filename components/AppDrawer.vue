<script setup lang="ts">
const { drawer } = useDrawer();
const { drawerItems } = useDrawerItems();

</script>
<template>
  <v-navigation-drawer :rail="!drawer">
    <v-list>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="i in drawerItems" :prepend-icon="i.icon" :title="i.title" :value="i.value"
        :to="i.link"></v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-logout" title="Logout" value="Logout"></v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
