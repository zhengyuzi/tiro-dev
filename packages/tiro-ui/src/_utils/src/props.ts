import type { ExtractPropTypes } from 'vue'

export type RemoveReadonly<T> = {
  -readonly [key in keyof T]: T[key]
}

export type ExtractPublicPropTypes<T, K extends keyof T = never> = Omit<
  Partial<RemoveReadonly<ExtractPropTypes<T>>>,
  Extract<keyof T, K>
>
