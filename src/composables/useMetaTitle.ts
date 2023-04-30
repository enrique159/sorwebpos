import i18n from '@/plugins/i18n'
import { useTitle } from '@vueuse/core'

export const useMetaTitle = () => {
  // Locales
  const { t } = i18n.global

  const setMeta = (title: string, template: string = "| Sor") => {
    const titleLocale = t(title)
    useTitle(`${titleLocale} ${template}`)
  }

  return {
    setMeta,
  }
}