import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme } from '../../../theme-chalk/index'

export default c([
  cB(
    'card',
    {
      width: '100%',
      border: `1px solid ${Theme['--ti-color-gray-200']}`,
      borderRadius: Theme['--ti-border-radius']
    },
    [
      cE('header', {
        padding: '10px',
        borderBottom: `1px solid ${Theme['--ti-color-gray-200']}`
      }),
      cE('body', {
        padding: '10px'
      })
    ]
  )
])
