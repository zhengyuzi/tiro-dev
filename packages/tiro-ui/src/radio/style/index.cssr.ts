import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme, ThemeType, ThemeSize } from '../../../theme-chalk/index'

const fontSize = {
  small: '14px',
  medium: '16px',
  large: '18px'
}

const handleSize = ThemeSize.map((item) => {
  return c(`&.is-${item}`, [
    cE('text', {
      fontSize: fontSize[item]
    }),
    cE('circle', {
      width: fontSize[item],
      height: fontSize[item]
    })
  ])
})

const handleType = ThemeType.map((item) => {
  const $color = `--ti-color-${item}`
  return c(`&.is-${item}`, [
    cE('input', {}, [
      c('&:checked', [
        c('~', [
          cE(
            'circle',
            {
              borderWidth: '2px',
              borderColor: Theme[$color]
            },
            [
              c('&:after', {
                transform: 'translate(-50%,-50%) scale(1)',
                backgroundColor: Theme[$color]
              })
            ]
          )
        ])
      ])
    ]),
    c('&:not(.is-disabled):hover', [
      cE('circle', {
        borderWidth: '2px',
        borderColor: Theme[$color]
      })
    ])
  ])
})

export default c([
  cB(
    'radio',
    {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      margin: '0 8px',
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
          cE('circle', {
            borderColor: `${Theme['--ti-color-gray-200']} !important`
          }),
          cE('text', {
            color: `${Theme['--ti-color-gray-300']} !important`
          })
        ]
      ),
      cE('input', {
        cursor: 'pointer',
        position: 'absolute',
        border: 0,
        opacity: 0
      }),
      cE('text', {
        color: Theme['--ti-color-gray-600'],
        userSelect: 'none'
      }),
      cE(
        'circle',
        {
          position: 'relative',
          boxSizing: 'border-box',
          border: `1px solid ${Theme['--ti-color-gray-300']}`,
          borderRadius: Theme['--ti-border-radius-circle'],
          marginRight: '8px'
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
            borderRadius: Theme['--ti-border-radius-circle'],
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
