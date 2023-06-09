<template>
  <v-app id="main-app">
    <loading-data-view v-if="loadingData" />
    <router-view v-else />
  </v-app>
</template>

<script setup lang="ts">
// Components
import LoadingDataView from "@/views/LoadingDataView.vue"
// Plugins
import i18n from "@/plugins/i18n"
// Composables
import { ref } from "vue"
import { useTitle } from "@vueuse/core"
import { useApp } from "@/composables/stores/useApp"
import { useUser } from "@/composables/stores/useUser"
import { useRestaurants } from "@/composables/stores/useRestaurants"
// Types
import { Locales } from "@/locales/locales.d"

// Locales
const { locale } = useApp()
locale.value === 'es-MX' ? i18n.global.locale = Locales.ES : i18n.global.locale = Locales.EN

// Meta title
useTitle('Sor', { titleTemplate: '%s | Software Restaurant' })

// Stores
const { user, validateToken, getMe } = useUser()
const { getRestaurants } = useRestaurants()
// Loading data
const loadingData = ref(true)

const getUserInfo = async() => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  await getMe()
  await getRestaurants()
  loadingData.value = false
}

if (!user.value._id && validateToken()) getUserInfo()
else loadingData.value = false

</script>

<style lang="scss">
#main-app {
  width: 100%;
  height: 100vh;
  background: $color-background !important;
  color: $color-text !important;
}
</style>
