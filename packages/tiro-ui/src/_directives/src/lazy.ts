import throttle from 'lodash/throttle'
import { nextTick } from 'vue'

interface IBinding {
  value: {
    isLazy: boolean
    root: keyof HTMLElementTagNameMap
    src: string
  }
}

export const lazy = {
  mounted(el: HTMLImageElement, binding: IBinding) {
    if (!binding.value.isLazy || !binding.value.root) return

    const El = document.querySelector(binding.value.root)

    const throttleFn = throttle(bindScroll, 200)

    nextTick(() => {
      El?.addEventListener('scroll', throttleFn, false)
      bindScroll()
    })

    function bindScroll() {
      if (isVisible(el, El as HTMLElement)) {
        el.src = binding.value.src
        El?.removeEventListener('scroll', throttleFn, false)
      }
    }

    function isVisible(element: HTMLElement, viewport: HTMLElement) {
      const rect = element.getBoundingClientRect()
      const view = viewport.getBoundingClientRect()

      return (
        rect.top <= viewport.clientHeight + view.top &&
        rect.left <= viewport.clientWidth + view.left
      )
    }
  }
}
