import { useIntersectionObserver } from '@vueuse/core'

interface IBinding {
  value: {
    isLazy: boolean
    src: string
  }
}

export const lazy = {
  mounted(el: HTMLImageElement, binding: IBinding) {
    if (!binding.value.isLazy) return

    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = binding.value.src
        stop()
      }
    })
  }
}
