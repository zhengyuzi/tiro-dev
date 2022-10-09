import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme } from '../../../theme-chalk/index'

export default c([
  cB(
    'card',
    {
      width: '100%',
      borderRadius: Theme['--ti-border-radius']
    },
    [
      cM(
        'bordered',
        {
          border: `1px solid ${Theme['--ti-color-gray-200']}`
        },
        [
          cE('header', {
            borderBottom: `1px solid ${Theme['--ti-color-gray-200']}`
          })
        ]
      ),
      cE('header, body', {
        padding: '12px 15px'
      }),
      cE('header', {
        fontSize: '16px'
      }),
      cE('body', {
        fontSize: '14px'
      }),
      c('&.is-always', {
        boxShadow: Theme['--ti-box-shadow-light']
      }),
      c('&.is-hover', [
        c('&:hover', {
          boxShadow: Theme['--ti-box-shadow-light']
        })
      ])
    ]
  )
])
