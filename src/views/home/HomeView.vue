<template>
  <v-container>
    <h4>Página en proceso, ingresa a Punto de Venta</h4>
  </v-container>
</template>

<script setup lang="ts">
import { useMetaTitle } from '@/composables/useMetaTitle'
const { setMeta } = useMetaTitle()
setMeta('Titles.Home')
</script>