import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme, ThemeType, ThemeSize } from '../../../theme-chalk/index'

const fontSize = {
  small: '14px',
  medium: '16px',
  large: '18px'
}

const checkScale = {
  small: '0.7',
  medium: '0.8',
  large: '0.9'
}

const handleSize = ThemeSize.map((item) => {
  return c(`&.is-${item}`, [
    cE('text', {
      fontSize: fontSize[item]
    }),
    cE('inner', {
      width: fontSize[item],
      height: fontSize[item]
    }),
    cE('input', {}, [
      c('&:checked', [
        c('~', [
          cE('inner', [
            c('&:after', {
              transform: `translate(-50%,-50%) scale(${checkScale[item]})`
            })
          ])
        ])
      ])
    ])
  ])
})

const handleType = ThemeType.map((item) => {
  const $color = `--ti-color-${item}`
  return c(`&.is-${item}`, [
    cE('input', {}, [
      c('&:checked', [
        c('~', [
          cE('inner', {
            borderWidth: '2px',
            borderColor: Theme[$color],
            backgroundColor: Theme[$color]
          })
        ])
      ])
    ]),
    c('&:not(.is-disabled):hover', [
      cE('inner', {
        borderWidth: '2px',
        borderColor: Theme[$color]
      })
    ])
  ])
})

export default c([
  cB(
    'checkbox',
    {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      margin: '0 5px',
      height: '32px'
    },
    [
      c(
        '&.is-disabled',
        {
          cursor: 'not-allowed !important'
        },
        [
          c('& > *', {
            cursor: 'not-allowed !important'
          }),
          cE('input', {
            pointerEvents: 'none'
          }),
          cE('inner', {
            borderColor: `${Theme['--ti-color-gray-200']} !important`
          }),
          cE('text', {
            color: `${Theme['--ti-color-gray-300']} !important`
          })
        ]
      ),
      cE('input', {
        opacity: 0,
        outline: 'none',
        position: 'absolute',
        margin: 0,
        width: 0,
        height: 0,
        zIndex: -1
      }),
      cE('text', {
        color: Theme['--ti-color-gray-600'],
        userSelect: 'none',
        padding: '0px 8px',
        display: 'inline-block'
      }),
      cE(
        'inner',
        {
          position: 'relative',
          boxSizing: 'border-box',
          border: `1px solid ${Theme['--ti-color-gray-300']}`
        },
        [
          c('&:after', {
            content: `''`,
            position: 'absolute',
            width: '60%',
            height: '60%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%) scale(0)',
            textAlign: 'center',
            backgroundColor: 'white',
            transition: 'transform .03s ease-in .03s',
            transformOrigin: 'center'
          })
        ]
      ),
      handleSize,
      handleType
    ]
  )
])
