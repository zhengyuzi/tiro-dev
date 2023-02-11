import { c, cB, cE, cM } from '../../_minxin/cssr'
import {
  Theme,
  ThemeType,
  ThemeSize,
  DarkTheme
} from '../../../theme-chalk/index'

const Default = {
  '--ti-color-transparent': Theme['--ti-color-transparent'],
  '--ti-height-small': '30px',
  '--ti-height-medium': '35px',
  '--ti-height-large': '40px',
  '--ti-text-small': '13px',
  '--ti-text-medium': Theme['--ti-text-sm'],
  '--ti-text-large': '15px',
  '--ti-icon-small': '16px',
  '--ti-icon-medium': '18px',
  '--ti-icon-large': '20px',
  '--ti-color-default': Theme['--ti-color-default'],
  '--ti-color-default-light': Theme['--ti-color-default-light-1'],
  '--ti-color-success': Theme['--ti-color-success'],
  '--ti-color-success-light': Theme['--ti-color-success-light-1'],
  '--ti-color-info': Theme['--ti-color-info'],
  '--ti-color-info-light': Theme['--ti-color-info-light-1'],
  '--ti-color-danger': Theme['--ti-color-danger'],
  '--ti-color-danger-light': Theme['--ti-color-danger-light-1'],
  '--ti-color-warning': Theme['--ti-color-warning'],
  '--ti-color-warning-light': Theme['--ti-color-warning-light-1'],
  '--ti-color-bright': Theme['--ti-color-bright'],
  '--ti-color-bright-light': Theme['--ti-color-bright-light-1']
}

const Light = {
  ...Default,
  '--ti-text-color': Theme['--ti-color-black'],
  '--ti-border-color': Theme['--ti-color-gray-300'],
  '--ti-border-hover-color': Theme['--ti-color-gray-400'],
  '--ti-bg-disabled-color': Theme['--ti-color-gray-100']
}

const Dark = {
  ...Default,
  '--ti-text-color': Theme['--ti-color-gray-100'],
  '--ti-border-color': DarkTheme['--ti-color-dark-300'],
  '--ti-border-hover-color': DarkTheme['--ti-color-dark-100'],
  '--ti-bg-disabled-color': DarkTheme['--ti-color-dark-500']
}

export const theme = {
  light: Light,
  dark: Dark
}

const renderType = ThemeType.map((type) => {
  return c(`&.is-style-type-${type}`, {
    backgroundColor: `var(--ti-color-${type}-light)`,
    borderColor: `var(--ti-color-${type})`
  })
})

const renderSize = ThemeSize.map((size) => {
  return c(
    `&.is-${size}`,
    {
      height: `var(--ti-height-${size})`
    },
    [
      c('.password, .clearable ', {
        fontSize: `var(--ti-icon-${size})`,
        color: Theme['--ti-color-gray-400'],
        cursor: 'pointer'
      }),
      cB('input__inner', {
        fontSize: `var(--ti-text-${size})`
      })
    ]
  )
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

export default cB(
  'input',
  {
    width: '100%',
    boxSizing: 'border-box'
  },
  [
    c('&:not(.is-disabled):not(.is-focus):hover &__wrapper', {
      borderColor: 'var(--ti-border-hover-color)'
    }),
    c('&.is-focus', [
      cB(
        'input__wrapper',
        {
          borderWidth: '2px'
        },
        renderType
      )
    ]),
    cB(
      'input__wrapper',
      {
        width: '100%',
        height: '100%',
        color: 'var(--ti-text-color)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--ti-border-color)',
        borderRadius: Theme['--ti-border-radius'],
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box'
      },
      [
        cB(
          'input__inner',
          {
            width: '100%',
            height: '100%',
            outline: 'none',
            border: 'none',
            padding: '0 10px',
            fontSize: 'inherit',
            backgroundColor: 'var(--ti-color-transparent)',
            flex: 1
          },
          handlePlaceHolder
        )
      ]
    ),
    renderSize,
    c('&.is-disabled', [
      cB('input__wrapper', {
        backgroundColor: 'var(--ti-bg-disabled-color)'
      }),
      c('*', {
        cursor: 'not-allowed'
      })
    ]),
    c('&__prefix', [
      c('& > *', {
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '10px'
      })
    ]),
    c('&__suffix', [
      c('& > *', {
        display: 'inline-flex',
        alignItems: 'center',
        paddingRight: '10px'
      }),
      c('.word-limit', {
        fontSize: '12px',
        color: Theme['--ti-color-gray-400'],
        userSelect: 'none'
      })
    ])
  ]
)
