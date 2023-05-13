<template>
  <v-container>
    <h4>Página en proceso, entra a Punto de Venta</h4>
    <v-btn @click="logout">
      logout
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
// Composables
import { useMetaTitle } from '@/composables/useMetaTitle'
import { useUser } from '@/composables/stores/useUser'

// Meta title
const { setMeta } = useMetaTitle()
setMeta('Titles.Settings')

// Authentication
const { logout } = useUser()

</script>

<style scoped>

</style>