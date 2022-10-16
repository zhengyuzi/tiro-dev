import type { ComponentResolver } from 'unplugin-vue-components'

export function TiroUIResolver(): ComponentResolver[] {
  return [
    {
      type: 'component',
      resolve: (name: string) => {
        if (name.slice(0, 2) == 'Ti') {
          return {
            from: `@tiro/ui`,
            name: `Ti${name.slice(2)}`
          }
        }
      }
    }
  ]
}
