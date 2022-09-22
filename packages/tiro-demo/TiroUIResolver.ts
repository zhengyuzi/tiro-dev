import type {
  ComponentResolveResult,
  ComponentResolver
} from 'unplugin-vue-components'

export interface TiroResolverOptions {
  /**
   * import style along with components
   *
   * @default "sass"
   */
  importStyle?: boolean | 'css' | 'sass'
}

export function getSideEffectsLegacy(
  name: string,
  options: TiroResolverOptions
): ComponentResolveResult {
  const { importStyle = 'sass' } = options
  const sideEffects = []

  if (importStyle === 'sass') {
    sideEffects.push('@tiro/ui/style/base.scss')
  } else if (importStyle === true || importStyle === 'css') {
    sideEffects.push('@tiro/ui/style/base.css')
  }

  return {
    from: `@tiro/ui/src/${name.toLowerCase()}`,
    name: `Ti${name}`,
    sideEffects
  }
}

export function TiroUIResolver(
  options: TiroResolverOptions = {}
): ComponentResolver[] {
  return [
    {
      type: 'component',
      resolve: (name: string) => {
        if (name.slice(0, 2) == 'Ti') {
          return getSideEffectsLegacy(name.slice(2), options)
        }
      }
    }
  ]
}
