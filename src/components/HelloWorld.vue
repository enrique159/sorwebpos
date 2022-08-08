<template>
  <h1>{{ props.msg }}</h1>
  <h2>{{ user.name }}</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMain } from '@/composables/useMain';
const props = defineProps<{ msg: string }>()
const { user } = useMain()

const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
