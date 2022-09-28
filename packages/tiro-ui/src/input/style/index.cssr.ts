import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme, ThemeType, ThemeSize } from '../../../theme-chalk/index'

const Height = {
  small: '30px',
  medium: '35px',
  large: '40px'
}

const FontSize = {
  small: '13px',
  medium: '14px',
  large: '15px'
}

const IconSize = {
  small: '16px',
  medium: '18px',
  large: '20px'
}

const renderType = ThemeType.map((type) => {
  const color = `--ti-color-${type}`
  const BkColor = `--ti-color-${type}-light-1`
  return c(`&.is-style-type-${type}`, {
    backgroundColor: Theme[BkColor],
    borderColor: Theme[color]
  })
})

const renderSize = ThemeSize.map((size) => {
  const height = Height[size]
  const fontSize = FontSize[size]
  return c(
    `&.is-${size}`,
    {
      height
    },
    [
      c('.password, .clearable ', {
        fontSize: IconSize[size],
        color: Theme['--ti-color-gray-400'],
        cursor: 'pointer'
      }),
      cB('input__inner', {
        fontSize
      })
    ]
  )
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

export default cB(
  'input',
  {
    width: '100%',
    boxSizing: 'border-box'
  },
  [
    c('&:not(.is-disabled):not(.is-focus):hover &__wrapper', {
      borderColor: Theme['--ti-color-gray-300']
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
        color: Theme['--ti-color-black'],
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: Theme['--ti-color-gray-200'],
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
            backgroundColor: Theme['--ti-color-transparent'],
            flex: 1
          },
          handlePlaceHolder
        )
      ]
    ),
    renderSize,
    c(
      '&.is-disabled',
      {
        backgroundColor: Theme['--ti-color-gray-100']
      },
      [
        c('*', {
          cursor: 'not-allowed'
        })
      ]
    ),
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
