<template>
  <div class="signin-view">
    <v-card class="card-signin br-4">
      <v-card-title>
        <h1>Sign In</h1>
      </v-card-title>
    </v-card>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.signin-view {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.card-signin {
  width: 100%;
  max-width: 720px;
  height: fit-content;
  min-height: 420px;
  padding: 1rem;
  background: $color-black-2;
}
</style>