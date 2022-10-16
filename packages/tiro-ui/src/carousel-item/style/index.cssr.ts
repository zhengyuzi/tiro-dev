import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme } from '../../../theme-chalk/index'

export default c([
  cB(
    'carousel-item',
    {
      width: '100%',
      height: '100%',
      flexShrink: 0
    },
    [
      c('& > *', {
        width: '100%'
      })
    ]
  )
])
