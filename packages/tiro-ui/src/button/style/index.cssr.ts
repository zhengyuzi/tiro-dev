import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme, ThemeType, ThemeSize } from '../../../theme-chalk/index'

const Height = {
  small: '32px',
  medium: '35px',
  large: '38px'
}

const FontSize = {
  small: '12px',
  medium: '14px',
  large: '16px'
}

const Padding = {
  small: '11px',
  medium: '14px',
  large: '17px'
}

const renderType = ThemeType.map((type) => {
  const color = `--ti-color-${type}`
  const colorLight = `--ti-color-${type}-light-1`
  const colorDark = `--ti-color-${type}-dark-1`
  return c(`&.is-${type}`, [
    c('&:not(.is-fill):not(.is-text)', [
      c('&:after', {
        content: `""`,
        border: `1px solid ${Theme['--ti-color-gray-200']}`,
        position: 'absolute',
        borderRadius: '3px',
        inset: 0
      }),
      c(
        '&:hover:not(.is-disabled):not(.is-dashed), &:focus:not(.is-disabled):not(.is-dashed)',
        {
          color: Theme[colorDark]
        },
        [
          c('&:after', {
            borderWidth: '2px',
            borderColor: Theme[color],
            backgroundColor: Theme[colorLight]
          })
        ]
      ),
      c('&:active:not(.is-disabled):not(.is-dashed)', {
        borderColor: `${Theme[colorDark]} !important`
      }),
      c(
        '&.is-dashed',
        {
          color: Theme[color]
        },
        [
          c('&:after', {
            content: `''`,
            borderStyle: 'dashed',
            borderWidth: '1px',
            borderColor: Theme[color],
            position: 'absolute',
            borderRadius: '3px',
            inset: 0
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
      backgroundColor: Theme[color],
      color: Theme['--ti-color-white']
    }),
    c(
      '&.is-plain:not(.is-fill)',
      {
        backgroundColor: Theme[colorLight]
      },
      [
        c('&:after', {
          borderColor: `${Theme[colorLight]} !important`
        })
      ]
    ),
    c(
      '&.is-text:not(.is-fill):not(.is-plain)',
      {
        color: Theme[color]
      },
      [
        c('&:hover:not(.is-disabled), &:focus:not(.is-disabled)', {
          backgroundColor: Theme['--ti-color-gray-100']
        })
      ]
    )
  ])
})

const renderSize = ThemeSize.map((size) => {
  const $padding = Padding[size]
  const $height = Height[size]
  const $font = FontSize[size]
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
            borderRadius: `${Theme['--ti-border-radius-circle']} !important`
          })
        ]
      ),
      c('&.is-round:not(.is-circle), &.is-round:not(.is-circle):after', {
        borderRadius: `Theme['--ti-border-radius-middle'] !important`
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
      borderRadius: '3px',
      backgroundColor: Theme['--ti-color-transparent'],
      borderColor: Theme['--ti-color-transparent'],
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
      renderType,
      renderSize
    ]
  )
])
