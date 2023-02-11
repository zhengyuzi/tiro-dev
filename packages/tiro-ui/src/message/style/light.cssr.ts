import { Theme } from '../../../theme-chalk'
import { c, cB } from '../../_minxin/cssr'

export default cB('message-container', [
  cB('message-item', [
    cB(
      'message',
      {
        backgroundColor: Theme['--ti-color-white']
      },
      [
        c('.clearable', [
          c('&:hover', {
            backgroundColor: Theme['--ti-color-gray-200']
          })
        ])
      ]
    )
  ])
])
