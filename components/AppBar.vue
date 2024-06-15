<script setup lang="ts">
import { useTheme } from 'vuetify';

const { toggleDrawer } = useDrawer();
const version = 'v0.1.0'
const menu = ref(false);  // Controls the visibility of the menu
const notificationsMenu = ref(false);  // Controls the visibility of the menu
const fav = ref(true)
const message = ref(false)
const hints = ref(true)
const versionHistory = ref([
  { version: 'v0.1.0', description: 'Initial release.', value: '0.1.0' },
  { version: 'v0.0.9', description: 'Bug fixes and minor improvements.', value: '0.0.9' },
  { version: 'v0.0.8', description: 'Added new features.', value: '0.0.8' },
  { version: 'v0.0.7', description: 'Performance enhancements.', value: '0.0.7' }
]);

const notifHistory = ref([
  { icon: 'mdi-file', title: 'New contract!', type: 'contract', description: 'Available contract', date: '2020-03-01' },
  { icon: 'mdi-headset', title: 'Ticket Update!', type: 'support', description: 'Ticket sent to develop', date: '2020-03-01' },
]);

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
<template>
  <v-app-bar :elevation="1">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Vortex</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu v-model="notificationsMenu" transition="slide-x-transition" :close-on-content-click="false"
      location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn class="version-button" stacked v-bind="props">
          <v-badge color="error" content="2">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-card min-width="350">
        <v-list lines="two">
          <v-list-subheader>Notifications</v-list-subheader>
          <v-list-item v-for="n in notifHistory">
            <template v-slot:prepend>
              <v-icon class="mr-n4" :icon="n.icon"></v-icon>
            </template>
            <v-list-item-title>{{ n.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ n.description }}</v-list-item-subtitle>
            <template v-slot:append>
              <div class="text-caption mb-4">
                {{ n.date }}
              </div>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>

    <v-btn stacked @click="toggleTheme" class="mr-2">
      <v-icon icon="mdi-theme-light-dark"></v-icon>
    </v-btn>

    <v-menu v-model="menu" transition="slide-x-transition" :close-on-content-click="false" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn class="version-button mr-2" rounded='xl' border color="green" variant="outlined" v-bind="props">
          {{ version }}
        </v-btn>
      </template>

      <v-card min-width="300" class="mt-4">
        <v-list>
          <v-list-subheader>Releases</v-list-subheader>
          <v-list-item v-for="v in versionHistory" :value="v.value">
            <v-chip rounded="pill" class="mr-2 my-2" color="green lighten-2">
              {{ v.version }}
            </v-chip>
            {{ v.description }}
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>

    <v-btn class="mr-2" icon="mdi-github">
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.version-button {
  text-transform: none;
}
</style>
