<template>
  <div class="d-flex h-screen">
    <div class="w-50">
      <v-img aspect-ratio="16/9" class="h-100" cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
    </div>

    <div class="flex-grow-1">
      <v-container class="d-flex flex-wrap justify-center w-100 h-100">
        <div class="pl-2 pt-2 w-100 d-flex">
          <v-icon icon="$vuetify" size="x-large"></v-icon>
          <div class="text-h6">Vortex</div>
        </div>
        <div class="h-75 w-50 align-self-center">
          <v-card class="w-100 h-100" flat>
            <v-card-title class="text-h3">Welcome back!</v-card-title>
            <v-card-subtitle class="mb-4">Welcome Back, please sign up to manage your team.</v-card-subtitle>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field color="primary" v-model="email" variant="outlined" label="Email address"
                  placeholder="johndoe@gmail.com" type="email" required></v-text-field>
                <v-text-field color="primary" label="Password" v-model="password"
                  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                  placeholder="Enter your password" variant="outlined"
                  @click:append-inner="visible = !visible"></v-text-field>
                <v-btn type="submit" :style="loginButtonStyle" color="primary" block>Login</v-btn>
              </v-form>
              <v-divider class="my-8"></v-divider>
              <v-btn variant="outlined" color="secondary" block>Google</v-btn>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: '',
})

import { ref } from 'vue'

const email = ref('')
const password = ref('')
const terms = ref(false)
const visible = ref(false)

const login = () => {
  console.log('Logging in with', email.value, password.value)
}
</script>
