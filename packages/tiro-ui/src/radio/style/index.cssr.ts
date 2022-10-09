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
                content: `''`,
                position: 'absolute',
                width: '60%',
                height: '60%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                textAlign: 'center',
                backgroundColor: Theme[$color],
                borderRadius: Theme['--ti-border-radius-circle']
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
      margin: '0 5px'
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
        userSelect: 'none',
        padding: '0px 8px'
      }),
      cE('circle', {
        position: 'relative',
        boxSizing: 'border-box',
        border: `1px solid ${Theme['--ti-color-gray-300']}`,
        borderRadius: Theme['--ti-border-radius-circle']
      }),
      handleSize,
      handleType
    ]
  )
])
