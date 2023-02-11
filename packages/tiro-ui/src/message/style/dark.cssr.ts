import { Theme, DarkTheme } from '../../../theme-chalk'
import { c, cB } from '../../_minxin/cssr'

export default c('.dark-theme', [
  cB('message-container', [
    cB('message-item', [
      cB(
        'message',
        {
          backgroundColor: DarkTheme['--ti-color-dark-bg'],
          color: Theme['--ti-color-white'],
          border: `1px solid ${DarkTheme['--ti-color-dark-500']}`
        },
        [
          c('.clearable', [
            c('&:hover', {
              backgroundColor: DarkTheme['--ti-color-dark-200']
            })
          ])
        ]
      )
    ])
  ])
])
