import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme, ThemeType, ThemeSize } from '../../../theme-chalk/index'

const Size = {
  small: {
    width: 30,
    height: 16,
    borderRadius: '8px'
  },
  medium: {
    width: 40,
    height: 20,
    borderRadius: '10px'
  },
  large: {
    width: 50,
    height: 24,
    borderRadius: '15px'
  }
}

const space = 6

const renderSize = ThemeSize.map((size) => {
  const width = Size[size].width
  const height = Size[size].height
  const borderRadius = Size[size].borderRadius

  return c(
    `&.is-${size}`,
    {
      width: `${width}px`,
      height: `${height}px`,
      borderRadius
    },
    [
      cE('action', {
        width: `${height - space}px`,
        height: `${height - space}px`
      }),
      c('&.is-checked', [
        cE('action', {
          transform: `translateX(${width - height + space / 2}px)`
        })
      ])
    ]
  )
})

const handleType = ThemeType.map((item) => {
  const $color = `--ti-color-${item}`
  return c(`&.is-${item}`, {
    backgroundColor: Theme[$color]
  })
})

export default c([
  cB('switch', {}, [
    cE(
      'inner',
      {
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: Theme['--ti-color-gray-300']
      },
      [
        renderSize,
        cE('action', {
          backgroundColor: Theme['--ti-color-white'],
          borderRadius: '50%',
          width: '100%',
          transition: 'all 0.3s',
          position: 'absolute',
          transform: `translateX(${space / 2}px)`
        }),
        c('&.is-checked', [handleType]),
        c('&.is-disabled', {
          cursor: 'not-allowed',
          opacity: 0.6
        })
      ]
    )
  ])
])
