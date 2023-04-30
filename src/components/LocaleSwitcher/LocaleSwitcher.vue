<template>
  <div class="locale-switcher">
    <button
      class="locale-switcher__button"
      :class="{ 'locale-switcher__button--active': currentLocale === Locales.ES }"
      @click="changeLocale(Locales.ES)"
    >
      ES
    </button>
    <div class="locale-switcher__divider" />
    <button
      class="locale-switcher__button"
      :class="{ 'locale-switcher__button--active': currentLocale === Locales.EN }"
      @click="changeLocale(Locales.EN)"
    >
      EN
    </button>
  </div>
</template>

<script setup lang="ts">
import i18n from "@/plugins/i18n"
import { Locales } from "@/locales/locales.d"
import { useApp } from "@/composables/stores/useApp"
import { computed } from "vue"

const { setLocale } = useApp()

const changeLocale = (locale: Locales) => {
  i18n.global.locale = locale
  setLocale(locale)
}

const currentLocale = computed(() => i18n.global.locale)
</script>

<style lang="scss" scoped>
.locale-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &__button {
    background-color: transparent;
    border: none;
    font-size: $b5-size;
    font-weight: $font-regular;
    color: $color-black-4;
    cursor: pointer;
    &:hover {
      color: $color-white-4;
    }
  }

  &__button--active {
    color: $color-white-3;
    font-weight: $font-bold;
  }

  &__divider {
    width: 1px;
    height: 1rem;
    background-color: $color-black-3;
  }
}
</style>
