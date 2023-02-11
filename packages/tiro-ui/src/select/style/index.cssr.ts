import { c, cB, cE, cM } from '../../_minxin/cssr'
import {
  Theme,
  ThemeType,
  ThemeSize,
  DarkTheme
} from '../../../theme-chalk/index'

const Default = {
  '--ti-height-small': '30px',
  '--ti-height-medium': '35px',
  '--ti-height-large': '40px',
  '--ti-text-small': Theme['--ti-text-xs'],
  '--ti-text-medium': Theme['--ti-text-sm'],
  '--ti-text-large': Theme['--ti-text'],
  '--ti-icon-small': Theme['--ti-text'],
  '--ti-icon-medium': Theme['--ti-text-lg'],
  '--ti-icon-large': '20px',
  '--ti-color-default': Theme['--ti-color-default'],
  '--ti-color-default-light': Theme['--ti-color-default-light'],
  '--ti-color-success': Theme['--ti-color-success'],
  '--ti-color-success-light': Theme['--ti-color-success-light'],
  '--ti-color-info': Theme['--ti-color-info'],
  '--ti-color-info-light': Theme['--ti-color-info-light-1'],
  '--ti-color-danger': Theme['--ti-color-danger'],
  '--ti-color-danger-light': Theme['--ti-color-danger-light'],
  '--ti-color-warning': Theme['--ti-color-warning'],
  '--ti-color-warning-light': Theme['--ti-color-warning-light'],
  '--ti-color-bright': Theme['--ti-color-bright'],
  '--ti-color-bright-light': Theme['--ti-color-bright-light']
}

const Light = {
  ...Default,
  '--ti-text-color': Theme['--ti-color-black'],
  '--ti-border-color': Theme['--ti-color-gray-300'],
  '--ti-border-hover-color': Theme['--ti-color-gray-400'],
  '--ti-bg-disabled-color': Theme['--ti-color-gray-100'],
  '--ti-text-color-light': Theme['--ti-color-gray-600'],
  '--ti-bg-color': Theme['--ti-color-white']
}

const Dark = {
  ...Default,
  '--ti-text-color': Theme['--ti-color-gray-100'],
  '--ti-border-color': DarkTheme['--ti-color-dark-300'],
  '--ti-border-hover-color': DarkTheme['--ti-color-dark-100'],
  '--ti-bg-disabled-color': DarkTheme['--ti-color-dark-500'],
  '--ti-text-color-light': Theme['--ti-color-gray-200'],
  '--ti-bg-color': DarkTheme['--ti-color-dark-bg']
}

export const theme = {
  light: Light,
  dark: Dark
}

const handleSize = ThemeSize.map((item) => {
  return c(`&.is-${item}`, [
    cE('inner', {
      minHeight: `var(--ti-height-${item})`
    }),
    cE('inner__box', {
      fontSize: `var(--ti-text-${item})`,
      height: `var(--ti-height-${item})`
    }),
    cE('inner__icons', {
      fontSize: `var(--ti-text-${item})`
    }),
    cE('multiple__item', {
      height: `calc(var(--ti-height-${item}) - 10px)`,
      lineHeight: `calc(var(--ti-height-${item}) - 10px)`
    })
  ])
})

const handleType = ThemeType.map((item) => {
  return c(`&.is-${item}`, [
    c('&.is-focus', [
      c('&:after', {
        border: `2px solid var(--ti-color-${item}) !important`
      })
    ]),
    cE('menu', [
      cE('menu__item', [
        c('&:hover', {
          backgroundColor: `var(--ti-color-${item}-light)`
        }),
        c('&.is-select', {
          color: `var(--ti-color-${item})`,
          fontWeight: 600
        })
      ])
    ])
  ])
})

const handlePlaceHolder = [':-webkit-input', '-moz', ':-moz', '-ms-input'].map(
  (item) => {
    return c(`&:${item}-placeholder`, {
      color: 'var(--ti-border-color)',
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
        border: `1px solid var(--ti-border-color)`,
        borderRadius: Theme['--ti-border-radius'],
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: 'none'
      }),
      c(
        '&.is-disabled',
        {
          cursor: 'not-allowed',
          backgroundColor: 'var(--ti-bg-disabled-color)'
        },
        [
          c('*', {
            cursor: 'not-allowed !important'
          }),
          cE('inner__box', {
            backgroundColor: 'var(--ti-bg-disabled-color)'
          })
        ]
      ),
      c('&:hover:not(.is-disabled)', [
        c('&:after', {
          borderColor: 'var(--ti-border-hover-color)'
        })
      ]),
      cE(
        'inner',
        {
          width: '100%',
          borderRadius: 'inherit',
          display: 'flex',
          cursor: 'pointer',
          alignItems: 'center',
          position: 'relative'
        },
        [
          cE(
            'multiple',
            {
              height: '100%',
              minWidth: '10px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: '6px'
            },
            [
              c('~', [
                cE('inner__box', {
                  padding: '0px'
                })
              ]),
              cE(
                'multiple__item',
                {
                  padding: '0 6px',
                  margin: '0px 0px 6px 6px',
                  borderRadius: Theme['--ti-border-radius'],
                  backgroundColor: Theme['--ti-color-info-light'],
                  color: 'var(--ti-text-color-light)',
                  fontSize: 'var(--ti-text-small)',
                  cursor: 'auto'
                },
                [
                  c(
                    '.ti-icon-close',
                    {
                      marginLeft: '5px',
                      padding: '0.8px 1px'
                    },
                    [
                      c('&:hover', {
                        borderRadius: Theme['--ti-border-radius'],
                        backgroundColor: 'var(--ti-border-color)'
                      })
                    ]
                  )
                ]
              )
            ]
          ),
          cE(
            'inner__box',
            {
              width: '100%',
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
              display: 'flex',
              alignItems: 'center',
              paddingRight: '10px'
            },
            [
              c(
                '.ti-icon-arrow-down',
                {
                  color: Theme['--ti-color-gray-400'],
                  transition: 'transform 0.3s',
                  transformOrigin: 'center center',
                  userSelect: 'none',
                  pointerEvents: 'none'
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
          maxHeight: '250px',
          boxSizing: 'border-box',
          position: 'absolute',
          zIndex: Theme['--ti-z-index-1001'],
          border: `1px solid var(--ti-bg-disabled-color)`,
          left: 0,
          right: 0,
          backgroundColor: 'var(--ti-bg-color)',
          borderRadius: 'inherit',
          boxShadow: Theme['--ti-box-shadow-lighter'],
          transformOrigin: '0 0',
          overflowY: 'auto',
          overflowX: 'hidden',
          marginTop: '5px'
        },
        [
          cE(
            'menu__inner',
            {
              padding: '5px 5px',
              fontSize: '14px'
            },
            [
              cE(
                'menu__item',
                {
                  padding: '6px 5px',
                  borderRadius: Theme['--ti-border-radius'],
                  color: 'var(--ti-text-color-light)',
                  cursor: 'pointer'
                },
                [
                  c('&.is-disabled', {
                    pointerEvents: 'none',
                    color: 'var(--ti-border-color)'
                  })
                ]
              ),
              cE('menu__empty', {
                width: '100%',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                color: Theme['--ti-color-gray-400']
              })
            ]
          )
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
