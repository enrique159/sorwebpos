<template>
  <v-app id="main-app">
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
import i18n from "@/plugins/i18n"
import { useTitle } from "@vueuse/core"
import { useApp } from "@/composables/stores/useApp"
import { Locales } from "@/locales/locales.d"

const { locale } = useApp()

locale.value === 'es-MX' ? i18n.global.locale = Locales.ES : i18n.global.locale = Locales.EN

useTitle('Sor', { titleTemplate: '%s | Software Restaurant' })
</script>

<style lang="scss">
#main-app {
  width: 100%;
  height: 100vh;
  background: $color-background !important;
  color: $color-text !important;
}
</style>
