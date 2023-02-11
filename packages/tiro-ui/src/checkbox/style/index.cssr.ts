import { c, cB, cE, cM } from '../../_minxin/cssr'
import {
  Theme,
  ThemeType,
  ThemeSize,
  DarkTheme
} from '../../../theme-chalk/index'

const Default = {
  '--ti-text-small': Theme['--ti-text-xs'],
  '--ti-text-medium': Theme['--ti-text-sm'],
  '--ti-text-large': Theme['--ti-text'],
  '--ti-scale-small': '0.7',
  '--ti-scale-medium': '0.8',
  '--ti-scale-large': '0.9',
  '--ti-color-default': Theme['--ti-color-default'],
  '--ti-color-success': Theme['--ti-color-success'],
  '--ti-color-info': Theme['--ti-color-info'],
  '--ti-color-danger': Theme['--ti-color-danger'],
  '--ti-color-warning': Theme['--ti-color-warning'],
  '--ti-color-bright': Theme['--ti-color-bright']
}

const Light = {
  ...Default,
  '--ti-border-color': Theme['--ti-color-gray-300'],
  '--ti-text-color': Theme['--ti-color-gray-600'],
  '--ti-bg-color': Theme['--ti-color-white'],
  '--ti-text-color-disabled': Theme['--ti-color-gray-300'],
  '--ti-border-color-disabled': Theme['--ti-color-gray-200']
}

const Dark = {
  ...Default,
  '--ti-border-color': DarkTheme['--ti-color-dark-300'],
  '--ti-text-color': Theme['--ti-color-gray-200'],
  '--ti-bg-color': Theme['--ti-color-gray-200'],
  '--ti-text-color-disabled': DarkTheme['--ti-color-dark-300'],
  '--ti-border-color-disabled': DarkTheme['--ti-color-dark-400']
}

export const theme = {
  light: Light,
  dark: Dark
}

const handleSize = ThemeSize.map((item) => {
  return c(`&.is-${item}`, [
    cE('text', {
      fontSize: `var(--ti-text-${item})`
    }),
    cE('inner', {
      width: `var(--ti-text-${item})`,
      height: `var(--ti-text-${item})`
    }),
    cE('input', {}, [
      c('&:checked', [
        c('~', [
          cE('inner', [
            c('&:after', {
              transform: `translate(-50%,-50%) scale(var(--ti-scale-${item}))`
            })
          ])
        ])
      ])
    ])
  ])
})

const handleType = ThemeType.map((item) => {
  return c(`&.is-${item}`, [
    cE('input', {}, [
      c('&:checked', [
        c('~', [
          cE('inner', {
            borderWidth: '2px',
            borderColor: `var(--ti-color-${item})`,
            backgroundColor: `var(--ti-color-${item})`
          })
        ])
      ])
    ]),
    c('&:not(.is-disabled):hover', [
      cE('inner', {
        borderWidth: '2px',
        borderColor: `var(--ti-color-${item})`
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
          cE('inner', {
            borderColor: `var(--ti-border-color-disabled) !important`
          }),
          cE('text', {
            color: `var(--ti-text-color-disabled) !important`
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
        color: 'var(--ti-text-color)',
        userSelect: 'none',
        display: 'inline-block'
      }),
      cE(
        'inner',
        {
          position: 'relative',
          boxSizing: 'border-box',
          border: `1px solid var(--ti-border-color)`,
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
            backgroundColor: 'var(--ti-bg-color)',
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
