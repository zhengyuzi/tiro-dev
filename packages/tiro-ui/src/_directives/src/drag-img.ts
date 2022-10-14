export const dragImg = {
  mounted(el: HTMLElement) {
    el.onmousedown = (e) => {
      e.preventDefault()
      e = e || window.event

      const transEl = getTransform(el)

      const diffX = e.clientX - transEl.transX
      const diffY = e.clientY - transEl.transY

      el.style.transition = 'none'

      document.onmousemove = function (e) {
        e = e || window.event
        const { x, y } = transDirection(
          e.clientX,
          e.clientY,
          diffX,
          diffY,
          transEl.rotate
        )

        Transform(el, transEl.rotate, x, y, transEl.scale)
      }

      document.onmouseup = function () {
        this.onmousemove = null
        this.onmouseup = null
        Transform(el, transEl.rotate, 0, 0, transEl.scale)
        el.style.transition = 'transform 0.2s'
      }
    }
  }
}

function Transform(
  el: HTMLElement,
  rotate: number,
  x: number,
  y: number,
  scale: number
) {
  el.style.transform = `rotate(${rotate}deg) translateX(${x}px) translateY(${y}px) scale(${scale}`
}

function getTransform(DOM: HTMLElement) {
  const arr = getComputedStyle(DOM)
    .transform?.split('(')[1]
    ?.split(')')[0]
    ?.split(',')
    .map((item) => Number(item))

  const [a, b, c, d, e, f] = arr

  const rotate = Math.round(Math.atan2(b, a) * (180 / Math.PI))

  return {
    transX: e,
    transY: f,
    scale: Math.sqrt(a * a + b * b),
    rotate
  }
}

function transDirection(
  a: number,
  b: number,
  diffX: number,
  diffY: number,
  rotate: number
) {
  let x = a - diffX
  let y = b - diffY

  if (Math.abs(rotate) === 90) {
    const op = rotate / 90

    x = op * (b - diffY)
    y = op * (diffX - a)
  }

  if (Math.abs(rotate) === 180) {
    x = diffX - a
    y = diffY - b
  }

  return {
    x,
    y
  }
}
