import type { RemovableRef } from "@vueuse/shared"

export type AppState = {
  rememberSession: RemovableRef<string>;
  locale: RemovableRef<string>;
}