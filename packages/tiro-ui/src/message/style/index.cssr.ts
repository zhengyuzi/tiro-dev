import { c, cB, cE, cM } from '../../_minxin/cssr'
import { Theme } from '../../../theme-chalk/index'

export default c([
  cB(
    'message-container',
    {
      position: 'fixed',
      zIndex: Theme['--ti-z-index-6000'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 'calc(100vw - 20px)',
      width: '600px',
      height: 0,
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    [
      cB(
        'message',
        {
          padding: '10px 16px',
          marginBottom: '8px',
          borderRadius: Theme['--ti-border-radius'],
          fontSize: '14px',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
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
          c(
            '.clearable',
            {
              cursor: 'pointer',
              padding: '2px',
              color: Theme['--ti-color-gray-600'],
              borderRadius: Theme['--ti-border-radius']
            },
            [
              c('&:hover', {
                backgroundColor: Theme['--ti-color-gray-200']
              })
            ]
          )
        ]
      )
    ]
  ),
  c('.message-fade-enter-from, .message-fade-leave-to', {
    transform: 'scale(0.85) translateY(-10%)',
    opacity: 0
  }),
  c('.message-fade-enter-to, .message-fade-leave-from', {
    transform: 'scale(1)',
    opacity: 1
  }),
  c('.message-fade-enter-active', {
    transition: 'opacity .3s, transform .3s'
  }),
  c('.message-fade-leave-active', {
    transition: 'opacity .3s, transform .3s'
  })
])
