import { messages, defaultLocale } from "@/locales"
import { createI18n } from 'vue-i18n'

export default createI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
})