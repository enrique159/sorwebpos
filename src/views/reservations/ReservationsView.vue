<template>
  <v-container>
    <h4>Página en proceso, entra a Punto de Venta</h4>
  </v-container>
</template>

<script setup lang="ts">
import { useMetaTitle } from '@/composables/useMetaTitle'
const { setMeta } = useMetaTitle()
setMeta('Titles.Reservations')
</script>

<style scoped>

</style>