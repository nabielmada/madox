import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Applications/XAMPP/xamppfiles/htdocs/crud-nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}