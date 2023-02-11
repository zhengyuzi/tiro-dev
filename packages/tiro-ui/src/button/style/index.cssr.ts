import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme, ThemeType, ThemeSize } from '../../../theme-chalk/index'
import { DarkTheme } from '../../../theme-chalk/index'

const Default = {
  '--ti-color-transparent': Theme['--ti-color-transparent'],
  '--ti-height-small': '32px',
  '--ti-height-medium': '35px',
  '--ti-height-large': '38px',
  '--ti-text-small': Theme['--ti-text-xs'],
  '--ti-text-medium': Theme['--ti-text-sm'],
  '--ti-text-large': Theme['--ti-text'],
  '--ti-padding-small': '11px',
  '--ti-padding-medium': '14px',
  '--ti-padding-large': '17px',
  '--ti-border-radius-circle': Theme['--ti-border-radius-circle'],
  '--ti-border-radius-middle': Theme['--ti-border-radius-middle'],
  '--ti-border-radius': Theme['--ti-border-radius'],
  '--ti-color-default': Theme['--ti-color-default'],
  '--ti-color-default-light': Theme['--ti-color-default-light-1'],
  '--ti-color-default-dark': Theme['--ti-color-default-dark-1'],
  '--ti-color-success': Theme['--ti-color-success'],
  '--ti-color-success-light': Theme['--ti-color-success-light-1'],
  '--ti-color-success-dark': Theme['--ti-color-success-dark-1'],
  '--ti-color-info': Theme['--ti-color-info'],
  '--ti-color-info-light': Theme['--ti-color-info-light-1'],
  '--ti-color-info-dark': Theme['--ti-color-info-dark-1'],
  '--ti-color-danger': Theme['--ti-color-danger'],
  '--ti-color-danger-light': Theme['--ti-color-danger-light-1'],
  '--ti-color-danger-dark': Theme['--ti-color-danger-dark-1'],
  '--ti-color-warning': Theme['--ti-color-warning'],
  '--ti-color-warning-light': Theme['--ti-color-warning-light-1'],
  '--ti-color-warning-dark': Theme['--ti-color-warning-dark-1'],
  '--ti-color-bright': Theme['--ti-color-bright'],
  '--ti-color-bright-light': Theme['--ti-color-bright-light-1'],
  '--ti-color-bright-dark': Theme['--ti-color-bright-dark-1']
}

const Light = {
  ...Default,
  '--ti-border-color': Theme['--ti-color-gray-200'],
  '--ti-text-fill-color': Theme['--ti-color-white'],
  '--ti-text-bg-color': Theme['--ti-color-gray-100']
}

const Dark = {
  ...Default,
  '--ti-border-color': DarkTheme['--ti-color-dark-300'],
  '--ti-text-color': Theme['--ti-color-gray-200'],
  '--ti-text-fill-color': Theme['--ti-color-gray-100'],
  '--ti-text-bg-color': DarkTheme['--ti-color-dark-500']
}

export const theme = {
  light: Light,
  dark: Dark
}

const renderType = ThemeType.map((type) => {
  return c(`&.is-${type}`, [
    c('&:not(.is-fill):not(.is-text)', [
      c('&:after', {
        content: `""`,
        border: `1px solid var(--ti-border-color)`,
        position: 'absolute',
        borderRadius: '3px',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }),
      c(
        '&:hover:not(.is-disabled):not(.is-dashed), &:focus:not(.is-disabled):not(.is-dashed)',
        {
          color: `var(--ti-color-${type}-dark)`
        },
        [
          c('&:after', {
            borderWidth: '2px',
            borderColor: `var(--ti-color-${type})`,
            backgroundColor: `var(--ti-color-${type}-light)`
          })
        ]
      ),
      c('&:active:not(.is-disabled):not(.is-dashed)', {
        borderColor: `var(--ti-color-${type}-dark) !important`
      }),
      c(
        '&.is-dashed',
        {
          color: `var(--ti-color-${type})`
        },
        [
          c('&:after', {
            content: `''`,
            borderStyle: 'dashed',
            borderWidth: '1px',
            borderColor: `var(--ti-color-${type})`,
            position: 'absolute',
            borderRadius: '3px',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }),
          c('&:hover, &:focus', [
            c('&:after', {
              borderWidth: '2px'
            })
          ])
        ]
      )
    ]),
    c('&.is-fill', {
      backgroundColor: `var(--ti-color-${type})`,
      color: 'var(--ti-text-fill-color)'
    }),
    c(
      '&.is-plain:not(.is-fill)',
      {
        backgroundColor: `var(--ti-color-${type}-light)`
      },
      [
        c('&:after', {
          borderColor: `var(--ti-color-${type}-light) !important`
        })
      ]
    ),
    c(
      '&.is-text:not(.is-fill):not(.is-plain)',
      {
        color: `var(--ti-color-${type})`
      },
      [
        c('&:hover:not(.is-disabled), &:focus:not(.is-disabled)', {
          backgroundColor: 'var(--ti-text-bg-color)'
        })
      ]
    )
  ])
})

const renderSize = ThemeSize.map((size) => {
  const $padding = `var(--ti-padding-${size})`
  const $height = `var(--ti-height-${size})`
  const $font = `var(--ti-text-${size})`
  return c(
    `&.is-${size}`,
    {
      padding: `0 ${$padding}`,
      height: $height,
      fontSize: $font
    },
    [
      c(
        '&.is-circle',
        {
          padding: 0,
          width: $height,
          textAlign: 'center',
          lineHeight: $height,
          borderRadius: '50%'
        },
        [
          c('&:after', {
            borderRadius: 'var(--ti-border-radius-circle) !important'
          })
        ]
      ),
      c('&.is-round:not(.is-circle), &.is-round:not(.is-circle):after', {
        borderRadius: 'var(--ti-border-radius-middle) !important'
      })
    ]
  )
})

export default c([
  cB(
    'button',
    {
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      userSelect: 'none',
      boxSizing: 'border-box',
      borderRadius: 'var(--ti-border-radius)',
      backgroundColor: 'var(--ti-color-transparent)',
      borderColor: 'var(--ti-color-transparent)',
      position: 'relative'
    },
    [
      c('&:active:not(.is-disabled)', {
        transform: 'scale(0.98)'
      }),
      c('&.is-disabled', {
        cursor: 'not-allowed',
        opacity: 0.6
      }),
      c('&:not(.is-fill)', {
        color: 'var(--ti-text-color)'
      }),
      renderType,
      renderSize
    ]
  )
])
