import { ref } from 'vue'

interface IBinding {
  value: {
    prev: Function
    next: Function
    direction: 'horizontal' | 'vertical'
    isDraggable: boolean
  }
}

export const draggable = {
  mounted(el: HTMLElement, binding: IBinding) {
    if (!binding.value.isDraggable) return

    const move = ref(null as unknown as number)
    const isMove = ref(false)

    el.onmousedown = (e) => {
      e.preventDefault()
      e = e || window.event

      // true-横向 false-竖向
      const isHorizontal = binding.value.direction === 'horizontal'
      const transEl = getTransform(el)

      const diff = isHorizontal
        ? e.clientX - transEl.transX
        : e.clientY - transEl.transY
      const distance = isHorizontal ? el.offsetWidth : el.offsetHeight

      document.onmousemove = function (e) {
        e = e || window.event
        const client = isHorizontal ? e.clientX : e.clientY
        move.value = client - diff
        handleMove(0, move.value)
      }

      document.onmouseup = function () {
        this.onmousemove = null
        this.onmouseup = null
        handleEnd()
        isMove.value = false
      }

      function handleMove(duration: number, translate: number) {
        el.style.transitionDuration = `${duration}ms`
        el.style.transform = isHorizontal
          ? `translateX(${translate}px)`
          : `translateY(${translate}px)`
        isMove.value = true
      }

      function handleEnd() {
        if (move.value === null) return
        const trans = isHorizontal ? transEl.transX : transEl.transY
        if (Math.abs(move.value - trans) < distance / 2) {
          handleMove(300, trans)
          return
        }
        if (isMove.value)
          move.value < trans ? binding.value.next() : binding.value.prev()
      }

      function getTransform(DOM: HTMLElement) {
        const arr = getComputedStyle(DOM)
          .transform?.split('(')[1]
          ?.split(')')[0]
          ?.split(',')
          .map((item) => Number(item))

        const [a, b, c, d, e, f] = arr

        return {
          transX: e,
          transY: f
        }
      }
    }
  }
}
