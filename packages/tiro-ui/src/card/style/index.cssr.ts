import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme } from '../../../theme-chalk/index'
import { DarkTheme } from '../../../theme-chalk/index'

const Default = {
  '--ti-border-radius': Theme['--ti-border-radius'],
  '--ti-box-shadow-light': Theme['--ti-box-shadow-light'],
  '--ti-text': Theme['--ti-text'],
  '--ti-text-sm': Theme['--ti-text-sm']
}

const Light = {
  ...Default,
  '--ti-color-bg': Theme['--ti-color-white'],
  '--ti-color-border': Theme['--ti-color-gray-200']
}

const Dark = {
  ...Default,
  '--ti-color-bg': DarkTheme['--ti-color-dark-bg'],
  '--ti-color-border': DarkTheme['--ti-color-dark-500'],
  '--ti-text-color': Theme['--ti-color-gray-200']
}

export const theme = {
  light: Light,
  dark: Dark
}

export default c([
  cB(
    'card',
    {
      width: '100%',
      borderRadius: 'var(--ti-border-radius)',
      backgroundColor: 'var(--ti-color-bg)',
      color: 'var(--ti-text-color)'
    },
    [
      cM(
        'bordered',
        {
          border: `1px solid var(--ti-color-border)`
        },
        [
          cE('header', {
            borderBottom: `1px solid var(--ti-color-border)`
          })
        ]
      ),
      cE('header, body', {
        padding: '12px 15px'
      }),
      cE('header', {
        fontSize: 'var(--ti-text)'
      }),
      cE('body', {
        fontSize: 'var(--ti-text-sm)'
      }),
      c('&.is-always', {
        boxShadow: 'var(--ti-box-shadow-light)'
      }),
      c('&.is-hover', [
        c('&:hover', {
          boxShadow: 'var(--ti-box-shadow-light)'
        })
      ])
    ]
  )
])
