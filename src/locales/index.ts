import { Locales } from "./locales.d"

import enUS from "./messages/en-US"
import esMX from "./messages/es-MX"

export const messages = {
  [Locales.EN]: enUS,
  [Locales.ES]: esMX,
}

export const defaultLocale = Locales.ES
