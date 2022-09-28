import { c, cB, cE, cM } from '../../_minxin/cssr'
import {
  Theme,
  TiScrollbar,
  ThemeType,
  ThemeSize
} from '../../../theme-chalk/index'

const selectHeight = {
  small: '30px',
  medium: '35px',
  large: '40px'
}

const fontSize = {
  small: '12px',
  medium: '14px',
  large: '16px'
}

const iconSize = {
  small: '16px',
  medium: '18px',
  large: '20px'
}

const handleSize = ThemeSize.map((item) => {
  return c(
    `&.is-${item}`,
    {
      height: selectHeight[item]
    },
    [
      cE('inner__box', {
        fontSize: fontSize[item]
      }),
      cE('inner__icons', {
        fontSize: iconSize[item]
      }),
      cE('menu', {
        top: `calc(10px + ${selectHeight[item]})`
      })
    ]
  )
})

const handleType = ThemeType.map((item) => {
  const $color = `--ti-color-${item}`
  const $light = `--ti-color-${item}-light`
  return c(`&.is-${item}`, [
    c('&.is-focus', [
      c('&:after', {
        border: `2px solid ${Theme[$color]} !important`
      })
    ]),
    cE('menu', [
      cE('menu__item', [
        c('&:hover', {
          backgroundColor: Theme[$light]
        })
      ])
    ])
  ])
})

const handlePlaceHolder = [':-webkit-input', '-moz', ':-moz', '-ms-input'].map(
  (item) => {
    return c(`&:${item}-placeholder`, {
      color: Theme['--ti-color-gray-300'],
      userSelect: 'none',
      fontSize: 'inherit'
    })
  }
)

export default c([
  cB(
    'select',
    {
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: Theme['--ti-border-radius'],
      position: 'relative',
      backgroundColor: Theme['--ti-color-transparent']
    },
    [
      handleSize,
      handleType,
      c('&:after', {
        content: `""`,
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        border: `1px solid ${Theme['--ti-color-gray-200']}`,
        borderRadius: Theme['--ti-border-radius'],
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }),
      c(
        '&.is-disabled',
        {
          cursor: 'not-allowed',
          backgroundColor: Theme['--ti-color-gray-100']
        },
        [
          cE('inner__box', {
            backgroundColor: Theme['--ti-color-gray-100'],
            cursor: 'not-allowed'
          })
        ]
      ),
      c('&:hover:not(.is-disabled)', [
        c('&:after', {
          borderColor: Theme['--ti-color-gray-300']
        })
      ]),
      cE(
        'inner',
        {
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          display: 'flex',
          cursor: 'pointer'
        },
        [
          cE(
            'inner__box',
            {
              width: '100%',
              height: '100%',
              padding: '0px 10px',
              borderRadius: 'inherit',
              flex: 1,
              outline: 'none',
              border: 'none',
              cursor: 'pointer'
            },
            handlePlaceHolder
          ),
          cE(
            'inner__icons',
            {
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              paddingRight: '10px',
              pointerEvents: 'none'
            },
            [
              c(
                '.ti-icon-arrow-down',
                {
                  color: Theme['--ti-color-gray-400'],
                  transition: 'transform 0.3s',
                  transformOrigin: 'center center',
                  userSelect: 'none'
                },
                [
                  c('&.is-reserve', {
                    transform: 'rotate(180deg) !important'
                  })
                ]
              )
            ]
          )
        ]
      ),
      cE(
        'menu',
        {
          width: '100%',
          minHeight: '100px',
          maxHeight: '200px',
          boxSizing: 'border-box',
          position: 'absolute',
          zIndex: Theme['--ti-z-index-1001'],
          border: `1px solid ${Theme['--ti-color-gray-200']}`,
          left: 0,
          right: 0,
          backgroundColor: Theme['--ti-color-white'],
          borderRadius: 'inherit',
          boxShadow: Theme['--ti-box-shadow-lighter'],
          transformOrigin: '0 0',
          cursor: 'pointer',
          overflowY: 'auto'
        },
        [
          TiScrollbar,
          cE('menu__inner', {
            padding: '5px 5px',
            fontSize: '14px'
          }),
          cE('menu__item', {
            padding: '8px 5px',
            borderRadius: Theme['--ti-border-radius'],
            color: Theme['--ti-color-gray-600']
          }),
          cE('menu__empty', {})
        ]
      )
    ]
  ),
  c(
    '@keyframes Expand',
    `
    from {
        transform: scaleY(0.5);
        opacity: 0;
    }
    to {
        transform: scaleY(1);
        opacity: 1;
    }
  `
  ),
  c(
    '@keyframes Shrink',
    `
    from {
        transform: scaleY(1);
        opacity: 1;
    }
    to {
        transform: scaleY(0.5);
        opacity: 0;
    }
  `
  ),
  c('.ti-expand-enter-active', {
    animation: 'Expand 0.12s'
  }),
  c('.ti-expand-leave-active', {
    animation: 'Shrink 0.12s'
  })
])
