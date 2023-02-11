import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme } from '../../../theme-chalk/index'
import Dark from './dark.cssr'
import Light from './light.cssr'

export default c([
  Dark,
  Light,
  cB(
    'message-container',
    {
      position: 'fixed',
      zIndex: Theme['--ti-z-index-6000'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: 0,
      left: 0,
      top: '20px'
    },
    [
      cB(
        'message-item',
        {
          maxWidth: 'calc(100% - 32px)'
        },
        [
          cB(
            'message',
            {
              padding: '10px 16px',
              marginBottom: '8px',
              boxSizing: 'border-box',
              borderRadius: Theme['--ti-border-radius'],
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              transition: 'opacity 0.3s, transform 0.3s',
              boxShadow:
                '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)'
            },
            [
              c('& > *', {}, [
                c('&:not(:last-child)', {
                  marginRight: '5px'
                })
              ]),
              cE('inner', {
                flex: 1
              }),
              c('.clearable', {
                cursor: 'pointer',
                padding: '2px',
                borderRadius: Theme['--ti-border-radius']
              })
            ]
          )
        ]
      )
    ]
  ),
  c('.message-fade-enter-from, .message-fade-leave-to', {
    transform: 'translateY(-50%)',
    opacity: 0
  })
])
