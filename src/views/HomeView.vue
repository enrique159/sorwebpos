<template>
  <v-container>
    <h1>Home</h1>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  router.push('/entries-sale');
});
</script>